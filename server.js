const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const ticketRoutes = require('./routes/ticketroute');
const rideRoutes = require('./routes/rideroute');
const productRoutes = require('./routes/productroute');
const userRoutes = require('./routes/userroute');

const app = express();
const PORT = process.env.PORT || 5000;

// CORS Configuration
const corsOptions = {
  origin: [
    'http://localhost:3000', 
    'http://localhost:5173', 
    'http://127.0.0.1:3000', 
    'http://127.0.0.1:5173',
    'https://fro-ntend1.vercel.app',
    'https://frontend1.vercel.app',
    'https://frontend-nine-xi-69.vercel.app'
  ],
  credentials: true,
  optionsSuccessStatus: 200,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With']
};

// Middleware
app.use(cors(corsOptions));
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true }));

// Database connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log('MongoDB connection error:', err.message));

// Root route ✅
app.get('/', (req, res) => {
  res.send('Amusement Park Ticket Booking Backend is Live 🚀');
});

// API Routes
app.use('/api/tickets', ticketRoutes);
app.use('/api/rides', rideRoutes);
app.use('/api/products', productRoutes);
app.use('/api/users', userRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
