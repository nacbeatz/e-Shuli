// /home/ubuntu/e_learning_platform/backend/src/middleware/roleMiddleware.js

// module.exports = function (roles) {
//   return (req, res, next) => {
//     if (!req.user || !req.user.role) {
//       return res.status(403).json({ msg: "Access denied. No role information." });
//     }
//     if (!roles.includes(req.user.role)) {
//       return res.status(403).json({ msg: "Access denied. Insufficient permissions." });
//     }
//     next();
//   };
// };

// Placeholder middleware
module.exports = function (roles) {
  return (req, res, next) => {
    console.log(`roleMiddleware placeholder: Required roles: ${roles}. Bypassing check for now.`);
    // For testing, ensure req.user.role is set by authMiddleware mock or similar
    // if (req.user && !roles.includes(req.user.role)) {
    //   return res.status(403).json({ msg: "Access denied (mock check)." });
    // }
    next();
  };
};

