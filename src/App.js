// the root component of the application

import React from 'react';
import './App.css';
import { Navbar, Footer } from './components';
import { Header, Event, Menu, Gallery, Histoire, Reviews } from './container';

const App = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <Event />
      <Menu />
      <Gallery />
      <Histoire />
      <Reviews />
      <Footer />
    </div>
  )
}

export default App;
