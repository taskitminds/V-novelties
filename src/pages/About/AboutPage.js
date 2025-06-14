import React from 'react';
import './AboutPage.css';
import CoreValues from './CoreValues';
import whoImg from '../../assets/images/about/WhoWeareImage.webp';
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
              We focus the therapeutic and health giving importance of medicinal plants which is renowned as valuable folkloric medicine in southern parts of India which are selectively cornered, fractionated and evaluated for their potential against particular disorders and validate the possible mechanism behind the action as well.
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
              Apparently the intent of mission, to isolate the bio-active natural products from plants and microorganisms which are applied to investigate diverse range of applications being experienced as an exemplary agent in major industrial needs.
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
              Precisely, extract and isolate the phytochemicals from plants with all its naturalness and preserve the therepeutic and/or health giving properties entirely in order to cherish our customers naturally.
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