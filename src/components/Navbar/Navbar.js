import React, { useEffect, useState } from "react";
import { FaLeaf } from "react-icons/fa";
import { Link } from "react-router-dom"; // Import Link from React Router
import "./Navbar.css";

const Navbar = () => {
  const [animate, setAnimate] = useState(false);

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
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className="navbar">
      <h1 className={`logo ${animate ? "slide-in-left" : ""}`}>
        <FaLeaf className="icon-nav" /> V Novelties
      </h1>
      <div className="nav-links">
        <Link to="/" className={`nav-link ${animate ? "slide-in-right" : ""}`}>Home</Link>
        <Link to="/about" className={`nav-link ${animate ? "slide-in-right" : ""}`}>About us</Link>
        <Link to="/products" className={`nav-link ${animate ? "slide-in-right" : ""}`}>Products</Link>
        <Link to="/application" className={`nav-link ${animate ? "slide-in-right" : ""}`}>Application</Link>
        <Link to="/research" className={`nav-link ${animate ? "slide-in-right" : ""}`}>R&D</Link>
        <Link to="/contact" className={`nav-link ${animate ? "slide-in-right" : ""}`}>Contact</Link>
      </div>
    </nav>
  );
};

export default Navbar;
