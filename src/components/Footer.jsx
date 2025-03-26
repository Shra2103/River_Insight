import React from 'react';
import './footer.css';

const Footer = () => {
  return (
    <div className='footer-container'>
      <div className="footer-content"> {/* New container for footer sections */}
        <div className="footer-section">
          <h4>Home</h4>
          <ul>
            <li>About</li>
            <li>Current Condition</li>
            <li>Conservation Efforts</li>
            <li>Water Quality</li>
          </ul>
        </div>
        <div className="footer-section"> {/* Section for contacts */}
          <h4>Contact</h4>
          <ul>
            <li>Phone: 123-456-7890</li>
            <li>Email: info@riverinsights.com</li>
          </ul>
        </div>
        <div className="footer-section"> {/* Section for social media */}
          <h4>Follow Us</h4>
          <ul>
            <li>Facebook</li>
            <li>Twitter</li>
            <li>Instagram</li>
            <li>YouTube</li>
          </ul>
        </div>
      </div>
      <footer>
        <p>RiverInsights © 2024 riverinsights.com</p>
      </footer>
    </div>
  );
};

export default Footer;
