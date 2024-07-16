import React from 'react';
import { Link as ScrollLink } from 'react-scroll';
import '../styles/InPlayNow.css';

const inPlayNow = [
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
  { name: 'Special Sport', imgSrc: '/WhatsApp Image 2024-06-22 at 02.34.31.jpeg' }, // New image
  // Add more in-play sports as needed
];

const InPlayNow = () => {
  const handleSportClick = (sport) => {
    console.log(`Clicked on ${sport}`);
    // Perform specific action here
  };

  return (
    <section id="in-play-now" className="in-play-now">
      <h2>In-Play Now</h2>
      <div className="scroll-container">
        {inPlayNow.map((sport, index) => (
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
      </div>
    </section>
  );
};

export default InPlayNow;
