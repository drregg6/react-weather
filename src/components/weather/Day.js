import React from 'react';
import PropTypes from 'prop-types';
import Moment from 'react-moment';

const Day = ({day, idx}) => {
  console.log(day)
  const { dt, feels_like, temp, weather } = day
  const feelsLikeTemp = Math.floor(feels_like.day);
  const highTemp = Math.floor(temp.max);
  const lowTemp = Math.floor(temp.min);
  const datetime = new Date(dt);
  return (
    <div className="day">
      { !day ? (
          <></>
        ) : (
          <>
            <header>
              <Moment add={{ days: `${idx}` }} format="dddd">{datetime}</Moment>
            </header>
            <div className="daily-body">
              <p>
                <div>High Temp: <span>{ highTemp }&deg;</span></div>
                <div>Low Temp: <span>{ lowTemp }&deg;</span></div>
                <small>Feels like: { feelsLikeTemp }&deg;</small>
              </p>
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