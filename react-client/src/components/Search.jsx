import React from 'react';
import Preferences from './Preferences.jsx';

const Search = (props) => {
  return (
    <div>
      <h2 className="tabTitle">Search</h2>
      <div className="searchMain">
        <div className="searchForm">
          <input type="text" className="queryBox"  name="query" value={props.q} onChange={props.query} />
          {props.showAdv ? <Preferences close={props.close} changePref={props.query} /> : ('')}
          <div className="queryBtns" >
            <input type="button" value="Search" onClick={props.search} />
            <input type="button" value="Advanced Search" onClick={props.advMenu} />
          </div>
        </div>
        <div className="searchResults">
          <h3>Results:</h3>
          {props.searchResults.map((wine, i) => {
            return (
              <div className="result" key={i}>
                <a>Name: {wine.name}</a>
                <a>Region: {wine.region}  Vineyard: {wine.vineyard}</a>
                <a>Type: {wine.type}</a>
                <a>Rating: {wine.rating}  Price: {wine.price}</a>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Search;