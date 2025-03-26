import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';
import river from './river.jpg';

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul>
        <li><img src={river} alt="River Insight" /></li>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/explore">Explore</Link></li>
        <li><Link to="/About">Educational Resources</Link></li>
        <li><Link to="/water-quality">Water Quality</Link></li>
        <li><Link to="/climate-impact">Climate Impact</Link></li>
        <li><Link to="/sangam">Sangam</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
