import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import "./BenchMark.css";
import img1 from "./5.jpg";
import img2 from "./2.jpg";
import img3 from "./3.jpg";
import img4 from "./4.jpg";
import img5 from "./1.jpg";
import {useNavigate} from "react-router-dom";


const images = [
    { src: img1, title: "Animal Care", description: "Cow(Vmilk+), Chicken(Vpro & Vcal)" },
    { src: img3, title: "Agri Care", description: "Neem Seed, Seaweed Gel, Micro Nutrients" },
    { src: img5, title: "Essential Oils", description: "Lemongrass, Vettiver, Eucalyptus" },
    { src: img2, title: "Extracts", description: "Blue Pea Flower, Hibiscus Extract, Rose" },
    { src: img4, title: "Personal Care", description: "Aloe Gel, Cucumber Gel, Rose Water" }
];

const AnimatedImageGallery = () => {
    const headingRef = useRef(null);
    const galleryRef = useRef(null);
    const [selectedImage, setSelectedImage] = useState(null);

    useEffect(() => {
        const observerOptions = {
            root: null,
            rootMargin: "0px",
            threshold: 0.2,
        };

        const observerCallback = (entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("visible");
                    observer.unobserve(entry.target);
                }
            });
        };

        const headingObserver = new IntersectionObserver(observerCallback, observerOptions);
        const galleryObserver = new IntersectionObserver(observerCallback, observerOptions);

        if (headingRef.current) headingObserver.observe(headingRef.current);
        if (galleryRef.current) {
            const galleryCards = galleryRef.current.querySelectorAll(".gallery-card");
            galleryCards.forEach(card => galleryObserver.observe(card));
        }

        return () => {
            headingObserver.disconnect();
            galleryObserver.disconnect();
        };
    }, []);

    const handleImageClick = (image) => {
        setSelectedImage(image);
    };

    const closeModal = () => {
        setSelectedImage(null);
    };

    const navigate = useNavigate();

    return (
        
        <div>
            <h1 ref={headingRef} className="benchmark-heading">BenchMark Products</h1>
            <center><p className="benchmark-hint">(Click on images for preview)</p></center>
            <div className="gallery-body">
                <div ref={galleryRef} className="gallery-container">
                    {images.map((image, index) => (
                        <div key={index} className="gallery-card" onClick={() => handleImageClick(image)}>
                            <img src={image.src} alt={`Gallery ${index + 1}`} />
                            <div className="content">
                                <h3>{image.title}</h3>
                                <p>{image.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Modal Popup */}
            {selectedImage && (
                <div className="modal-overlay" onClick={closeModal}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <span className="close-btn" onClick={closeModal}>&times;</span>
                        <img src={selectedImage.src} alt={selectedImage.title} className="modal-image" />
                        <h2>{selectedImage.title}</h2>
                        <p>{selectedImage.description}</p>
                        <button
                            className="view-button"
                            onClick={() => navigate('/products', { state: { category: selectedImage.title } })}
                        >
                        Click to view Products Page
                        </button>

                    </div>
                </div>
            )}
        </div>
    );
};

export default AnimatedImageGallery;
