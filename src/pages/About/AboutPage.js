import React from 'react';
import './AboutPage.css';
import CoreValues from './CoreValues';
import whoImg from '../../assets/images/about/WhoWeareImage.jpg';
import missionImg from '../../assets/images/about/MissionImage.webp';
import visionImg from '../../assets/images/about/VisionImages.webp';

const AboutUs = () => {
  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-overlay">
          <div className="hero-content">
            <h1>About Us</h1>
          </div>
        </div>
      </section>

      
      {/* Intro Section - News Ticker Style */}
      <section className="intro-block news-ticker">
        <div className="ticker-container">
          <div className="ticker-content">
            At the heart of what we do is a commitment to preserving the potency of herbal products. We believe in nurturing health and wellness through eco-friendly practices that honor the natural world.
          </div>
        </div>
      </section>


      {/* WHO WE ARE */}
      <section className="about-section">
        <div className="about-content reverse">
          <div className="about-image">
            <img src={whoImg} alt="Who We Are" />
          </div>
          <div className="about-text">
            <h2>Who We Are</h2>
            <p>
              We focus on the therapeutic importance of medicinal plants renowned in southern India. These are selected, fractionated, and evaluated for their potential to treat specific disorders and uncover mechanisms behind their efficacy.
            </p>
          </div>
        </div>
      </section>

      {/* OUR VISION */}
      <section className="about-section">
        <div className="about-content">
          <div className="about-image">
            <img src={visionImg} alt="Our Vision" />
          </div>
          <div className="about-text">
            <h2>Our Vision</h2>
            <p>
              To isolate bio-active natural products from plants and microorganisms, pioneering diverse applications across key industries.
            </p>
          </div>
        </div>
      </section>

      {/* OUR MISSION */}
      <section className="about-section">
        <div className="about-content reverse">
          <div className="about-image">
            <img src={missionImg} alt="Our Mission" />
          </div>
          <div className="about-text">
            <h2>Our Mission</h2>
            <p>
              To extract phytochemicals in their purest form while maintaining their natural therapeutic properties for the benefit of our customers.
            </p>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <CoreValues />
    </div>
  );
};

export default AboutUs;