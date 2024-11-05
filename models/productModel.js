const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: String,
    description: String,
    price: Number,
    category: String,
    imageUrl: String,
    stock: Number,
});

// Check if the model already exists
module.exports = mongoose.models.Product || mongoose.model('Product', productSchema);
