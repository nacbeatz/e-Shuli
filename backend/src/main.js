// src/main.js - Main entry point for the backend

require("dotenv").config(); // Load environment variables from .env file

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const passport = require("passport");

// Import routes
// const authRoutes = require("./routes/authRoutes");
// const courseRoutes = require("./routes/courseRoutes");
// const userRoutes = require("./routes/userRoutes");
// const paymentRoutes = require("./routes/paymentRoutes");
// const adminRoutes = require("./routes/adminRoutes");

// Initialize Express app
const app = express();

// Middleware
app.use(cors()); // Enable Cross-Origin Resource Sharing
app.use(express.json()); // Parse JSON request bodies
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded request bodies

// Passport middleware (for Google OAuth)
app.use(passport.initialize());
// require("./config/passport")(passport); // Passport config - to be created

// Database Connection
const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost:27017/eLearningDB";
mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB Connected successfully"))
  .catch(err => console.error("MongoDB connection error:", err));

// Basic Route for testing
app.get("/", (req, res) => {
  res.send("E-Learning Platform Backend API is running!");
});

// API Routes - To be uncommented and implemented
// app.use("/api/auth", authRoutes);
// app.use("/api/courses", courseRoutes);
// app.use("/api/users", userRoutes);
// app.use("/api/payments", paymentRoutes);
// app.use("/api/admin", adminRoutes);

// Global Error Handler (Example - can be more sophisticated)
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send({ error: "Something went wrong!" });
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

