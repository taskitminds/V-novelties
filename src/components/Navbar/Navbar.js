// src/components/Navbar.js
import React from "react";
import { FaLeaf } from "react-icons/fa";
import './Navbar.css'; // You can add custom styles if needed

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1 className="logo">
        <FaLeaf className="icon" /> Herbal Creations
      </h1>
      <div className="nav-links">
        <a href="#" className="nav-link">Home</a>
        <a href="#" className="nav-link">About</a>
        <a href="#" className="nav-link">Application</a>
        <a href="#" className="nav-link">Products</a>
        <a href="#" className="nav-link">Contact</a>
      </div>
    </nav>
  );
};

export default Navbar;

