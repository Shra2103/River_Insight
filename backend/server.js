const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config(); // Load environment variables

const app = express();
const PORT = process.env.PORT || 5000

// Middleware
app.use(cors({
  origin: 'http://localhost:54354',
}));

app.use(express.json());

// MongoDB Connection
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/RiverInsight', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('✅ Connected to RiverInsight database');
  } catch (err) {
    console.error('❌ MongoDB connection error:', err);
    process.exit(1); // Exit process if connection fails
  }
};

connectDB();

// Define Schema & Model
const RiverSchema = new mongoose.Schema(
  {
    river_name: { type: String, required: true },
    description: { type: String, required: true },
    length_km: { type: Number, required: true },
  },
  { collection: 'rivers' } // Explicit collection name
);

const River = mongoose.model('rivers', RiverSchema);

// Search Endpoint
app.get('/api/rivers/search', async (req, res) => {
  try {
    const searchTerm = req.query.search;
    if (!searchTerm) return res.status(400).json({ message: "Search term is required" });

    const rivers = await River.find({ river_name: { $regex: searchTerm, $options: 'i' } });
    res.json(rivers);
  } catch (error) {
    console.error("Search error:", error);
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

// Start Server
app.listen(PORT, () => {
  console.log(`🌍 Server running on http://localhost:${PORT}`);
});
