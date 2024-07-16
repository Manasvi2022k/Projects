// src/components/SubHeader.js
import React from 'react';
import { Link } from 'react-router-dom'; // Assuming you're using React Router

const SubHeader = () => {
  return (
    <div className="sub-header">
      <Link to="/sports">Sports</Link>
      <Link to="/cards">Cards</Link>
      <Link to="/games">Games</Link>
    </div>
  );
};

export default SubHeader;
