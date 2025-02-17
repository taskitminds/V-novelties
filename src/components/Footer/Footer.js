 
// src/components/Footer.js
import React from "react";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import './Footer.css'; // Custom styles for footer if needed

const Footer = () => {
  return (
    <footer className="footer">
      <p>&copy; 2025 Herbal Creations. All Rights Reserved.</p>
      <div className="footer-socials">
        <a href="#" className="social-link"><FaFacebook /></a>
        <a href="#" className="social-link"><FaInstagram /></a>
      </div>
    </footer>
  );
};

export default Footer;
