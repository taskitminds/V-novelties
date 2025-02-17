// src/HomePage.js
import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import './HomePage.css'; // Import the main CSS for HomePage

const HomePage = () => {
  return (
    <div>
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h2 className="hero-title">Premium Herbal Extracts</h2>
          <p className="hero-description">Delivering nature’s best for your health and wellness.</p>
          <button className="hero-btn">Explore Products</button>
        </div>
      </section>

      {/* About Section */}
      <section className="about">
        <h3 className="section-title">About Us</h3>
        <p className="about-description">
          Herbal Creations is a trusted manufacturer of herbal extracts, catering to the pharmaceutical and nutraceutical industries worldwide.
        </p>
      </section>

      {/* Products Section */}
      <section className="products">
        <h3 className="section-title">Our Products</h3>
        <div className="product-cards">
          <div className="product-card">
            <img src="https://source.unsplash.com/300x200/?herbs,medicine" alt="Product 1" className="product-img"/>
            <h4 className="product-title">Herbal Extracts</h4>
            <p className="product-description">Pure and natural extracts for various applications.</p>
          </div>
          <div className="product-card">
            <img src="https://source.unsplash.com/300x200/?plants,nature" alt="Product 2" className="product-img"/>
            <h4 className="product-title">Essential Oils</h4>
            <p className="product-description">Premium oils derived from nature’s best sources.</p>
          </div>
          <div className="product-card">
            <img src="https://source.unsplash.com/300x200/?leaves,organic" alt="Product 3" className="product-img"/>
            <h4 className="product-title">Organic Powders</h4>
            <p className="product-description">Finely processed organic powders for multiple uses.</p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact">
        <h3 className="section-title">Get in Touch</h3>
        <p className="contact-description">Contact us for more details about our products and services.</p>
        <div className="contact-info">
          <a href="#" className="contact-link">+91 9876543210</a>
          <a href="#" className="contact-link">info@herbal-creations.com</a>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default HomePage;
