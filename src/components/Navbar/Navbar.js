import React, { useEffect, useState } from "react";
import { FaLeaf, FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [animate, setAnimate] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    setAnimate(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.querySelector(".navbar");
      const carouselHeight = document.querySelector(".carousel")?.offsetHeight || 200;

      if (window.scrollY > carouselHeight - 60) {
        navbar.classList.add("navbar-solid");
      } else {
        navbar.classList.remove("navbar-solid");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="navbar">
      <h1 className={`logo ${animate ? "slide-in-left" : ""}`}>
        <FaLeaf className="icon-nav" /> V Novelties
      </h1>

      {/* Menu Icon for Mobile */}
      <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
      </div>

      {/* Navigation Links */}
      <div className={`nav-links ${menuOpen ? "show" : ""}`}>
        <Link to="/" className="nav-link" onClick={() => setMenuOpen(false)}>Home</Link>
        <Link to="/about" className="nav-link" onClick={() => setMenuOpen(false)}>About us</Link>
        <Link to="/products" className="nav-link" onClick={() => setMenuOpen(false)}>Products</Link>
        <Link to="/application" className="nav-link" onClick={() => setMenuOpen(false)}>Application</Link>
        <Link to="/research" className="nav-link" onClick={() => setMenuOpen(false)}>R&D</Link>
        <Link to="/contact" className="nav-link" onClick={() => setMenuOpen(false)}>Contact</Link>
      </div>
    </nav>
  );
};

export default Navbar;