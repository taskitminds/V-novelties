import React, { useState, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import HomePage from "../pages/Home/HomePage";
import AboutPage from "../pages/About/AboutPage";
import ProductsPage from "../pages/Products/ProductsPage";
import ApplicationPage from "../pages/Application/ApplicationPage";
import ContactPage from "../pages/Contact/ContactPage";
import RandD from "../pages/R&D/r&dpaje";
import "./MainLayout.css";
import loading from "../logo.svg"

const LoadingScreen = () => (
  <div className="loading-container">
    <div className="loading-content">
      <img src={loading} alt="Loading..." className="loading-logo" />
      <p className="loading-text">Naturally in every drop</p>
    </div>
  </div>
);


const MainLayout = () => {
  const location = useLocation();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 1000); // Simulate loading delay
    return () => clearTimeout(timer);
  }, [location]);

  return (
    <>
      <Navbar />
      {loading ? (
        <LoadingScreen />
      ) : (
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/application" element={<ApplicationPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/research" element={<RandD />} />
        </Routes>
      )}
      <Footer />
    </>
  );
};

export default MainLayout;
