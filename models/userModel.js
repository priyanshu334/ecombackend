const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true }
});

// Check if the model already exists
module.exports = mongoose.models.User || mongoose.model('User', userSchema);
