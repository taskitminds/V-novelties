import React from "react";
import "./ProductsPage.css"; // Import CSS for styling
import h1 from "../../assets/images/home/h1.webp";
import h2 from "../../assets/images/home/h2.webp";
import h3 from "../../assets/images/home/h3.webp";
import { useState, useEffect } from "react";

const carouselImages = [
  { image: h1, title: "Natural Herbal Solutions", text: "Pure and organic extracts for health & wellness.", position: "left" },
  { image: h2, title: "Essential Oils & Powders", text: "Premium quality essential oils for all industries.", position: "right" },
  { image: h3, title: "Sustainable Herbal Products", text: "Eco-friendly and sustainable herbal solutions.", position: "left" },
];

const products_list = [
  { image: "https://media.post.rvohealth.io/wp-content/uploads/sites/2/2021/10/Screen-Shot-2021-10-07-at-11.08.27-PM.png", title: "Lemongrass", disc: "Powerful antioxidant anti-inflammatory antifungal and astringent Repels flies and insects safe on all kind of flooring- used as floor cleaning agent helps to relieve stress and anxiety(aromatherapy)", id: 3 },
  { image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9VXfyJahnX6k5qMq8YlFDWWLhA_VKKhrEQw&s", title: "Palmarosa", disc: "Strongly antimicrobial Plays Effective role in personal care products (skin,care) Aromatherapy, used as ENT infections and relieves stress and anxiety", id: 3 },
  { image: "https://mangalorespice.com/cdn/shop/products/AR_01-02.jpg?v=1734783469&width=1445", title: "Vettiver", disc: "Excellent anti-oxidant and anti-inflammatory property Highly benficial in personal care products such as skin care and perfumery Extermination of scars, stretch and other skin marks Promising ingredient for aromatherapy, has improved alertness, concentration power and brain function", id: 3 },
  { image: "https://m.media-amazon.com/images/I/71ook9ul8wL._AC_UF1000,1000_QL80_.jpg", title: "Neem seed", disc: "", id: 1 },
  { image: "https://www.greenvisionindia.com/wp-content/uploads/2022/09/Azaneem-10000.png", title: "Azardictin", disc: "", id: 1 },
  { image: "https://www.secondmedic.com/app/asset/site_images/newproduct/WellnessForever202306174045217.webp", title: "Vcal", disc: "For growth, weight and activeness and Helps prevent problems of thin shell and broken egg and controls lameness", id: 2 },
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

const ProductsPage = () => {
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

  return (
    <div className="products-container">
      <h1 className="navbar_prd_title">Our Products</h1>
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

export default ProductsPage;
