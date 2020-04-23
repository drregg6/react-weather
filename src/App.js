import React, { useEffect, useState } from 'react';
import axios from 'axios';

import Header from './components/layout/Header';
import Footer from './components/layout/Footer';

import Search from './components/search/Search';
import Weather from './components/weather/Weather';

function App() {
  const [ weather, setWeather ] = useState({})
  useEffect(() => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=philadelphia&appid=${process.env.REACT_APP_WEATHER_API}`;
    console.log(url)
    axios.get(url)
    .then(res => {
      setWeather({...res.data});
    })
    .catch(err => {
      console.error(err);
    });
  }, []);
  
  return (
    <div className="container">
      <Header />
      <div className="main">
        <Search />
        <Weather weather={weather} />
      </div>
      <Footer />
    </div>
  );
}

export default App;
