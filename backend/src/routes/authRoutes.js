// /home/ubuntu/e_learning_platform/backend/src/routes/authRoutes.js

const express = require("express");
const router = express.Router();
// const authController = require("../controllers/authController"); // To be created
const passport = require("passport");

// @route   POST api/auth/register
// @desc    Register user (if direct registration is supported alongside OAuth)
// @access  Public
// router.post("/register", authController.registerUser);

// @route   POST api/auth/login
// @desc    Login user / Get token (if direct login is supported)
// @access  Public
// router.post("/login", authController.loginUser);

// @route   GET api/auth/google
// @desc    Authenticate with Google
// @access  Public
router.get("/google", passport.authenticate("google", { scope: ["profile", "email"] }));

// @route   GET api/auth/google/callback
// @desc    Google auth callback
// @access  Public
router.get(
  "/google/callback",
  passport.authenticate("google", { failureRedirect: "/login", session: false }), // session: false as we'll use JWT
  (req, res) => {
    // Successful authentication, redirect or send token.
    // const token = authController.generateToken(req.user);
    // res.redirect(`http://localhost:3000/dashboard?token=${token}`); // Or your frontend URL
    res.json({ message: "Google OAuth successful, user data should be in req.user", user: req.user }); // Placeholder
  }
);

// @route   GET api/auth/user
// @desc    Get current user (protected route)
// @access  Private
// const authMiddleware = require('../middleware/authMiddleware'); // To be created
// router.get('/user', authMiddleware, authController.getCurrentUser);

module.exports = router;

