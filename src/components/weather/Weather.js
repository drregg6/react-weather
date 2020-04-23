import React from 'react';
import PropTypes from 'prop-types';

const Weather = ({
  weather: { name }
}) => {
  return (
    <div className="weather">
      <h1>{name}</h1>
    </div>
  )
}

Weather.propTypes = {
  weather: PropTypes.object
}

export default Weather;