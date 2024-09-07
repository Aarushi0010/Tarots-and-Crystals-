import React from 'react';
import './ContactUs.css'; // Import the CSS for styling

const Contact = () => {
  return (
    <div className="contact-page">
      {/* Top Half: Image */}
      <div className="top-half">
        <img
          src="https://iifls.com/wp-content/uploads/2023/02/Contact-Us.jpg"
          alt="Contact Us"
          className="contact-image"
        />
      </div>

      {/* Bottom Half: Contact Form */}
      <div className="bottom-half">
        <form className="contact-form">
          <h2>Contact Us</h2>
          
          <label htmlFor="name">Full Name:</label>
          <input type="text" id="name" name="name" required />

          <label htmlFor="contact">Contact Number:</label>
          <input type="tel" id="contact" name="contact" required />

          <label htmlFor="email">Email ID:</label>
          <input type="email" id="email" name="email" required />

          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" rows="4" required></textarea>

          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
