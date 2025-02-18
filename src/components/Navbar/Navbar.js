import React, { useEffect, useState } from "react";
import { FaLeaf } from "react-icons/fa";
import "./Navbar.css";

const Navbar = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true); // Trigger animation when the component mounts
  }, []);

  return (
    <nav className="navbar">
      <h1 className={`logo ${animate ? "slide-in-left" : ""}`}>
        <FaLeaf className="icon-nav" /> V Novelties
      </h1>
      <div className="nav-links">
        <a href="#" className={`nav-link ${animate ? "slide-in-right" : ""}`}>Home</a>
        <a href="#" className={`nav-link ${animate ? "slide-in-right" : ""}`}>Application</a>
        <a href="#" className={`nav-link ${animate ? "slide-in-right" : ""}`}>About</a>
        <a href="#" className={`nav-link ${animate ? "slide-in-right" : ""}`}>Products</a>
        <a href="#" className={`nav-link ${animate ? "slide-in-right" : ""}`}>Contact</a>
      </div>
    </nav>
  );
};

export default Navbar;
