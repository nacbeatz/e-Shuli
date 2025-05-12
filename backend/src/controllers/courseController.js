// /home/ubuntu/e_learning_platform/backend/src/controllers/courseController.js
const Course = require("../models/Course");
const User = require("../models/User"); // Needed for checking lecturer role or admin

// Create a new course (Lecturer/Admin only)
exports.createCourse = async (req, res) => {
  try {
    const { title, description, category, difficultyLevel, modules, price, isPublished } = req.body;
    const lecturerId = req.user.userId; // Assuming authMiddleware adds user to req

    // Validate lecturer exists and has the correct role (this should ideally be in roleMiddleware)
    const lecturer = await User.findById(lecturerId);
    if (!lecturer || (lecturer.role !== "Lecturer" && lecturer.role !== "Admin")) {
      return res.status(403).json({ message: "User not authorized to create courses" });
    }

    const newCourse = new Course({
      title,
      description,
      category,
      difficultyLevel,
      lecturer: lecturerId,
      thumbnailImageUrl: req.body.thumbnailImageUrl || null, // Optional
      modules: modules || [], // Ensure modules is an array
      price: price || 0,
      isPublished: isPublished || false,
      updatedAt: Date.now(),
    });

    const savedCourse = await newCourse.save();
    res.status(201).json(savedCourse);
  } catch (error) {
    console.error("Error creating course:", error);
    res.status(500).json({ message: "Error creating course", error: error.message });
  }
};

// Get all published courses (with filtering/sorting)
exports.getAllPublishedCourses = async (req, res) => {
  try {
    const { category, sortBy, page = 1, limit = 10 } = req.query;
    const query = { isPublished: true };
    if (category) {
      query.category = category;
    }

    let sortOption = {};
    if (sortBy) {
      if (sortBy === "createdAt_desc") sortOption.createdAt = -1;
      if (sortBy === "createdAt_asc") sortOption.createdAt = 1;
      if (sortBy === "title_asc") sortOption.title = 1;
      if (sortBy === "title_desc") sortOption.title = -1;
      // Add more sorting options like popularity (e.g., based on enrollment or ratings) later
    } else {
      sortOption.createdAt = -1; // Default sort by newest
    }

    const courses = await Course.find(query)
      .populate("lecturer", "fullName profilePictureUrl") // Populate lecturer details
      .sort(sortOption)
      .limit(limit * 1)
      .skip((page - 1) * limit)
      .exec();

    const count = await Course.countDocuments(query);

    res.status(200).json({
      courses,
      totalPages: Math.ceil(count / limit),
      currentPage: parseInt(page),
      totalCourses: count,
    });
  } catch (error) {
    console.error("Error fetching published courses:", error);
    res.status(500).json({ message: "Error fetching courses", error: error.message });
  }
};

// Get a single course by ID
exports.getCourseById = async (req, res) => {
  try {
    const courseId = req.params.courseId;
    const course = await Course.findById(courseId)
                         .populate("lecturer", "fullName profilePictureUrl email")
                         .populate("modules.lessons"); // Populate deeply if needed, or handle lesson fetching separately

    if (!course || !course.isPublished) {
      // Allow admins/lecturers who own the course to see unpublished courses
      if (req.user) {
        const user = await User.findById(req.user.userId);
        if (user && (user.role === "Admin" || (user.role === "Lecturer" && course.lecturer.equals(user._id)))) {
          // Allow access
        } else {
          return res.status(404).json({ message: "Course not found or not published" });
        }
      } else {
        return res.status(404).json({ message: "Course not found or not published" });
      }
    }
    
    // Determine access level for the current user (if authenticated)
    let userAccessLevel = "intro"; // Default for non-authenticated or free tier
    if (req.user) {
        const user = await User.findById(req.user.userId).populate("enrolledCourses.courseId");
        if (user) {
            const enrollment = user.enrolledCourses.find(ec => ec.courseId.equals(course._id));
            if (enrollment) {
                userAccessLevel = enrollment.accessLevel; // "intro" or "full"
            }
            // Consider Pro subscription for full access to all courses if that's a global setting
            // For now, access is per course enrollment or purchase
        }
    }

    // Clone course object to modify it for the response
    let courseResponse = course.toObject();

    if (userAccessLevel === "intro") {
        // Limit content for intro access: only first module/lesson or specific intro content
        if (courseResponse.modules && courseResponse.modules.length > 0) {
            const firstModule = courseResponse.modules[0];
            if (firstModule.lessons && firstModule.lessons.length > 0) {
                firstModule.lessons = [firstModule.lessons[0]]; // Only first lesson of first module
            }
            courseResponse.modules = [firstModule]; // Only first module
            // Mark other lessons/modules as locked or remove them
        }
    }
    // If userAccessLevel is "full", they get all content (courseResponse is already complete)

    res.status(200).json({ course: courseResponse, userAccessLevel });

  } catch (error) {
    console.error("Error fetching course by ID:", error);
    if (error.kind === "ObjectId") {
        return res.status(404).json({ message: "Course not found (invalid ID format)" });
    }
    res.status(500).json({ message: "Error fetching course details", error: error.message });
  }
};

// Update an existing course (Lecturer who owns course/Admin only)
exports.updateCourse = async (req, res) => {
  try {
    const courseId = req.params.courseId;
    const updates = req.body;
    updates.updatedAt = Date.now();

    const course = await Course.findById(courseId);
    if (!course) {
      return res.status(404).json({ message: "Course not found" });
    }

    // Authorization: Only the lecturer who created the course or an Admin can update
    if (!( (req.user.role === "Lecturer" && course.lecturer.equals(req.user.userId)) || req.user.role === "Admin" )) {
        return res.status(403).json({ message: "User not authorized to update this course" });
    }

    const updatedCourse = await Course.findByIdAndUpdate(courseId, updates, { new: true });
    res.status(200).json(updatedCourse);
  } catch (error) {
    console.error("Error updating course:", error);
    res.status(500).json({ message: "Error updating course", error: error.message });
  }
};

// Delete a course (Lecturer who owns course/Admin only)
exports.deleteCourse = async (req, res) => {
  try {
    const courseId = req.params.courseId;
    const course = await Course.findById(courseId);

    if (!course) {
      return res.status(404).json({ message: "Course not found" });
    }

    // Authorization: Only the lecturer who created the course or an Admin can delete
    if (!( (req.user.role === "Lecturer" && course.lecturer.equals(req.user.userId)) || req.user.role === "Admin" )) {
        return res.status(403).json({ message: "User not authorized to delete this course" });
    }

    await Course.findByIdAndDelete(courseId);
    // TODO: Also remove this course from all users' enrolledCourses lists

    res.status(200).json({ message: "Course deleted successfully" });
  } catch (error) {
    console.error("Error deleting course:", error);
    res.status(500).json({ message: "Error deleting course", error: error.message });
  }
};

// Get courses created by the authenticated lecturer
exports.getLecturerCourses = async (req, res) => {
    try {
        const lecturerId = req.user.userId;
        const courses = await Course.find({ lecturer: lecturerId })
                                .sort({ createdAt: -1 });
        res.status(200).json(courses);
    } catch (error) {
        console.error("Error fetching lecturer's courses:", error);
        res.status(500).json({ message: "Error fetching lecturer courses", error: error.message });
    }
};

