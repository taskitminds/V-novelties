import React, { useState, useEffect } from "react";
import "./HomePage.css"; // Import the main CSS for HomePage
import h1 from "../../assets/images/home/h1.webp";
import h2 from "../../assets/images/home/h2.webp";
import h3 from "../../assets/images/home/h3.webp";

const carouselImages = [h1, h2, h3];

const HomePage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-slide effect every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselImages.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? carouselImages.length - 1 : prevIndex - 1
    );
  };

  return (
    <div>
      {/* Flexbox Carousel Section */}
      <section className="carousel">
        <button className="carousel-btn left" onClick={prevSlide}>&#10094;</button>
        <div className="carousel-slider">
          {carouselImages.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Slide ${index + 1}`}
              className={`carousel-slide ${index === currentIndex ? "active" : ""}`}
            />
          ))}

        </div>
        <button className="carousel-btn right" onClick={nextSlide}>&#10095;</button>
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
            <img src="https://source.unsplash.com/300x200/?herbs,medicine" alt="Product 1" className="product-img" />
            <h4 className="product-title">Herbal Extracts</h4>
            <p className="product-description">Pure and natural extracts for various applications.</p>
          </div>
          <div className="product-card">
            <img src="https://source.unsplash.com/300x200/?plants,nature" alt="Product 2" className="product-img" />
            <h4 className="product-title">Essential Oils</h4>
            <p className="product-description">Premium oils derived from nature’s best sources.</p>
          </div>
          <div className="product-card">
            <img src="https://source.unsplash.com/300x200/?leaves,organic" alt="Product 3" className="product-img" />
            <h4 className="product-title">Organic Powders</h4>
            <p className="product-description">Finely processed organic powders for multiple uses.</p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact">
        <h3 className="getintouch">Get in Touch</h3>
        <p className="contact-description">Contact us for more details about our products and services.</p>
        <div className="contact-info">
          <a href="#" className="contact-link">+91 9876543210</a>
          <a href="#" className="contact-link">info@herbal-creations.com</a>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
