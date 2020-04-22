import React from 'react';

import Header from './components/layout/Header';
import Footer from './components/layout/Footer';

import Search from './components/search/Search';
import Weather from './components/weather/Weather';

function App() {
  return (
    <div className="container">
      <Header />
      <div className="main">
        <Search />
        <Weather />
      </div>
      <Footer />
    </div>
  );
}

export default App;
