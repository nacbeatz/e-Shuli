// /home/ubuntu/e_learning_platform/backend/src/models/User.js

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  googleId: {
    type: String,
    // required: true, // Required if Google OAuth is the only way to create users
    unique: true,
    sparse: true, // Allows multiple nulls if not all users have googleId
  },
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String, // Required if direct registration/login is supported
  },
  profilePictureUrl: {
    type: String,
  },
  role: {
    type: String,
    enum: ["student", "lecturer", "admin"],
    default: "student",
  },
  subscriptionTier: {
    type: String,
    enum: ["free", "pro", "advanced"],
    default: "free",
  },
  stripeCustomerId: {
    type: String,
  },
  subscriptionEndDate: {
    type: Date,
  },
  enrolledCourses: [
    {
      type: Schema.Types.ObjectId,
      ref: "Course",
    },
  ],
  createdCourses: [
    {
      type: Schema.Types.ObjectId,
      ref: "Course",
    },
  ],
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

// Pre-save hook for password hashing if direct registration is used
// UserSchema.pre("save", async function (next) {
//   if (!this.isModified("password") || !this.password) {
//     return next();
//   }
//   try {
//     const salt = await bcrypt.genSalt(10);
//     this.password = await bcrypt.hash(this.password, salt);
//     next();
//   } catch (err) {
//     next(err);
//   }
// });

module.exports = mongoose.model("User", UserSchema);

