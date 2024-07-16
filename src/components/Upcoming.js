// src/components/Upcoming.js
import React from 'react';
import '../styles/Upcoming.css';

const upcoming = [
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
  { name: 'Special Sport', imgSrc: '/WhatsApp Image 2024-06-22 at 02.34.31.jpeg' },
  // Add more upcoming sports as needed
];

const Upcoming = () => {
  const handleSportClick = (sport) => {
    console.log(`Clicked on ${sport}`);
    // Perform specific action here
  };

  return (
    <section id="upcoming" className="upcoming">
      <h2>Upcoming</h2>
      <div className="scroll-container">
        {upcoming.map((sport, index) => (
          <div
            key={index}
            className="sport-item"
            onClick={() => handleSportClick(sport.name)}
          >
            <img src={sport.imgSrc} alt={sport.name} />
            <p>{sport.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Upcoming;



