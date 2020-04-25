import React from 'react';
import PropTypes from 'prop-types';

import Spinner from '../layout/Spinner';

const Current = ({ weather }) => {
  const { current } = weather;
  const temp = current && Math.floor(current.temp);
  const feelsLike = current && Math.floor(current.feels_like);
  const currentWeather = current && current.weather[0];
  const sunrise = current && current.sunrise;
  const sunset = current && current.sunset;
  const windspeed = current && current.wind_speed;
  const humidity = current && current.humidity;
  console.log(current)

  const renderCurrent = !current ? (
    <>
      <Spinner />
    </>
  ) : (
    <div className="details">
      <img src="http://www.placekitten.com/350/350" alt={currentWeather.description} title={currentWeather.description} />
      <div>
        <p>Currently: { temp }&deg;</p>
        <small>Feels like: { feelsLike }&deg;</small>
      </div>
    </div>
  )
  return (
    <div className="current justify-center">
      <h1>The current page</h1>
      {renderCurrent}
    </div>
  )
}

Current.propTypes = {
  weather: PropTypes.object
}

export default Current;