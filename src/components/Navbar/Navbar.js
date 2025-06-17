import React, { useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom"; // ✅ Keep import at top
import "./Navbar.css";
import logo from "../../assets/images/home/logo.webp";

const Navbar = () => {
  const [animate, setAnimate] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false); // ✅ Moved inside component
  const navigate = useNavigate(); // ✅ Moved inside component

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
        <Link to="/">
          <div className="logo-container">
            <img src={logo} className="icon-nav" alt="V Novelties Logo" />
            <div className="logo-text">
              V novelties
              <p className="tagline">Naturally in every drop</p>
            </div>
          </div>
        </Link>
      </h1>

      {/* Menu Icon */}
      <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
      </div>

      {/* Navigation Links */}
      <div className={`nav-links ${menuOpen ? "show" : ""}`}>
        <Link to="/" className="nav-link" onClick={() => setMenuOpen(false)}>Home</Link>
        <Link to="/about" className="nav-link" onClick={() => setMenuOpen(false)}>About us</Link>

        {/* Dropdown Products */}
        <div
          className="nav-link dropdown"
          onMouseEnter={() => setShowDropdown(true)}
          onMouseLeave={() => setShowDropdown(false)}
        >
          <span>Products ▾</span>
          {showDropdown && (
            <div className="dropdown-menu">
              <span onClick={() => {
                navigate('/products', { state: { category: 'Animal Care' } });
                setMenuOpen(false); setShowDropdown(false);
              }}>Animal Care</span>
              <span onClick={() => {
                navigate('/products', { state: { category: 'Agri Care' } });
                setMenuOpen(false); setShowDropdown(false);
              }}>Agri Care</span>
              <span onClick={() => {
                navigate('/products', { state: { category: 'Essential Oils' } });
                setMenuOpen(false); setShowDropdown(false);
              }}>Herbal Care</span>
              <span onClick={() => {
                navigate('/products', { state: { category: 'Personal Care' } });
                setMenuOpen(false); setShowDropdown(false);
              }}>Personal Care</span>
            </div>
          )}
        </div>

        <Link to="/application" className="nav-link" onClick={() => setMenuOpen(false)}>Application</Link>
        <Link to="/research" className="nav-link" onClick={() => setMenuOpen(false)}>R&D</Link>
        <Link to="/contact" className="nav-link" onClick={() => setMenuOpen(false)}>Contact</Link>
      </div>
    </nav>
  );
};

export default Navbar;
