import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Conservation from './pages/sangam'; // Sangam page
import WaterQuality from './pages/WaterQuality';
import Contact from './pages/Contact';
import ClimateImpact from './pages/ClimateImpact';
import Explore from './pages/Explore';


import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/about" element={<About />} />
          <Route path="/sangam" element={<Conservation />} />
          <Route path="/water-quality" element={<WaterQuality />} />
          <Route path="/climate-impact" element={<ClimateImpact />} />
          <Route path="/contact" element={<Contact />} />
          
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
