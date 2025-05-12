// /home/ubuntu/e_learning_platform/frontend/src/components/common/Footer.js
import React from 'react';
import './Footer.css'; // Create this file for Footer specific styles

const Footer = () => {
  return (
    <footer className="app-footer">
      <p>&copy; {new Date().getFullYear()} E-Learning Platform. All rights reserved.</p>
      {/* Add other links like Privacy Policy, Terms of Service if needed */}
    </footer>
  );
};

export default Footer;

