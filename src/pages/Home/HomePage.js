import React, { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import "./HomePage.css"; // Import the main CSS for HomePage
import Header from "../../components/Header/Header";
import Navbar from "../../components/Navbar/Navbar";
import h1 from "../../assets/images/home/h1.webp";
import h2 from "../../assets/images/home/h2.webp";
import h3 from "../../assets/images/home/h3.webp";
import { motion, AnimatePresence } from "framer-motion";


const carouselImages = [
  { image: h1, title: "Natural Herbal Solutions", text: "Pure and organic extracts for health & wellness.", position: "left" },
  { image: h2, title: "Essential Oils & Powders", text: "Premium quality essential oils for all industries.", position: "right" },
  { image: h3, title: "Sustainable Herbal Products", text: "Eco-friendly and sustainable herbal solutions.", position: "left" },
];


const slides = [
  {
    title: "EMINENCE IN CROP CARE",
    subtitle: "Environment Friendly, Naturally Derived Agri Care Solution",
    description: "preserving natures legacy and elegance. Our result  driven products assures the wellness of soil and crop leads green revolution. water solluble formulation\nSeaweed based powder, liquid, gel, granules marine based seaweeds provides important natural plant growth hormones, amino acids, vitamins, proteins and minerals. Amino acids, Micronutrients	skillfully formulated micronutrients prevents crop growth deficiencies at different stages. Organic granules- nitrogen rich	conditioning the soil and maintain and balance the ph level",
    image: "https://media.istockphoto.com/id/1161321111/photo/farmer-hands-take-care-and-protect-young-little-sprout-plant-in-the-soil-ground.jpg?s=2048x2048&w=is&k=20&c=4XLjHz6peAd-Mww9InvKLx5o6DTzq03cT27HRvWvh2A=", // Replace with actual image paths
  },
  {
    title: "BRILLIANCE IN ANIMAL CARE",
    subtitle: "Custom-Made Premix With Nutrition And Herbal Healthcare",
    description: "skillfully formulated premix rich in vitamins, minerals and essential nutrients as in nurse of cattle and poultry.an accustomed formulation and high quality raw materials. premix-vitamin, minerals, aminoacids enables the essential intake to the different phases of breeding secure the health of the poultry. Direct farm technical support and diet management. Specialized dairy cattle vitamin and minerals premix has increase the cow performance and high milk yield and reduce the stress. Highly nutritious vita-minerals premix ensures bio security and herd health.",
       image: "https://www.hillspet.hk/content/dam/cp-sites/hills/hills-pet/global/general/thumbnails/HP_about_animalwelfare_section1_md.jpg",
  },
  {
    title: "EXCELLENCE IN HERBAL SOLUTIONS",
    subtitle: "Finesse With Our Essential Oil, Extracts, And Hydrosol",
    description: "expertly crafted herbal formulas/herbal bliss. phytoscience guided pure extracts rich in alkaloids, flavonoids, terpenoids and phenolic compounds assisted our customers create significant products. Standardised extracts, specifically isolated ingredients from herbal and medicinal plants virtuous flowers based hydrosol plays a vital role in fragrance and cosmetic industries. Unique formulations, enriched bioactives, tailor made products transforming several industries that inspire of Little drops-Big smiles-find the best with us",
    image: "https://8151088.fs1.hubspotusercontent-na1.net/hubfs/8151088/Natural%20Beauty_%20A%20Look%20at%20Ancient%20Herbal%20Skincare%20Remedies.png",
  },
  {
    title: "ADORABLE PERSONAL CARE",
    subtitle: "Nurturing Beauty, Naturally.",
    description: "Adorable Personal Care is all about embracing self-care with gentle, natural, and effective solutions. From skincare to haircare, we focus on pure ingredients that nourish and enhance your natural beauty. Prioritizing safety, sustainability, and wellness, our products are designed to bring out the best in you while being kind to the environment. Because taking care of yourself should always feel adorable and effortless.",
    image: "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://images.ctfassets.net/wp1lcwdav1p1/7m7xUScKkMe5JGLam5Fyyh/2860c4284df72f8292988b63a915c410/GettyImages-1293212244.jpg?w=1500&h=680&q=60&fit=fill&f=faces&fm=jpg&fl=progressive&auto=format%2Ccompress&dpr=1&w=1000",
  },
];

const HomePage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

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

      {/* Templates of slides section*/}
      <div className="slider-container">

  <div className="slider-card">
  <div className="slider-text">
    <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            className="w-1/2 pr-8"
          >
            
      <h3>{slides[currentSlide].subtitle}</h3>
      <h1>{slides[currentSlide].title}</h1>
      <p>{slides[currentSlide].description}</p>
      <button className="view-more-btn">View More</button>
    
          </motion.div>
        </AnimatePresence>
        </div>

        <div className="slider-image">
          <AnimatePresence mode="wait">
            <motion.img
              key={currentSlide}
              src={slides[currentSlide].image}
              alt={slides[currentSlide].title}
              className="w-3/4 object-contain"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.1 }}
              transition={{ duration: 0.5 }}
            />
          </AnimatePresence>
          </div>
  </div>

  <div className="slider-dots">
  {slides.map((_, index) => (
    <button
      key={index}
      className={currentSlide === index ? "active" : ""}
      onClick={() => setCurrentSlide(index)}
    >
      {index + 1}
    </button>
  ))}
</div>
</div>

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
