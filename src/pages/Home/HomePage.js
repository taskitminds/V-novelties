import React, { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import "./HomePage.css"; // Import the main CSS for HomePage
import Header from "../../components/Header/Header";
import Navbar from "../../components/Navbar/Navbar";
import h1 from "../../assets/images/home/h1.webp";
import h2 from "../../assets/images/home/h2.webp";
import h3 from "../../assets/images/home/h3.webp";

const carouselImages = [
  { image: h1, title: "Natural Herbal Solutions", text: "Pure and organic extracts for health & wellness.", position: "left" },
  { image: h2, title: "Essential Oils & Powders", text: "Premium quality essential oils for all industries.", position: "right" },
  { image: h3, title: "Sustainable Herbal Products", text: "Eco-friendly and sustainable herbal solutions.", position: "left" },
];

const HomePage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (!isHovered) {
      const interval = setInterval(() => {
        nextSlide();
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [currentIndex, isHovered]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselImages.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? carouselImages.length - 1 : prevIndex - 1
    );
  };

  {/*who we are content*/ }
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.5 });
  const [typedText, setTypedText] = useState("");
  const fullText =
    "Who We Are";

  useEffect(() => {
    if (inView) {
      let index = 0;
      const interval = setInterval(() => {
        setTypedText(fullText.substring(0, index));
        index++;
        if (index > fullText.length) clearInterval(interval);
      }, 50); // Adjust speed of typing
    }
  }, [inView]);

  return (
    <div className="homepage">
      {/* Transparent Header and Navbar */}
      <Header />
      <Navbar />
      <section className="carousel">
        <button className="carousel-btn left" onClick={prevSlide}>&#10094;</button>
        <div className="carousel-slider">
          {carouselImages.map((slide, index) => (
            <div
              key={index}
              className={`carousel-slide ${index === currentIndex ? "active" : ""}`}
              style={{ backgroundImage: `url(${slide.image})`, display: index === currentIndex ? "flex" : "none" }}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <div className={`carousel-content ${slide.position}`}>
                <h1>{slide.title}</h1>
                <p>{slide.text}</p>
                <button className="carousel-btn-main" onClick={() => window.location.href = '#'}>Know More</button>
              </div>
            </div>
          ))}
        </div>
        <button className="carousel-btn right" onClick={nextSlide}>&#10095;</button>
      </section>

      {/* Who we are section */}
      <section className="about" ref={ref}>
        <h3 className="section-title typing-animation">{typedText}</h3>
        <p className="about-description">
          We focus the therapeutic and/or health giving importance of medicinal plants which is renowned as valuable folkloric medicine in southern parts of India which are selectively cornered, fractionated and evaluated for their potential against particular disorders and validate the possible mechanism behind the action as well
        </p>
      </section>
      <hr />
      {/* Vision and Mission Section */}
      <section className="book-container">
        <div className="book-page left-page">
          <h3 className="section-title">Our Vision</h3>
          <p className="about-description">
            Apparently the intent of mission, to isolate the bio-active natural products from plants and microorganisms which are applied to investigate diverse range of applications being experienced as an exemplary agent in major industrial needs.
          </p>
        </div>
        <div className="book-page right-page">
          <h3 className="section-title">Our Mission</h3>
          <p className="about-description">
            Precisely, extract and isolate the phytochemicals from plants with all its naturalness and preserve the therapeutic and/or health-giving properties entirely in order to cherish our customers naturally.
          <br />
          <br />
          </p>
        </div>
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
          <div className="product-card">
            <img src="https://source.unsplash.com/300x200/?leaves,organic" alt="Product 4" className="product-img" />
            <h4 className="product-title">Organic Product</h4>
            <p className="product-description">Finely processed organic powders for multiple uses.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
