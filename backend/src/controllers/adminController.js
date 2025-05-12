// /home/ubuntu/e_learning_platform/backend/src/controllers/adminController.js

// const User = require("../models/User");
// const Course = require("../models/Course");

// exports.getAllUsers = async (req, res) => {
//   try {
//     const users = await User.find().select("-password");
//     res.json(users);
//   } catch (err) {
//     console.error(err.message);
//     res.status(500).send("Server Error");
//   }
// };

// exports.getUserById = async (req, res) => {
//   try {
//     const user = await User.findById(req.params.userId).select("-password");
//     if (!user) return res.status(404).json({ msg: "User not found" });
//     res.json(user);
//   } catch (err) {
//     console.error(err.message);
//     if (err.kind === "ObjectId") return res.status(404).json({ msg: "User not found" });
//     res.status(500).send("Server Error");
//   }
// };

// exports.updateUserRole = async (req, res) => {
//   const { role } = req.body;
//   if (!["student", "lecturer", "admin"].includes(role)) {
//     return res.status(400).json({ msg: "Invalid role specified" });
//   }
//   try {
//     let user = await User.findById(req.params.userId);
//     if (!user) return res.status(404).json({ msg: "User not found" });

//     user.role = role;
//     user.updatedAt = Date.now();
//     await user.save();
//     res.json(user.select("-password"));
//   } catch (err) {
//     console.error(err.message);
//     res.status(500).send("Server Error");
//   }
// };

// exports.getAllCoursesAdmin = async (req, res) => {
//   try {
//     const courses = await Course.find().populate("lecturerId", "name email");
//     res.json(courses);
//   } catch (err) {
//     console.error(err.message);
//     res.status(500).send("Server Error");
//   }
// };

// exports.toggleCoursePublishStatus = async (req, res) => {
//   try {
//     const course = await Course.findById(req.params.courseId);
//     if (!course) return res.status(404).json({ msg: "Course not found" });

//     course.isPublished = !course.isPublished;
//     course.updatedAt = Date.now();
//     await course.save();
//     res.json(course);
//   } catch (err) {
//     console.error(err.message);
//     res.status(500).send("Server Error");
//   }
// };

// exports.getPlatformAnalytics = async (req, res) => {
//   // Placeholder for analytics data
//   // Example: count users, courses, subscriptions etc.
//   // const userCount = await User.countDocuments();
//   // const courseCount = await Course.countDocuments();
//   // const proSubscriptionCount = await User.countDocuments({ subscriptionTier: "pro" });
//   // res.json({ userCount, courseCount, proSubscriptionCount });
//   res.status(501).json({ message: "Platform analytics endpoint not implemented yet." });
// };

exports.placeholder = (req, res) => {
    res.json({message: "Admin controller placeholder"});
};
