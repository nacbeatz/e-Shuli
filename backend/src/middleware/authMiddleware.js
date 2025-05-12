// /home/ubuntu/e_learning_platform/backend/src/middleware/authMiddleware.js

// const jwt = require("jsonwebtoken");
// const User = require("../models/User");

// module.exports = async function (req, res, next) {
//   // Get token from header
//   const token = req.header("x-auth-token"); // Or from Authorization Bearer token

//   // Check if not token
//   if (!token) {
//     return res.status(401).json({ msg: "No token, authorization denied" });
//   }

//   // Verify token
//   try {
//     const decoded = jwt.verify(token, process.env.JWT_SECRET);
//     req.user = decoded; // Add user from payload (e.g., { id: userId, role: userRole })
    
//     // Optional: Check if user still exists in DB (more secure but adds DB call)
//     // const userExists = await User.findById(req.user.id);
//     // if (!userExists) {
//     //   return res.status(401).json({ msg: "Token is not valid, user does not exist" });
//     // }

//     next();
//   } catch (err) {
//     res.status(401).json({ msg: "Token is not valid" });
//   }
// };

// Placeholder middleware
module.exports = function (req, res, next) {
  console.log("authMiddleware placeholder: Bypassing token check for now. req.user might not be populated.");
  // For testing, you might want to mock a user object:
  // req.user = { id: "mockUserId", role: "admin" }; 
  next();
};

