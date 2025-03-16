import React from 'react';
import Header from '../../components/Header/Header'; // Ensure the Header component exists
import './AboutPage.css';
import Navbar from '../../components/Navbar/Navbar'; // Ensure the Navbar component exists
import   "../../assets/images/about/asdf.png";
import   "../../assets/images/about/cimg.png";


const AboutUs = () => {
  return (
    <div className="about-us">
      <Header />
      <Navbar />
        <h1 className='a'><h1 className='typing'>About  Us</h1></h1>
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
    <h2>Mission</h2>
    <p>
    Precisely, extract and isolate the phytochemicals from plants with all its naturalness and preserve the therepeutic and/or health giving properties entirely in order to cherish our customers naturally.
    </p>
  </section>
  </div>
</div>
  );
};

export default AboutUs;
