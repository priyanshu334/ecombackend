const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    products: [{
        productId: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' },
        quantity: Number
    }],
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    totalAmount: Number,
    status: { type: String, default: 'pending' },
    createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Order', orderSchema);
