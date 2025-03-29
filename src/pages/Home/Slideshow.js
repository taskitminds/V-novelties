import React, { useState, useEffect } from "react";
import "./Slideshow.css";

const slides = [
  {
    title: "EMINENCE IN CROP CARE",
    subtitle: "Environment Friendly, Naturally Derived Agri Care Solution",
    description:
      "Preserving nature's legacy and elegance. Our result-driven products assure the wellness of soil and crops, leading to a green revolution.",
    image:
      "https://i.pinimg.com/736x/5c/d5/94/5cd5948ebee07a0ee813f56843405089.jpg",
  },
  {
    title: "BRILLIANCE IN ANIMAL CARE",
    subtitle: "Custom-Made Premix With Nutrition And Herbal Healthcare",
    description:
      "Skillfully formulated premix rich in vitamins, minerals, and essential nutrients for cattle and poultry.",
    image:
      "https://imgs.search.brave.com/OiKGikw9FEMrKyGyNtsrnCTXAvSqrXv_wBcpIc-a610/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvOTA1/MDUyNTkwL3Bob3Rv/L2NoaWNrZW4tYW5k/LWNvdy5qcGc_cz02/MTJ4NjEyJnc9MCZr/PTIwJmM9M28waTRn/NF9fOHBuSW1QUzRB/M3BtWW5XNTUwUV9B/U2hLZzY1MXVSTHNR/ND0",
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
