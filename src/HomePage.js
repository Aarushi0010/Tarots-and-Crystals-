import React from 'react';

import './HomePage.css';

const HomePage = () => {
  return (
    <div className="homepage">
       {/* Add the Navbar component */}
      
      {/* Hero Banner Section */}
      <div className="hero-banner">
        <div className="hero-content">
          <h1>Welcome to Mystical Tarot & Crystal Shop</h1>
          <p>Discover the magic within you.</p>

          {/* Add the options as boxes aligned horizontally */}
          <div className="options">
            <div className="option-box">
              <a href="/about">About Us</a>
            </div>
            <div className="option-box">
              <a href="/services">Services</a>
            </div>
            <div className="option-box">
              <a href="/shopping-page">Shop</a>
            </div>
            <div className="option-box">
              <a href="/contact">Contact</a>
            </div>
          </div>
        </div>
      </div>

    </div>
    );
};

export default HomePage;

