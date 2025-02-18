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

  // Debugging check
  console.log("Loaded Images:", carouselImages);

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

  {/*who we are content*/}
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
            >
            <div className={`carousel-content ${slide.position}`}>
              <h1>{slide.title}</h1>
              <p>{slide.text}</p>
              <button className="carousel-btn-main">Learn More</button>
            </div>
          </div>
        ))}
      </div>
      <button className="carousel-btn right" onClick={nextSlide}>&#10095;</button>
    </section>

      {/* About Section */}
      <section className="about" ref={ref}>
        <h3 className="section-title typing-animation">{typedText}</h3>
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
