import React, { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import "./HomePage.css"; // Import the main CSS for HomePage
import h1 from "../../assets/images/home/h1.webp";
import h2 from "../../assets/images/home/h2.webp";
import h3 from "../../assets/images/home/h3.webp";
import Slideshow from "./Slideshow";
import Benchmark from "./BenchMark"


const carouselImages = [
  { image: h1, title: "Crop & Animal Care Products", text: "Crafted for sustainable farming, our products nurture your land and livestock while preserving nature's balance.", position: "left" },
  { image: h2, title: "Essential Oils & Powders", text: "Our Essential Oils and Powders are crafted from the finest natural sources, ensuring purity and potency.", position: "right" },
  { image: h3, title: "Natural Herbal Solutions", text: "Our Natural Herbal Solutions offer pure, plant-based remedies for wellness and care.", position: "left" },
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

  /*who we are content*/
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.10 });
  const [typedText, setTypedText] = useState("");
  const fullText =
    "V novelties";

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
          Since 2022, V novelties is dedicated to offer you the services as where your product search ends.  Our professionalism lies in manufacturing of products available in distinct customized specifications as per the requirements of clients / enduser.           V novelties is a competently governed firm committed in trading and manufacturing of Food Ingredients, Herbal extracts, Nutraceuticals, Agricultural& Pharmaceutical raw materials and final products
          <br/>
          We at V novelties preserve good business relationships with compliance to ethical business policies so as to maximize our patrons.
          Our enlightenments into the market have sustained us to perform the industry better.
        </p>
      </section>
      <hr />

      {/* Templates of slides section*/}
      <Slideshow/>
      {/*benchmark products*/}    
      <Benchmark />

    </div>
  );
};


export default HomePage; // Export HomePage component as default







/*<Product img="https://i.pinimg.com/236x/bf/58/96/bf5896dc6968b3f82e24de4b03791e8e.jpg" title='Tulasi' discr='This is tulasi'/> */

