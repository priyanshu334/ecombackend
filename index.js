const express = require('express');
const connectDB = require('./config/db');
const authRoutes = require('./routes/userRoutes');
const productRoutes = require('./routes/productsRoutes');
const orderRoutes = require('./routes/orderRoutes');
require('dotenv').config();

const app = express();

// Connect to Database
connectDB();

// Middleware
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/products', productRoutes);
app.use('/api/orders', orderRoutes);

app.listen(3000,()=>{
    console.log("app listning at")
})
