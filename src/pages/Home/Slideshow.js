import React, { useState, useEffect } from "react";
import "./Slideshow.css";

const slides = [
  {
    title: "EMINENCE IN CROP CARE",
    subtitle: "Environment Friendly, Naturally Derived Agri Care Solution",
    description:
      "Preserving nature's legacy and elegance. Our result-driven products assure the wellness of soil and crops, leading to a green revolution.",
    image:
      "https://media.istockphoto.com/id/1161321111/photo/farmer-hands-take-care-and-protect-young-little-sprout-plant-in-the-soil-ground.jpg?s=2048x2048&w=is&k=20&c=4XLjHz6peAd-Mww9InvKLx5o6DTzq03cT27HRvWvh2A=",
  },
  {
    title: "BRILLIANCE IN ANIMAL CARE",
    subtitle: "Custom-Made Premix With Nutrition And Herbal Healthcare",
    description:
      "Skillfully formulated premix rich in vitamins, minerals, and essential nutrients for cattle and poultry.",
    image:
      "https://www.hillspet.hk/content/dam/cp-sites/hills/hills-pet/global/general/thumbnails/HP_about_animalwelfare_section1_md.jpg",
  },
  {
    title: "EXCELLENCE IN HERBAL SOLUTIONS",
    subtitle: "Finesse With Our Essential Oil, Extracts, And Hydrosol",
    description:
      "Expertly crafted herbal formulas enriched with bioactives. Standardized extracts and unique formulations transform several industries.",
    image:
      "https://8151088.fs1.hubspotusercontent-na1.net/hubfs/8151088/Natural%20Beauty_%20A%20Look%20at%20Ancient%20Herbal%20Skincare%20Remedies.png",
  },
];

const Slideshow = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [isPaused]);

  return (
    <div
      className="slideshow-container"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`slide ${index === currentIndex ? "active" : ""}`}
        >
          <div className="slide-content">
            <div className="slide-text">
              <h2>{slide.title}</h2>
              <h4>{slide.subtitle}</h4>
              <p>{slide.description}</p>
            </div>
            <img src={slide.image} alt={slide.title} className="slide-image" />
          </div>
        </div>
      ))}
      <div className="dots">
        {slides.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === currentIndex ? "active" : ""}`}
            onClick={() => setCurrentIndex(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Slideshow;
