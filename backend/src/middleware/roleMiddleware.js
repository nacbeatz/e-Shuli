// /home/ubuntu/e_learning_platform/backend/src/middleware/roleMiddleware.js

// Middleware to check if user is an Admin
exports.isAdmin = (req, res, next) => {
  if (req.user && req.user.role === "Admin") {
    next();
  } else {
    res.status(403).json({ message: "Access denied. Admin role required." });
  }
};

// Middleware to check if user is a Lecturer
exports.isLecturer = (req, res, next) => {
  if (req.user && req.user.role === "Lecturer") {
    next();
  } else {
    res.status(403).json({ message: "Access denied. Lecturer role required." });
  }
};

// Middleware to check if user is a Student
exports.isStudent = (req, res, next) => {
  if (req.user && req.user.role === "Student") {
    next();
  } else {
    res.status(403).json({ message: "Access denied. Student role required." });
  }
};

// Middleware to check if user is a Lecturer OR an Admin
exports.isLecturerOrAdmin = (req, res, next) => {
    if (req.user && (req.user.role === "Lecturer" || req.user.role === "Admin")) {
        next();
    } else {
        res.status(403).json({ message: "Access denied. Lecturer or Admin role required." });
    }
};

