// /home/ubuntu/e_learning_platform/backend/src/controllers/paymentController.js

// const Stripe = require("stripe");
// const stripe = Stripe(process.env.STRIPE_SECRET_KEY);
// const User = require("../models/User");
// const Payment = require("../models/Payment");

// exports.createCheckoutSession = async (req, res) => {
//   // const { priceId, courseId } = req.body; // priceId from Stripe for Pro subscription, courseId if buying a course
//   // const userId = req.user.id;

//   // try {
//   //   const user = await User.findById(userId);
//   //   if (!user) {
//   //     return res.status(404).json({ message: "User not found." });
//   //   }

//   //   const session = await stripe.checkout.sessions.create({
//   //     payment_method_types: ["card"],
//   //     mode: "subscription", // or "payment" for one-time course purchase
//   //     customer_email: user.email, // Pre-fill email
//   //     client_reference_id: userId.toString(),
//   //     line_items: [
//   //       {
//   //         price: priceId, // Stripe Price ID for the Pro plan
//   //         quantity: 1,
//   //       },
//   //     ],
//   //     success_url: `${process.env.FRONTEND_URL}/payment-success?session_id={CHECKOUT_SESSION_ID}`,
//   //     cancel_url: `${process.env.FRONTEND_URL}/payment-cancelled`,
//   //     metadata: {
//   //       userId: userId.toString(),
//   //       // courseId: courseId ? courseId.toString() : null,
//   //       type: "subscription_pro"
//   //     }
//   //   });

//   //   res.json({ id: session.id });
//   // } catch (error) {
//   //   console.error("Error creating Stripe checkout session:", error);
//   //   res.status(500).json({ error: "Failed to create checkout session." });
//   // }
//   res.status(501).json({ message: "Create checkout session endpoint not implemented yet." });
// };

// exports.handleStripeWebhook = async (req, res) => {
//   // const sig = req.headers["stripe-signature"];
//   // const endpointSecret = process.env.STRIPE_WEBHOOK_SECRET;
//   // let event;

//   // try {
//   //   event = stripe.webhooks.constructEvent(req.body, sig, endpointSecret);
//   // } catch (err) {
//   //   console.error(`Webhook signature verification failed.`, err.message);
//   //   return res.sendStatus(400);
//   // }

//   // // Handle the event
//   // switch (event.type) {
//   //   case "checkout.session.completed":
//   //     const session = event.data.object;
//   //     // Fulfill the purchase (e.g., update user subscription status)
//   //     // const userId = session.client_reference_id;
//   //     // const stripeCustomerId = session.customer;
//   //     // const subscriptionId = session.subscription;
//   //     // await User.findByIdAndUpdate(userId, {
//   //     //   stripeCustomerId: stripeCustomerId,
//   //     //   stripeSubscriptionId: subscriptionId, // Store subscription ID for future management
//   //     //   subscriptionTier: "pro", // Or based on metadata
//   //     //   subscriptionEndDate: new Date(new Date().setMonth(new Date().getMonth() + 1)) // Example: 1 month
//   //     // });
//   //     // Create a Payment record
//   //     // await new Payment({
//   //     //    userId: userId,
//   //     //    stripePaymentIntentId: session.payment_intent,
//   //     //    stripeCustomerId: stripeCustomerId,
//   //     //    amount: session.amount_total,
//   //     //    currency: session.currency,
//   //     //    status: "succeeded",
//   //     //    subscriptionTier: "pro"
//   //     // }).save();
//   //     console.log("Checkout session completed:", session);
//   //     break;
//   //   // ... handle other event types (e.g., invoice.payment_succeeded for recurring)
//   //   default:
//   //     console.log(`Unhandled event type ${event.type}`);
//   // }

//   // res.json({ received: true });
//   res.status(501).json({ message: "Stripe webhook handler not implemented yet." });
// };

// exports.getSubscriptionStatus = async (req, res) => {
//   // try {
//   //   const user = await User.findById(req.user.id);
//   //   if (!user) return res.status(404).json({ message: "User not found" });
//   //   res.json({
//   //     subscriptionTier: user.subscriptionTier,
//   //     subscriptionEndDate: user.subscriptionEndDate,
//   //   });
//   // } catch (error) {
//   //   res.status(500).json({ message: "Server error" });
//   // }
//   res.status(501).json({ message: "Get subscription status endpoint not implemented yet." });
// };

exports.placeholder = (req, res) => {
    res.json({message: "Payment controller placeholder"});
};
