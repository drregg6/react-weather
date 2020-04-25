import React from 'react';
import PropTypes from 'prop-types';

import Weekly from './Weekly';

const Weather = ({ weather }) => {

  const { current, daily, hourly } = weather;
  // console.log('From Weather:')
  // console.log(weather)
  // console.log(current)
  // console.log(daily)
  // console.log(hourly)

  return (
    <div className="weather">
      <h1>{weather.timezone}</h1>
      <Weekly daily={daily} />
    </div>
  )
}

Weather.propTypes = {
  weather: PropTypes.object
}

export default Weather;