import React from "react";
import { FaPhoneAlt, FaEnvelope, FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import './Header.css'; // Import the CSS file for styling

const Header = () => {
  return (
    <div className="top-banner">
      <div className="contact-info">
        <span><FaPhoneAlt className="icon" /> +91 9876543210</span>
        <span><FaEnvelope className="icon" /> info@herbal-creations.com</span>
      </div>
      <div className="social-icons">
        <a href="#" className="social-link"><FaFacebook /></a>
        <a href="#" className="social-link"><FaInstagram /></a>
        <a href="#" className="social-link"><FaLinkedin /></a>
      </div>
    </div>
  );
};

export default Header;
