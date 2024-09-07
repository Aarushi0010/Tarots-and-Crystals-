import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './HomePage';
import AboutUs from './AboutUs';
import Services from './Services';
import ContactUs from './ContactUs';
import ShoppingPage from './ShoppingPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/services" element={<Services />} />
        <Route path="/shopping-page" element={<ShoppingPage />} />
      </Routes>
    </Router>
  );
}
export default App;
