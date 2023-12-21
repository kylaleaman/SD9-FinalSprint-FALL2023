import React from 'react';
import './footer.css';

function Footer() {
  return (
    <div className="footer">
      {/* Footer columns for more information */}
      
      <div className="shop-column">
        <h3>SHOP</h3>
        <p>Tops</p>
        <p>Dresses</p>
        <p>Pants</p>
        <p>Jeans</p>
        <p>Accessories</p>
      </div>

      <div className="corporate-column">
        <h3>CORPORATE INFO</h3>
        <p>Careers</p>
        <p>About</p>
        <p>Sustainability</p>
        <p>History</p>
        <p>Public Relations</p>
      </div>

      <div className="help-column">
        <h3>HELP</h3>
        <p>Customer Service</p>
        <p>FAQs</p>
        <p>Contact Us</p>
        <p>Shipping & Returns</p>
        <p>Store Locator</p>
      </div>

      <div className="hours-column">
        <h3>HOURS</h3>
        <p>Monday to Friday: 9am-9pm</p>
        <p>Saturday & Sunday: 10am-6pm</p>
        <div className="social-icons">
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            <img src="./images/facebook.jpg" alt="Facebook" />
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <img src="./images/instagram.jpg" alt="Instagram" />
          </a>
          <a href="https://www.threads.com" target="_blank" rel="noopener noreferrer">
            <img src="./images/threads.jpg" alt="Threads" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;