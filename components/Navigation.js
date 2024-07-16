import React from 'react';
import '../styles/Navigation.css';

const Navigation = () => {
  return (
    <nav className="navigation">
      <button className="nav-item">Home</button>
      <button className="nav-item">Search</button>
      <button className="nav-item">TV</button>
      <button className="nav-item">Wallet</button>
      <button className="nav-item">Profile</button>
    </nav>
  );
};

export default Navigation;
