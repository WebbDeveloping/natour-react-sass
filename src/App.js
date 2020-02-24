import React from 'react';
import Header from './components/Header';
import './App.scss';
import About from './components/About';
import Features from './components/Features';
import Tours from './components/Tours';
function App() {
  return (
    <div className='App'>
      <Header />
      {/* <header className='header'>
                        <div class="header__logo-box">
                <img src="img/logo-white.png" alt="Natoure Logo" class="header__logo"/>
            </div>
            <div class="header__text-box">
                <h1 class="heading-primary">
                    <span class="heading-primary--main">Outdoors</span>
                    <span class="heading-primary--sub">is where life happens.</span>
                </h1>
                <a href="#" class="btn btn--white btn--animated">Discover our tours</a>
            </div>
        </header> */}
      <main>
        <About />
        <Features />
        <Tours />
      </main>
    </div>
  );
}

export default App;
