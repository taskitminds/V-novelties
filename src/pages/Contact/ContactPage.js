import React from 'react';
import './ContactPage.css';
import { Mail, MapPin, Phone, User } from 'lucide-react';
import { useForm, ValidationError } from '@formspree/react';
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

const ContactUs = () => {
  const [state, handleSubmit] = useForm("xeoaeayb");  // Your Formspree form ID

  return (
    <div className="contact-us-page">
      {/* Follow Us Section */}
        <div className="follow-us-section">
          <h2>Stay Connected with Us</h2>
          <p>Follow us on social media for latest updates and products!</p>
          <div className="social-icons">
            <a href="https://www.facebook.com/share/166SEiPp6h/" className="social-link" target="_blank" rel="noreferrer">
              <FaFacebook />
            </a>
            <a href="https://www.instagram.com/vnoveltiesmdu?igsh=MWJvZDZxNzZob20yOQ==" className="social-link slstyle" target="_blank" rel="noreferrer">
              <FaInstagram />
            </a>
            <a href="https://www.linkedin.com/in/v-novelties-7b904935a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className="social-link" target="_blank" rel="noreferrer">
              <FaLinkedin />
            </a>
          </div>
        </div>
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

          <p><User size={22} /> &nbsp; &nbsp;P. KAMALA KANNAN</p>

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

          {/* Embedded Google Map */}
          <div className="map-container">
            <iframe
              title="Google Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3929.8160947772517!2d78.09781707478396!3d9.949254273906336!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b00cf00389a0af1%3A0x27655d03fd3964c3!2sV%20novelties!5e0!3m2!1sen!2sin!4v1743099824907!5m2!1sen!2sin"
              width="100%"
              height="300"
              style={{ border: 0, borderRadius: '8px' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>


        </div>
      </div>
    </div>
  );
};

export default ContactUs;
