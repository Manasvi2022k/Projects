// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css';

const Header = () => {
  return (
    <header className="header">
      <img src="/logose.jpeg" alt="Kingmaker Logo" className="logo" />
      <h1 className="title">KINGMAKER</h1>
      
  <div class="profile-wrapper">
        <button class="image-button" onclick="handleClick('Image 1')">
            <img src="WhatsApp Image 2024-06-22 at 12.56.15.jpeg" alt="profile" class="profile" />
        </button>
  </div>
      
      
    </header>
  );
};

export default Header;






