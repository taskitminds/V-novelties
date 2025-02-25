import React, { useEffect, useState } from "react";
import { FaLeaf } from "react-icons/fa";
import "./Navbar.css";

const Navbar = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true); // Trigger animation when the component mounts
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
        <a href="#" className={`nav-link ${animate ? "slide-in-right" : ""}`}>Home</a>
        <a href="#" className={`nav-link ${animate ? "slide-in-right" : ""}`}>Products</a>
        <a href="#" className={`nav-link ${animate ? "slide-in-right" : ""}`}>Application</a>
        <a href="#" className={`nav-link ${animate ? "slide-in-right" : ""}`}>R&D</a>
        <a href="#" className={`nav-link ${animate ? "slide-in-right" : ""}`}>Contact</a>
      </div>
    </nav>
  );
};

export default Navbar;