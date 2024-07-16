import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      
      <div class="image-container">
        <button class="image-button" onclick="handleClick('Image 1')">
            <img src="image1.png" alt="Image 1" class="footer-image" />
        </button>
        <button class="image-button" onclick="handleClick('Image 2')">
            <img src="image2.png" alt="Image 2" class="footer-image" />
        </button>
        <button class="image-button" onclick="handleClick('Image 3')">
            <img src="image3.png" alt="Image 3" class="footer-image" />
        </button>
        <button class="image-button" onclick="handleClick('Image 4')">
            <img src="image copy.png" alt="Image 4" class="footer-image" />
        </button>
        
    </div>
    </footer>
  );
};

export default Footer;

