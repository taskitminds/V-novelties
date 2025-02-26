import React from 'react';
import Header from '../../components/Header/Header'; // Ensure the Header component exists
import './AboutPage.css';
import Navbar from '../../components/Navbar/Navbar'; // Ensure the Navbar component exists
import   "../../assets/images/about/abb.webp";
const AboutUs = () => {
  return (
    <div className="about-us">
      <Header />
      <Navbar />
        <h1 className='a'>About  Us</h1>
      <section className="who-we-are">
        <h2>Who We Are</h2>
        <img src="https://via.placeholder.com/800x400" alt="Company Overview" className="about-image" />
        <p>
          Established in 1979 at Nainital, Uttarakhand, Herbal Creations is a rapidly emerging manufacturer, exporter, and supplier of phytochemicals and herbal extracts, holding ISO 9001:2008 certification. Under the leadership of Managing Director Mr. Sugam Saraswat, we have gained expertise in this domain. The company adheres to GMP measures in all its processes.
        </p>
      </section>

      <section className="our-vision">
        <h2>Our Vision</h2>
        <img src="https://via.placeholder.com/800x400" alt="Our Vision" className="about-image" />
        <p>
          Our vision is to set the highest standards in customer satisfaction, product development, manufacturing, and delivery, aiming to be a global industry leader. Our GMPs ensure the purity, consistent composition, and quality of all our finished products.
        </p>
      </section>

      <section className="mission">
        <h3>Mission</h3>
        <img src="https://via.placeholder.com/800x400" alt="Our Mission" className="about-image" />
        <p>
          We are committed to quality and excellence, striving to make distinctive, lasting, and substantial contributions to global health by building a company that promotes core values impacting healthcare worldwide.
        </p>
      </section>

      <section className="quality-control">
        <h3>Quality Control</h3>
        <img src="https://via.placeholder.com/800x400" alt="Quality Control" className="about-image" />
        <p>
          As an ISO-certified company, we strictly follow GMP measures. Our well-equipped R&D Center works diligently to provide the best and latest phytochemicals.
        </p>
      </section>

      <section className="contact-info">
        <h3>Contact Information</h3>
        <address>
          <strong>Manufacturing Plant & Head Office:</strong><br />
          Village Nayagaon, Chandansingh Block Kotabagh, Tehsil Kaladhungi,<br />
          Distt Nainital, Uttarakhand-263139, India<br />
          Phone: +91-9897016110 (Office), +91-6395060795 (Sales), +91-6395061019 (Purchase)<br />
          Email: info@herbal-creations.com, purchase@herbal-creations.com (Purchase), sales1@herbal-creations.com (Sales)
        </address>
        <address>
          <strong>USA Warehouse & Office:</strong><br />
          Herbal Creations USA, Unit-F03, 1001 Doubleday Avenue, Ontario-91761, California, USA
        </address>
        <address>
          <strong>Bengaluru Warehousing cum Sales Office:</strong><br />
          No. C87, Devasandra Industrial Estate, Bengaluru, Karnataka 560048
        </address>
        <address>
          <strong>New Delhi Office Address:</strong><br />
          903 Tolstoy House, Tolstoy Marg, Connaught Place, New Delhi 110001
        </address>
      </section>

      <section className="useful-links">
        <h3>Useful Links</h3>
        <ul>
          <li><a href="/product-list">Product List</a></li>
          <li><a href="/about-us">About Us</a></li>
          <li><a href="/readings">Readings</a></li>
          <li><a href="/contact-us">Contact Us</a></li>
        </ul>
      </section>

      <section className="our-consortium">
        <h3>Our Consortium</h3>
        <ul>
          <li><a href="https://tarangiresort.com" target="_blank" rel="noopener noreferrer">Tarangi Resort</a></li>
          <li><a href="https://oshadhi.co.in" target="_blank" rel="noopener noreferrer">Oshadhi</a></li>
          <li><a href="https://www.oakbuds.in" target="_blank" rel="noopener noreferrer">Oak Buds</a></li>
          <li>Tame Rubbers</li>
        </ul>
      </section>
    </div>
  );
};

export default AboutUs;
