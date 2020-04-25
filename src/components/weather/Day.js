import React from 'react';
import PropTypes from 'prop-types';
import Moment from 'react-moment';

const Day = ({day, idx}) => {
  console.log(day)
  const { dt, feels_like, temp, weather } = day
  const feelsLikeTemp = Math.floor(feels_like.day);
  const highTemp = Math.floor(temp.max);
  const lowTemp = Math.floor(temp.min);
  const weatherDesc = weather[0].description
  const datetime = new Date(dt);
  return (
    <div className="day">
      { !day ? (
          <></>
        ) : (
          <>
            <header>
              <img src="http://www.placekitten.com/150/150" alt={weatherDesc} title={weatherDesc} /><br />
              <Moment add={{ days: `${idx}` }} format="dddd">{datetime}</Moment>
            </header>
            <div className="daily-body">
              <div>
                <p>High Temp: <span>{ highTemp }&deg;</span></p>
                <p>Low Temp: <span>{ lowTemp }&deg;</span></p>
                <small>Feels like: { feelsLikeTemp }&deg;</small>
              </div>
            </div>
          </>
        )
      }
    </div>
  )
}

Day.propTypes = {
  day: PropTypes.object
}

export default Day;