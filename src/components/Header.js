import React from 'react';
import './Header.css';
import footballImage from '../images/football.jpeg'; // Ensure you have an image named football.jpg in src/images

const Header = () => {
    return (
        <header className="hero-section">
            <div className="hero-content">
                <img src={footballImage} alt="Football Player" className="hero-image" />
                <div className="hero-text">
                    <h1>FOOTBALL</h1>
                    <h2>CHAMPIONSHIP - MAN CITY vs REAL MADRID</h2>
                </div>
            </div>
        </header>
    );
};

export default Header;
