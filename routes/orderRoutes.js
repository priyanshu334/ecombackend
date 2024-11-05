const express = require('express');
const Order = require('../models/orderModel');
const authMiddleware = require('../middleware/authMiddleware');
const router = express.Router();

// Create an order
router.post('/', authMiddleware, async (req, res) => {
    const { products, totalAmount } = req.body;
    const newOrder = new Order({
        products,
        userId: req.user.id,
        totalAmount
    });
    await newOrder.save();
    res.status(201).json(newOrder);
});

// Get an order by ID
router.get('/:id', authMiddleware, async (req, res) => {
    const order = await Order.findById(req.params.id).populate('products.productId');
    if (!order) return res.status(404).json({ message: 'Order not found' });
    res.json(order);
});

// Update order status
router.put('/:id', authMiddleware, async (req, res) => {
    const { status } = req.body;
    const order = await Order.findByIdAndUpdate(req.params.id, { status }, { new: true });
    res.json(order);
});

module.exports = router;
