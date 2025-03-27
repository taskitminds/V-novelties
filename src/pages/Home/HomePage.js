import React, { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import "./HomePage.css"; // Import the main CSS for HomePage
import h1 from "../../assets/images/home/h1.webp";
import h2 from "../../assets/images/home/h2.webp";
import h3 from "../../assets/images/home/h3.webp";

import "./Slideshow";
import Slideshow from "./Slideshow";


const carouselImages = [
  { image: h3, title: "Natural Herbal Solutions", text: "Our Natural Herbal Solutions offer pure, plant-based remedies for wellness and care.", position: "left" },
  { image: h2, title: "Essential Oils & Powders", text: "Our Essential Oils and Powders are crafted from the finest natural sources, ensuring purity and potency.", position: "right" },
  { image: h1, title: "Sustainable Herbal Products", text: "Our Sustainable Herbal Products are crafted with care, using eco-friendly practices to preserve nature’s balance.", position: "left" },
];


const products_list = [
  { image: "https://media.post.rvohealth.io/wp-content/uploads/sites/2/2021/10/Screen-Shot-2021-10-07-at-11.08.27-PM.png", title: "Lemongrass", disc: "Powerful antioxidant anti-inflammatory antifungal and astringent Repels flies and insects safe on all kind of flooring- used as floor cleaning agent helps to relieve stress and anxiety(aromatherapy)", id: 3 },
  { image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9VXfyJahnX6k5qMq8YlFDWWLhA_VKKhrEQw&s", title: "Palmarosa", disc: "Strongly antimicrobial Plays Effective role in personal care products (skin,care) Aromatherapy, used as ENT infections and relieves stress and anxiety", id: 3 },
  { image: "https://mangalorespice.com/cdn/shop/products/AR_01-02.jpg?v=1734783469&width=1445", title: "Vettiver", disc: "Excellent anti-oxidant and anti-inflammatory property Highly benficial in personal care products such as skin care and perfumery Extermination of scars, stretch and other skin marks Promising ingredient for aromatherapy, has improved alertness, concentration power and brain function", id: 3 },
  { image: "https://m.media-amazon.com/images/I/71ook9ul8wL._AC_UF1000,1000_QL80_.jpg", title: "Neem seed", disc: "", id: 1 },
  { image: "https://vherbs.in/wp-content/uploads/2024/07/Image-7-1.png", title: "Vherbcare", disc: "Improves livability. Herbs to supports liver, gallbladder and stimulates bile production. Herbs to anti-inflammatory properties. Detoxifying and toxin binder herbs. Helps indigestion and sluggish liver. Better shell quality and reduced breakages ", id: 2 },
  { image: "https://5.imimg.com/data5/SELLER/Default/2023/3/VC/ZO/SK/109952101/95-acacia-concinna-shikakai.jpg", title: "Acacia Concinna", disc: "", id: 4 },
  { image: "https://5.imimg.com/data5/CK/BQ/CP/SELLER-44552119/sunsoil-100-natural-onion-allium-cepa-bulb-extract-quercetin-5--500x500.jpg", title: "Allium Cepa", disc: "", id: 4 },

]

const Product = ({ img, title, discr }) => {
  return (
    <div className="product-card">
      <img src={img} alt={title} className="product-img" />
      <h4 className="product-title">{title}</h4>
      <p className="product-description">{discr}</p>
    </div>
  );
};

const HomePage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  var [productSlide, setProductSlide] = useState(0);

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

      {/* Products Section */}
      <section className="products">
        <div className="product-section-title">
          <button className="section-title-button" onClick={() => { setProductSlide(productSlide = 0) }}>All</button>
          <button className="section-title-button" onClick={() => { setProductSlide(productSlide = 1) }}>Crop Care</button>
          <button className="section-title-button" onClick={() => { setProductSlide(productSlide = 2) }}>Animal Care</button>
          <button className="section-title-button" onClick={() => { setProductSlide(productSlide = 3) }}>Herbal Care</button>
          <button className="section-title-button" onClick={() => { setProductSlide(productSlide = 4) }}>Personal Care</button>
        </div>
        <div className="product-cards">
          {
            products_list.map((prt, index) => (
              productSlide === 0 ? <Product img={prt.image} title={prt.title} discr={prt.disc} /> : productSlide !== 0 && productSlide === prt.id ? <Product img={prt.image} title={prt.title} discr={prt.disc} /> : false

            ))
          }
        </div>
      </section>
    </div>
  );
};


export default HomePage; // Export HomePage component as default







/*<Product img="https://i.pinimg.com/236x/bf/58/96/bf5896dc6968b3f82e24de4b03791e8e.jpg" title='Tulasi' discr='This is tulasi'/> */

