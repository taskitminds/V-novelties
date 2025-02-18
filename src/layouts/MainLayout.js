// The MainLayout.js is a component that acts like a template for all your pages. It usually includes things like:

// Header: The top part of the page with navigation links.
// Footer: The bottom section with extra info or links.
// Content Area: A space for each page’s content.
// It helps keep the page structure consistent and avoids repeating the same parts on every page.
import React from 'react';
import Header from '../components/Header/Header';
import Navbar from '../components/Navbar/Navbar';
import HomePage from '../pages/Home/HomePage';
import Footer from '../components/Footer/Footer';

const MainLayout = () => {
  return (
    <div>
      <HomePage />
      <Footer />
    </div>
  );
};

export default MainLayout;
