// src/components/Sports.js
import React from 'react';

import { Link as ScrollLink } from 'react-scroll';
import '../styles/Sports.css';

const sports =[
  { name: 'Baseball', imgSrc: '/WhatsApp Image 2024-06-22 at 02.34.31.jpeg' },
  { name: 'Hockey', imgSrc: '/WhatsApp Image 2024-06-22 at 02.34.31.jpeg' },
  { name: 'Golf', imgSrc: '/WhatsApp Image 2024-06-22 at 02.34.31.jpeg' },
  { name: 'Soccer', imgSrc: '/WhatsApp Image 2024-06-22 at 02.34.31.jpeg' },
  { name: 'Basketball', imgSrc: '/WhatsApp Image 2024-06-22 at 02.34.31.jpeg' },
  { name: 'Tennis', imgSrc: '/WhatsApp Image 2024-06-22 at 02.34.31.jpeg' },
  { name: 'Hockey', imgSrc: '/WhatsApp Image 2024-06-22 at 02.34.31.jpeg' },
  { name: 'Golf', imgSrc: '/WhatsApp Image 2024-06-22 at 02.34.31.jpeg' },
  { name: 'Soccer', imgSrc: '/WhatsApp Image 2024-06-22 at 02.34.31.jpeg' },
  { name: 'Basketball', imgSrc: '/WhatsApp Image 2024-06-22 at 02.34.31.jpeg' },
  { name: 'Cricket', imgSrc: '/WhatsApp Image 2024-06-22 at 02.34.31.jpeg' },
  { name: 'Rugby', imgSrc: '/WhatsApp Image 2024-06-22 at 02.34.31.jpeg' },
  { name: 'Volleyball', imgSrc: '/WhatsApp Image 2024-06-22 at 02.34.31.jpeg' },
  { name: 'Swimming', imgSrc: '/WhatsApp Image 2024-06-22 at 02.34.31.jpeg' },
  { name: 'Special Sport', imgSrc: '/WhatsApp Image 2024-06-22 at 02.34.31.jpeg' }
]

;

const Sports = () => {
  const handleSportClick = (sport) => {
    console.log(`Clicked on ${sport}`);
    // Perform specific action here
  };

  return (    
    <section id="sports" className="sports">
        <div class="button-container">
        <button class="custom-button" onClick="location.href='https://www.youtube.com/'">Sports</button>
        <button class="custom-button" onclick="handleClick('Cards')">Cards</button>
        <button class="custom-button" onclick="handleClick('Games')">Games</button>
        <button class="custom-button" onclick="handleClick('Casino')">Casino</button>
    </div>
    <div data-aos="zoom-in">
      <div className="sports-scroll-container">
        {sports.map((sport, index) => (
          <div
            key={index}
            className="sport-item"
            onClick={() => handleSportClick(sport.name)}
          >
            <img src={sport.imgSrc} alt={sport.name} />
            <p>{sport.name}</p>
            <ScrollLink to="in-play-now" smooth={true} duration={500}>Live</ScrollLink>
          </div>
        ))}
      </div> </div>
    </section>
  );
};

export default Sports;
