import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import HomePage from "../pages/Home/HomePage";
import AboutPage from "../pages/About/AboutPage";
import ProductsPage from "../pages/Products/ProductsPage";
import ApplicationPage from "../pages/Application/ApplicationPage";
import ContactPage from "../pages/Contact/ContactPage";
import Header from "../components/Header/Header";
import RandD from "../pages/R&D/r&dpaje";

const MainLayout = () => {
  return (
    <>
      <Header />
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/application" element={<ApplicationPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/research" element={<RandD />} />
      </Routes>
      <Footer />
    </>
  );
};

export default MainLayout;