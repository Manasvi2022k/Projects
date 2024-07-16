import React from 'react';
import Header from './components/Header';
import TopEvents from './components/TopEvents';
import Footer from './components/Footer';
import './App.css';

function App() {
    return (
        <div className="App">
            <Header />
            <TopEvents />
            <Footer />
        </div>
    );
}

export default App;
