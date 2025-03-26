const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config(); // Load environment variables

// Create an Express app
const app = express();
app.use(cors());
app.use(bodyParser.json());

// MongoDB connection (simplified)
const mongoURI = process.env.MONGODB_URI || 'mongodb+srv://dharmeshkumarkhairnarcomp22:mongo123@cluster1.vlyeu.mongodb.net/';

// Connect to MongoDB
const connectWithRetry = () => {
  mongoose.connect(mongoURI, {
    connectTimeoutMS: 20000, // 20 seconds
  })
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => {
    console.error('Error connecting to MongoDB:', err);
    setTimeout(connectWithRetry, 5000); // Retry connection after 5 seconds
  });
};

connectWithRetry(); // Initial call to connect

// Schema for origin and mouth locations
const LocationSchema = new mongoose.Schema({
  name: { type: String, required: true },
  location: {
    description: { type: String, required: true },
    latitude: { type: Number, required: true },
    longitude: { type: Number, required: true }
  }
});

// Schema for major cities along the river
const MajorCitySchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true }
});

// Schema for tributaries (left and right)
const TributarySchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true }
});

// Main River schema
const RiverSchema = new mongoose.Schema({
  river_name: { type: String, required: true },
  description: { type: String, required: true },
  length_km: { type: Number, required: true },
  origin: { type: LocationSchema, required: true },
  mouth: { type: LocationSchema, required: true },
  major_cities: [MajorCitySchema],
  tributaries: {
    description: { type: String },
    left: [TributarySchema],
    right: [TributarySchema]
  },
  basin_area_sq_km: { type: Number, required: true },
  population_dependent_millions: { type: Number, required: true },
  religious_significance: {
    hinduism: { type: String }
  },
  pollution_status: {
    description: { type: String },
    main_pollutants: [String],
    key_polluted_stretches: [{
      location: { type: String },
      pollutant_level: { type: String },
      description: { type: String }
    }],
    current_cleaning_efforts: {
      description: { type: String }
    }
  },
  hydrology: {
    average_discharge_cms: { type: Number },
    monsoon_flow_increase_percentage: { type: Number },
    description: { type: String }
  },
  cultural_importance: {
    description: { type: String }
  },
  economic_use: {
    description: { type: String },
    irrigation: { type: String },
    fishing: { type: String },
    transportation: { type: String }
  },
  ecological_significance: {
    description: { type: String },
    endangered_species: [String],
    biodiversity_hotspot: { type: Boolean }
  }
});

// Creating the model
const River = mongoose.model('River', RiverSchema);

// Define the route for searching rivers
app.get('/api/rivers', async (req, res) => {
  try {
    const searchTerm = req.query.search;
    // Find rivers that match the search term (case insensitive)
    const rivers = await River.find({
      river_name: { $regex: searchTerm, $options: 'i' },
    });
    res.json(rivers);
  } catch (err) {
    console.error('Error fetching rivers:', err);
    res.status(500).json({ message: 'Server error' });
  }
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
