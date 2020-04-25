import React from 'react';
import PropTypes from 'prop-types';

import Spinner from '../layout/Spinner';
import Day from './Day';

const Weekly = ({ daily }) => {
  const weekly = !daily ? (
    <Spinner />
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
    <div className="weekly flex flex-center">
      {weekly}
    </div>
  )
}

Weekly.propTypes = {
  daily: PropTypes.array
}

export default Weekly;