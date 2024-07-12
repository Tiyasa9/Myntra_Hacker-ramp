import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="Footer">
      <div className="footer-links">
        <div>
          <h4>Online Shopping</h4>
          <ul>
            <li>Men</li>
            <li>Women</li>
            <li>Kids</li>
            <li>Beauty</li>
            <li>Home & Living</li>
          </ul>
        </div>
        <div>
          <h4>Customer Policies</h4>
          <ul>
            <li>Contact Us</li>
            <li>FAQ</li>
            <li>Terms Of Use</li>
            <li>Track Orders</li>
            <li>Shipping</li>
            <li>Cancellation</li>
            <li>Returns</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div>
          <h4>Experience Myntra App on Mobile</h4>
          <div className="app-links">
            <img src="path-to-google-play-icon" alt="Google Play" />
            <img src="path-to-app-store-icon" alt="App Store" />
          </div>
        </div>
      </div>
      <div className="social-media">
        <h4>Keep In Touch</h4>
        <div className="social-icons">
          <img src="path-to-facebook-icon" alt="Facebook" />
          <img src="path-to-twitter-icon" alt="Twitter" />
          <img src="path-to-youtube-icon" alt="YouTube" />
          <img src="path-to-instagram-icon" alt="Instagram" />
        </div>
      </div>
      <div className="guarantee">
        <p>100% ORIGINAL guarantee for all products at myntra.com</p>
        <p>Return within 14 days of receiving your order</p>
      </div>
    </footer>
  );
}

export default Footer;
