import React from 'react';
import '../styles/TopEvents.css';

const TopEvents = () => {
  return (
    <div className="top-events">
      <div className="top-events-header">
        <h2>Top Events</h2>
        <div className="buttons">
          <button className="view-all">View all</button>
          <button className="make-bet">Make Bet</button>
        </div>
      </div>
      <div className="event">
        <h3>Matchday 1</h3>
        <p>MAN CITY vs REAL MADRID</p>
      </div>
      <div className="odds">
        <div className="odd">3.56</div>
        <div className="odd">2.36</div>
        <div className="odd">4.23</div>
      </div>
    </div>
  );
};

export default TopEvents;
