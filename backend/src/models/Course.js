// /home/ubuntu/e_learning_platform/backend/src/models/Course.js

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ResourceSchema = new Schema({
  name: { type: String, required: true },
  url: { type: String, required: true }, // Could be a URL to a downloadable file or an external link
  type: { type: String, enum: ["video", "pdf", "link", "file"], default: "file" }
});

const LessonSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String },
  videoUrl: { type: String }, // YouTube link or other video source
  contentType: { type: String, enum: ["video", "quiz", "assignment", "resource"], required: true },
  contentId: { type: Schema.Types.ObjectId, refPath: "modules.lessons.contentTypeRef" }, // Dynamic ref to Quiz or Assignment
  contentTypeRef: { type: String, enum: ["Quiz", "Assignment"] }, // To specify which model contentId refers to
  resources: [ResourceSchema],
  order: { type: Number, default: 0 }
});

const ModuleSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String },
  lessons: [LessonSchema],
  order: { type: Number, default: 0 }
});

const CourseSchema = new Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    required: true,
  },
  lecturerId: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  category: {
    type: String, // e.g., "AI", "Web Development", "HTML", "CSS", "JavaScript"
    required: true,
  },
  thumbnailUrl: {
    type: String, // URL to a course thumbnail image
  },
  modules: [ModuleSchema],
  price: {
    type: Number, // Price for individual purchase if applicable, or 0 if only by subscription
    default: 0,
  },
  requiredSubscriptionTier: {
    type: String,
    enum: ["free", "pro", "advanced", "none"], // 'none' if course can be bought individually or is part of all tiers
    default: "free",
  },
  isPublished: {
    type: Boolean,
    default: false,
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

module.exports = mongoose.model("Course", CourseSchema);

