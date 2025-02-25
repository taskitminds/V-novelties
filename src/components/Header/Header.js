import React from "react";
import { FaPhoneAlt, /*FaEnvelope*/  FaFacebook, FaInstagram, FaLinkedin, FaMailBulk } from "react-icons/fa";
import './Header.css'; // Import the CSS file for styling
// import { BiFontSize } from "react-icons/bi";

const Header = () => {
  return (
    <div className="top-banner">
      <div className="contact-info">
        <span><FaMailBulk className="icon-header" />info@herbal-creations.com  </span>
        <span>|</span>
        <span><FaPhoneAlt className="icon-header" />+91 9876543210</span>
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
