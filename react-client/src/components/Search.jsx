import React from 'react';
import Preferences from './Preferences.jsx';

const Search = (props) => {
  return (
    <div>
      <h2>SEARCH</h2>

      <form action="" method="post">
        <input type="text" onChange={props.query} />
        <input type="button" value="Search" onClick={props.search} />
      </form>
    </div>
  )
}

export default Search;