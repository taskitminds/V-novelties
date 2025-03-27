import React from 'react';
import './ContactPage.css';
import { Mail, MapPin, Phone, User } from 'lucide-react';
import { useForm, ValidationError } from '@formspree/react';

const ContactUs = () => {
  const [state, handleSubmit] = useForm("xeoaeayb");  // Your Formspree form ID

  return (
    <div className="contact-us-page">
      <div className="contact-content">
        {/* Form Section */}
        <div className="contact-form-container">
          <h2>Get in Touch</h2>
          <p>Feel free to drop us a message below!</p>
          <form onSubmit={handleSubmit}>
            <input 
              id="name"
              type="text" 
              name="name" 
              placeholder="Your name" 
              required 
            />

            <input 
              id="email"
              type="email" 
              name="email" 
              placeholder="Your email" 
              required 
            />
            <ValidationError 
              prefix="Email" 
              field="email" 
              errors={state.errors}
            />

            <textarea 
              id="message"
              name="message" 
              placeholder="Type your message here" 
              required 
            />
            <ValidationError 
              prefix="Message" 
              field="message" 
              errors={state.errors}
            />

            <button type="submit" disabled={state.submitting}>
              SEND
            </button>

            {state.succeeded && <p>Thanks for reaching out! We'll get back to you soon.</p>}
          </form>
        </div>

        {/* Information Section */}
        <div className="contact-info-box">
          <h2>Contact Us</h2>

          <p><User size={22} /> &nbsp; &nbsp;P KAMALA KANNAN</p>

          {/* Location - Opens Google Maps */}
          <p>
            <a 
              href="https://www.google.com/maps/search/?api=1&query=9+GK+Cottage+Koodal+Nagar+Madurai+625018" 
              target="_blank" 
              rel="noopener noreferrer"
              className="contact-link"
            >
              <MapPin size={22} /> &nbsp;No: 9, GK Cottage, Koodal Nagar, Madurai-625018.
            </a>
          </p>

          {/* Mail - Opens Gmail */}
          <p>
            <a 
              href="mailto:vnoveltiesmdu@gmail.com" 
              className="contact-link"
            >
              <Mail size={22} /> &nbsp;vnoveltiesmdu@gmail.com
            </a>
          </p>

          {/* Phone - Opens Dial Pad */}
          <p>
            <a 
              href="tel:+918248280830"
              className="contact-link"
            >
              <Phone size={22} /> &nbsp;+91-82482 80830
            </a>
          </p>

          {/* Social Media Links */}
          <div className="social-links">
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
            <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-youtube"></i></a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a>
            <a href="https://www.pinterest.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-pinterest"></i></a>
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"></i></a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
