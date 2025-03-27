import React from "react";
import { FaPhoneAlt, /*FaEnvelope*/  FaFacebook, FaInstagram, FaLinkedin, FaMailBulk } from "react-icons/fa";
import './Header.css'; // Import the CSS file for styling
// import { BiFontSize } from "react-icons/bi";

const Header = () => {
  return (
    <div className="top-banner">
      <div className="contact-info">
        <a href="mailto:vnoveltiesmdu@gmail.com" className="contact-link">
          <FaMailBulk className="icon-header" /> vnoveltiesmdu@gmail.com
        </a>
        <span>|</span>
        <a href="tel:+918248280830" className="contact-link">
          <FaPhoneAlt className="icon-header" /> +91-82482 80830
        </a>
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
