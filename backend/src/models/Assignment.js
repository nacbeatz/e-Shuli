// /home/ubuntu/e_learning_platform/backend/src/models/Assignment.js

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const AssignmentSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  courseId: {
    type: Schema.Types.ObjectId,
    ref: "Course",
    required: true,
  },
  lessonId: { // Optional: if assignment is tied to a specific lesson
    type: Schema.Types.ObjectId,
  },
  dueDate: {
    type: Date,
  },
  maxPoints: {
    type: Number,
    default: 100,
  },
  // Stores submissions for this assignment
  // Alternatively, submissions can be a separate collection referencing Assignment and User
  submissions: [
    {
      userId: { type: Schema.Types.ObjectId, ref: "User", required: true },
      submittedAt: { type: Date, default: Date.now },
      fileUrl: { type: String }, // URL to submitted file if applicable
      textSubmission: { type: String }, // For text-based submissions
      grade: { type: Number },
      feedback: { type: String },
    },
  ],
  createdBy: {
    type: Schema.Types.ObjectId,
    ref: "User", // Lecturer or Admin
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Assignment", AssignmentSchema);

