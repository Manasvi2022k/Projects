import React from 'react';
import './styles/App.css';
import Header from './components/Header';
import TopEvents from './components/TopEvents';
import Navigation from './components/Navigation';

function App() {
  return (
    <div className="App">
      <Header />
      <TopEvents />
      <Navigation />
    </div>
  );
}

export default App;
