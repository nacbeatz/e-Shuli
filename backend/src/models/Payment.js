// /home/ubuntu/e_learning_platform/backend/src/models/Payment.js

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PaymentSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  courseId: { // Optional: if payment is for a specific course purchase
    type: Schema.Types.ObjectId,
    ref: "Course",
  },
  subscriptionTier: { // Optional: if payment is for a subscription
    type: String,
    enum: ["pro", "advanced"], // Free tier doesn't involve payment
  },
  stripePaymentIntentId: {
    type: String,
    required: true,
    unique: true,
  },
  stripeCustomerId: {
    type: String,
    required: true,
  },
  amount: {
    type: Number, // Amount in smallest currency unit (e.g., cents)
    required: true,
  },
  currency: {
    type: String,
    required: true, // e.g., "usd"
  },
  status: {
    type: String,
    enum: ["succeeded", "pending", "failed"],
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Payment", PaymentSchema);

