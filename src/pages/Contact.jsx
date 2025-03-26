import React from 'react';
import './contact.css';
import logo from './logo.png'; 
const Contact = () => {
  return (
    <div className='mycontact'>
      <img src={logo} alt="Logo" className="logo" />
      <div className="contact">
        <h2>Contact Us</h2>
        <form>
          <div className="input-group">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" required />
          </div>
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className="input-group">
            <label htmlFor="phone">Phone Number</label>
            <input type="tel" id="phone" name="phone" required />
          </div>
          <div className="input-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" rows="5" required></textarea>
          </div>
          <div className="consent-group">
            <input type="checkbox" id="consent" name="consent" required />
            <label htmlFor="consent">
              I consent to the processing of my personal data 
              <a href="/privacy-policy" target="_blank"> (Privacy Policy)</a>
            </label>
          </div>
          <button type="submit" className="submit-btn">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
