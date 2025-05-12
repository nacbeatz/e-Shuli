// /home/ubuntu/e_learning_platform/backend/src/middleware/authMiddleware.js
const jwt = require("jsonwebtoken");

// Middleware to verify JWT and attach user to request
exports.verifyToken = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({ message: "Access denied. No token provided or token is malformed." });
  }

  const token = authHeader.split(" ")[1];

  try {
    // TODO: Replace "YOUR_JWT_SECRET" with an actual secret from environment variables
    const decoded = jwt.verify(token, process.env.JWT_SECRET || "YOUR_JWT_SECRET"); 
    req.user = decoded; // Contains userId, role, etc. as put into the token during login
    next();
  } catch (error) {
    console.error("JWT Verification Error:", error.message);
    if (error.name === "TokenExpiredError") {
        return res.status(401).json({ message: "Token expired." });
    }
    return res.status(401).json({ message: "Invalid token." });
  }
};

// Middleware to optionally verify JWT. If token exists and is valid, attach user. If not, proceed without user.
exports.verifyTokenOptional = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (authHeader && authHeader.startsWith("Bearer ")) {
    const token = authHeader.split(" ")[1];
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET || "YOUR_JWT_SECRET");
      req.user = decoded; // Attach user if token is valid
    } catch (error) {
      // Token is present but invalid (e.g., expired, malformed). 
      // Depending on policy, you could deny access or just proceed without req.user.
      // For optional auth, it's often better to proceed without user if token is bad.
      console.warn("Optional JWT Verification Warning (token present but invalid):", error.message);
      req.user = null; // Ensure req.user is not set with old/invalid data
    }
  } else {
    req.user = null; // No token provided, proceed without user
  }
  next();
};

