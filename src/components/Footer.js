import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      
      <div class="image-container">
        <button class="image-button" onclick="handleClick('Image 1')">
            <img src="image1.jpeg" alt="Image 1" class="footer-image" />
        </button>
        <button class="image-button" onclick="handleClick('Image 2')">
            <img src="image2.jpeg" alt="Image 2" class="footer-image" />
        </button>
        <button class="image-button" onclick="handleClick('Image 3')">
            <img src="image3.jpeg" alt="Image 3" class="footer-image" />
        </button>
        <button class="image-button" onclick="handleClick('Image 4')">
            <img src="image4.jpeg" alt="Image 4" class="footer-image" />
        </button>
        <button class="image-button" onclick="handleClick('Image 5')">
            <img src="image5.jpeg" alt="Image 5" class="footer-image" />
        </button>
    </div>
    </footer>
  );
};

export default Footer;
