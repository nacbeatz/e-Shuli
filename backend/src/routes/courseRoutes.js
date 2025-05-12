// /home/ubuntu/e_learning_platform/backend/src/routes/courseRoutes.js
const express = require("express");
const router = express.Router();
const courseController = require("../controllers/courseController");
const authMiddleware = require("../middleware/authMiddleware");
const roleMiddleware = require("../middleware/roleMiddleware");

// POST /api/v1/courses - Create a new course
router.post("/", 
    authMiddleware.verifyToken, 
    roleMiddleware.isLecturerOrAdmin, 
    courseController.createCourse
);

// GET /api/v1/courses - Get all published courses (publicly accessible, filtering handled in controller)
router.get("/", courseController.getAllPublishedCourses);

// GET /api/v1/courses/my-creations - Get courses created by the authenticated lecturer
router.get("/my-creations",
    authMiddleware.verifyToken,
    roleMiddleware.isLecturer,
    courseController.getLecturerCourses
);

// GET /api/v1/courses/:courseId - Get a single course by ID (access control handled in controller)
router.get("/:courseId", authMiddleware.verifyTokenOptional, courseController.getCourseById); // verifyTokenOptional allows non-logged in users too

// PUT /api/v1/courses/:courseId - Update an existing course
router.put("/:courseId",
    authMiddleware.verifyToken,
    roleMiddleware.isLecturerOrAdmin, // Further ownership check done in controller
    courseController.updateCourse
);

// DELETE /api/v1/courses/:courseId - Delete a course
router.delete("/:courseId",
    authMiddleware.verifyToken,
    roleMiddleware.isLecturerOrAdmin, // Further ownership check done in controller
    courseController.deleteCourse
);

module.exports = router;

