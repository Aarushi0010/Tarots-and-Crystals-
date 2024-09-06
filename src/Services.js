import React from 'react';
import './services.css'; // Import the CSS for styling

const Services = () => {
  return (
    <div className="services-page">

      <h2 className="services-heading">Grab the services and let the magic begin</h2>

      <div className="services-container">
        {/* Love Reading Box */}
        <div className="service-box">
          <img 
            src="https://images.unsplash.com/photo-1533546147977-3f9e1d22b1c1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDh8fHRhcm90JTIwY2FyZHxlbnwwfHwwfHx8MA%3D%3D" 
            alt="Love Reading"
            className="service-image"
          />
          <h3>Love Reading</h3>
          <p>
            Explore your romantic future with our insightful love readings, offering guidance and clarity in matters of the heart.
          </p>
        </div>

        {/* Finance Prediction Box */}
        <div className="service-box">
          <img 
            src="https://images.unsplash.com/photo-1620049045606-593e4551ef4a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
            alt="Finance Prediction"
            className="service-image"
          />
          <h3>Finance Prediction</h3>
          <p>
          Our finance prediction readings provide deep insights into your financial future. Whether you’re looking to make a major investment, need advice on saving, our readings offer clarity and foresight.
          </p>
        </div>

        {/* Health Prediction Box */}
        <div className="service-box">
          <img 
            src="https://images.unsplash.com/photo-1559323516-be2f83ce450b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzV8fHRhcm90JTIwY2FyZHxlbnwwfHwwfHx8MA%3D%3D" 
            alt="Health Prediction"
            className="service-image"
          />
          <h3>Health Prediction</h3>
          <p>
            Our health predictions help you understand your physical well-being and what the future may hold in terms of health.
          </p>
        </div>

        {/* Career Prediction Box */}
        <div className="service-box">
          <img 
            src="https://images.unsplash.com/photo-1644007824843-37e9069834bd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODZ8fHRhcm90JTIwY2FyZHxlbnwwfHwwfHx8MA%3D%3D" 
            alt="Career Prediction"
            className="service-image"
          />
          <h3>Career Predictions</h3>
          <p>
            Get career advice and future predictions to guide your professional life towards success and fulfillment.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;
