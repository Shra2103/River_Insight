import React from 'react';
import './About.css';
import book from './book.png';
import document from './documents.png';
import website from './website.png';
import video from './video.png';

const About = () => {
  return (
    <div className="educational-container">
      <div className="resources-wrapper">
        <h1>Educational Resources</h1>
        <div className="resources-grid">
          <div className="resource-item">
            <a href="/book.html">
              <img src={book} alt="Books" />
              <label>Books</label>
            </a>
          </div>
          <div className="resource-item">
            <a href="/documents.html">
              <img src={document} alt="Documents" />
              <label>Documents</label>
            </a>
          </div>
          <div className="resource-item">
            <a href="/websites.html">
              <img src={website} alt="Websites" />
              <label>Websites</label>
            </a>
          </div>
          <div className="resource-item">
            <a href="/videos.html">
              <img src={video} alt="Videos" />
              <label>Videos</label>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;