import React from 'react';
import './AboutPage.css';
import CoreValues from './CoreValues';
import "../../assets/images/about/asdf.png";
import "../../assets/images/about/cimg.png";



const AboutUs = () => {
  return (
    <div className="about-us">
      <div className="a relative text-center py-6 overflow-hidden">
        <h2 className="valueheading">About Us</h2>

        {/* Decorative Falling Leaves */}
        <div className="absolute inset-0 pointer-events-none">
          {Array.from({ length: 10 }).map((_, index) => (
            <span
              key={index}
              className="absolute text-green-500 text-xl opacity-70 animate-fall"
              style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 4}s`,
                fontSize: `${Math.random() * 1.5 + 1}rem`,
              }}
            >
              🍃
              🍂
            </span>
          ))}
        </div>

        {/* Underline Effect */}
        <div className="absolute left-1/2 transform -translate-x-1/2 w-24 h-1 bg-yellow-300 mt-2 rounded-full animate-pulse"></div>
      </div>


      <section className="who-we-are">
        <div className="container noselect">
          <div className="canvas">
            {Array.from({ length: 25 }, (_, index) => (
              <div key={index} className={`tracker tr-${index + 1}`} />))}
            <div className="card">
              <h2 className="ab">Who We Are</h2>
              <p className="aab">
                We focus the therapeutic and/or health giving importance of medicinal plants which is renowned as valuable
                folkloric medicine in southern parts of India which are selectively cornered, fractionated and evaluated for
                their potential against particular disorders and validate the possible mechanism behind the action as well.
              </p>
            </div>
          </div>
        </div>
      </section>


      <div className="sections-container">
        <section className="our-mission">
          <h2 >Our Vision</h2>
          <p>
            Apparently the intent of mission, to isolate the bio-active natural products from plants and microorganisms which are applied to investigate diverse range of applications being experienced as an exemplary agent in major industrial needs.
          </p>
        </section>

        <section className="mission">
          <h2>Our Mission</h2>
          <p>
            Precisely, extract and isolate the phytochemicals from plants with all its naturalness and preserve the therepeutic and/or health giving properties entirely in order to cherish our customers naturally.
          </p>
        </section>
      </div>
      <CoreValues/>
    </div>
    
  );
};

export default AboutUs;
