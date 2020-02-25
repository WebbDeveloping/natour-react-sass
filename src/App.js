import React from 'react';
import Header from './components/Header';

import './App.scss';
import About from './components/About';
import Features from './components/Features';
import Tours from './components/Tours';
import Stories from './components/Stories';
import Booking from './components/Booking';

function App() {
  return (
    <div className='App'>
      <Header />
      <main>
        <About />
        <Features />
        <Tours />
        <Stories />
        <Booking />
      </main>
    </div>
  );
}

export default App;
