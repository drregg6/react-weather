import React from 'react';
// import PropTypes from 'prop-types';

const Search = () => {
  return (
    <div className="search">
      <h1>Search</h1>
      <form>
        <input type="text" placeholder="Search for your city or country" name="search" />
        <input type="submit" value="Submit" />
      </form>
    </div>
  )
}

// Search.propTypes = {

// }

export default Search;