import React from 'react';
import Preferences from './Preferences.jsx';

const Search = (props) => {
  return (
    <div>
      <h2 className="tabTitle">Search</h2>
      <div className="searchMain">
        <div className="searchForm">
          <form action="" method="post">
            <input type="text" name="query" onChange={props.query} />
            <input type="button"  value="Search" onClick={props.search} />
            <input type="button" value="Advanced Search" onClick={props.advMenu} />
            {props.showAdv ? <Preferences close={props.close} changePref={props.query} /> : ('')}
          </form>
        </div>
        <div className="searchResults">
          <h3>Results:</h3>
          
      </div>
      </div>
    </div>
  )
}

export default Search;