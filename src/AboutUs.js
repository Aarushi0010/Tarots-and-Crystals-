import React from 'react';
import './AboutUs.css'; // Import the CSS for styling

const AboutUs = () => {
  return (
    <div className="about-us-page">
      <div className="content-boxes">
        {/* Left Box: Image and Information about the Tarot Reader */}
        <div className="left-box">
          <img 
            src="https://images.unsplash.com/photo-1632587457207-47f76269f5c5?q=80&w=2075&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
            alt="Tarot Reader"
            className="reader-image"
          />
          <div className="reader-info">
            <h2>Mystic Mayra</h2>
            <p>
              Meet Mystic Mayra, an experienced tarot reader with over 10 years 
              of experience. Known for providing insightful and personalized readings, 
              they have helped many find clarity and peace through their services.
            </p>
          </div>
        </div>

        {/* Right Box: Testimonials */}
        <div className="right-box">
          <h2>Testimonials</h2>
          <div className="testimonial">
            <p>"Mystic Mayra gave me the guidance I needed at a crucial time in my life."</p>
            <p>- Client 1</p>
          </div>
          <div className="testimonial">
            <p>"The reading was so accurate and helped me see things from a new perspective."</p>
            <p>- Client 2</p>
          </div>
          <div className="testimonial">
            <p>"I felt so connected during the session, and the advice was life-changing!"</p>
            <p>- Client 3</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
