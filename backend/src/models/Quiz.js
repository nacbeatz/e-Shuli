// /home/ubuntu/e_learning_platform/backend/src/models/Quiz.js

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const QuestionSchema = new Schema({
  questionText: { type: String, required: true },
  options: [{ type: String, required: true }], // Array of possible answers
  correctAnswerIndex: { type: Number, required: true }, // Index of the correct answer in the options array
  explanation: { type: String } // Optional explanation for the answer
});

const QuizSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  courseId: {
    type: Schema.Types.ObjectId,
    ref: "Course",
    required: true,
  },
  lessonId: { // Optional: if quiz is tied to a specific lesson
    type: Schema.Types.ObjectId,
    // ref: "Course.modules.lessons" // This direct ref might be tricky, usually ref the top-level Course or Lesson model
  },
  questions: [QuestionSchema],
  timeLimit: { // Optional: time limit in minutes
    type: Number,
  },
  passingScore: { // Optional: percentage or number of correct answers required to pass
    type: Number,
    default: 70, // Example: 70%
  },
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

module.exports = mongoose.model("Quiz", QuizSchema);

