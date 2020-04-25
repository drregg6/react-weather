import React from 'react';
import PropTypes from 'prop-types';

import Day from './Day';

const Weekly = ({ daily }) => {
  const weekly = !daily ? (
    <h1>Loading</h1>
  ) : (
    <>
      {
        daily.map((day, idx) => {
          if (idx <= 4) {
            return <Day key={day.dt} idx={idx} day={day} />
          }
        })
      }
    </>
  )

  return (
    <div className="weekly">
      {weekly}
    </div>
  )
}

Weekly.propTypes = {
  daily: PropTypes.array
}

export default Weekly;