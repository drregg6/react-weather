/*

TODO:
= Setup a couple of APIs (if available)
    - Search for user's location when they enter the site
    - Allow user to search for city, then use that city name to get lat/long
= Design
    - How will this all come together?
    - Click on a day to get full information?
= New tech
    - Tailwind?
= Geolocation API -> CORS issue
    ###
    useEffect(() => {
      const geoUrl = `https://api.ipgeolocationapi.com/geolocate`;
      axios.get(geoUrl)
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.error(err);
      })
    }, []);
    ###
= Endpoint for current weather
    - `https://api.openweathermap.org/data/2.5/weather?q=philadelphia&appid=${process.env.REACT_APP_WEATHER_API}`
= Implement Search
    - import Search from './components/search/Search';
    - <Search />


*/

import React, { useEffect, useState } from 'react';
import axios from 'axios';

import Header from './components/layout/Header';
import Footer from './components/layout/Footer';

import Weather from './components/weather/Weather';

function App() {
  const [ weather, setWeather ] = useState({})

  useEffect(() => {
    const altUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=39.95&lon=-75.16&appid=${process.env.REACT_APP_WEATHER_API}&units=imperial`;
    console.log(altUrl)
    axios.get(altUrl)
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
        <Weather weather={weather} />
      </div>
      <Footer />
    </div>
  );
}

export default App;
