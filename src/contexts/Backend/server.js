
const express = require('express');
const Razorpay = require('razorpay');
const crypto = require('crypto');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors({
  origin: 'http://localhost:3000', // Replace with your frontend URL
  methods: ['GET', 'POST'],
  credentials: true,
}));

// Razorpay instance
const rzp = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID, // Public key
  key_secret: process.env.RAZORPAY_KEY_SECRET, // Secret key from .env
});

// Define valid prices to prevent tampering
const premiumPrices = {
  INR: 5000,
  USD: 199,
  EUR: 179,
  AED: 599,
  SAR: 599,
  OMR: 59,
  AUD: 299,
};

const vipPrices = {
  INR: 15000,
  USD: 599,
  EUR: 539,
  AED: 1799,
  SAR: 1799,
  OMR: 179,
  AUD: 899,
};

// Endpoint to create Razorpay order
app.post('/api/create-razorpay-order', async (req, res) => {
  const { amount, currency, tier, userId, email, name } = req.body;

  // Validate tier and currency
  const prices = tier === 'premium' ? premiumPrices : vipPrices;
  if (!prices[currency]) {
    return res.status(400).json({ error: 'Invalid currency' });
  }

  // Verify amount matches expected price (prevents client-side tampering)
  const expectedAmount = prices[currency] * 100; // Convert to smallest unit
  if (amount !== expectedAmount) {
    return res.status(400).json({ error: 'Invalid amount' });
  }

  // For VIP, add invitation check (replace with your logic)
  if (tier === 'vip') {
    const isInvited = false; // Replace with actual check (e.g., database query)
    if (!isInvited) {
      return res.status(403).json({ error: 'Invitation required for VIP' });
    }
  }

  try {
    const order = await rzp.orders.create({
      amount, // In smallest unit (e.g., paise for INR)
      currency,
      receipt: `receipt_${tier}_${userId}`,
      notes: { tier, userId },
    });
    res.json({
      order_id: order.id,
      amount: order.amount,
      currency: order.currency,
    });
  } catch (error) {
    console.error('Order creation error:', error);
    res.status(500).json({ error: 'Order creation failed' });
  }
});

// Endpoint to verify payment
app.post('/api/verify-razorpay-payment', (req, res) => {
  const { order_id, payment_id, signature, tier, userId } = req.body;

  // Verify signature
  const hmac = crypto.createHmac('sha256', process.env.RAZORPAY_KEY_SECRET);
  hmac.update(order_id + '|' + payment_id);
  const generatedSignature = hmac.digest('hex');

  if (generatedSignature === signature) {
    // Payment verified - update database (e.g., activate subscription)
    // Example: updateUserSubscription(userId, tier);
    console.log(`Payment verified for user ${userId}, tier: ${tier}`);
    res.json({ success: true });
  } else {
    res.status(400).json({ success: false, error: 'Invalid signature' });
  }
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
