import React from 'react';
import './TopEvents.css';

const TopEvents = () => {
    return (
        <main>
            <section className="top-events">
                <h2>Top Events</h2>
                <div className="buttons">
                    <button id="view-all-btn">View All</button>
                    <button id="make-bet-btn">Make Bet</button>
                </div>
                <div className="matchday">
                    <h3>Matchday 1</h3>
                    <p>MAN CITY vs REAL MADRID</p>
                </div>
                <div className="odds">
                    <div className="odd">3.56</div>
                    <div className="odd">2.36</div>
                    <div className="odd">4.23</div>
                </div>
            </section>
        </main>
    );
};

export default TopEvents;
