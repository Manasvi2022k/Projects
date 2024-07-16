import React from 'react';
import '../styles/Header.css';
import headerImage from '../assets/image.png'; // Adjust the path as needed

const Header = () => {
  return (
    <header className="header">
      <img src={headerImage} alt="Football Championship" className="header-image" />
      <div className="header-content">
        <h1>FOOTBALL</h1>
        <h2>CHAMPIONSHIP - MAN CITY vs REAL MADRID</h2>
      </div>
    </header>
  );
};

export default Header;
