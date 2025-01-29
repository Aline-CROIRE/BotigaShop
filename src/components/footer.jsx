// Footer.jsx
import React from 'react';
import { Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';
import '../styles/footer.css'
import footer from '../assets/images/footer-payment-methods-1.png.webp'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Top Section */}
        <div className="footer-top">
          {/* Newsletter Section */}
          <div className="newsletter-section">
            <h1 className="section-title">Stay up to date</h1>
            <p className="section-description">
              <p> Subscribe to our newsletter and get 20% discount offer in <br /> your first order.</p>
            </p>
            <div className="email-signup">
              <input
                type="email"
                placeholder="Enter your email"
                className="email-input"
              />
              <button className="submit-button">SUBMIT</button>
            </div>
          </div>

          {/* Contact Section */}
          <div className="contact-section">
            <h2 className="section-title">Happy to help</h2>
            <div className="contact-info">
              <p>1279 Thorn Street, NY</p>
              <p>Phone: 307-549-2480</p>
              <p>Mail: demo@gmail.com</p>
            </div>
            
            {/* Social Media Icons */}
            <div className="social-icons">
              <Facebook className="social-icon" />
              <Twitter className="social-icon" />
              <Linkedin className="social-icon" />
              <Instagram className="social-icon" />
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="footer-bottom">
          {/* Shop Section */}
          <div className="footer-column">
            <h3 className="column-title">SHOP</h3>
            <ul className="footer-links">
            
        {/* <li classname="aa">Electronics</li>
        <li classname="aa">Computer Gadget</li>
        <li classname="aa">Fashion</li>
        <li classname="aa">Body Lotions</li>
        <li classname="aa">Sports</li>
        <li classname="aa">Women clothes</li>
        <li classname="aa">Shoes</li>
        <li classname="aa">Watches</li>
       */}
            </ul>
          </div>

          {/* Company Section */}
          <div className="footer-column">
            <h3 className="column-title">COMPANY</h3>
            <ul className="footer-links">
              <li>About</li>
              <li>Careers</li>
              <li>Help</li>
            </ul>
          </div>

          {/* About Section */}
          <div className="footer-column">
            <h3 className="column-title">ABOUT</h3>
            <ul className="footer-links">
              <li>Who We Are</li>
              <li>Reviews</li>
              <li>Contact</li>
            </ul>
          </div>

          {/* Payment Methods */}
          <div className="footer-column">
            <h3 className="column-title">ACCEPT FOR</h3>
            <div className="payment-methods">
              <img src={footer} alt="" width={170} height={25}/>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;