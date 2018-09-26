import React from 'react';
import Preferences from './Preferences.jsx';
var wines = require('../../../database-mysql/storedData').wines;


const Search = (props) => {
  return (
    <div>
      <h2 className="tabTitle">Search</h2>
      <div className="searchMain">
        <div className="searchForm">
          <div className="queryBox" >
            <input type="text" name="query" value={props.q} onChange={props.query} />
          </div>
          {props.showAdv ? <Preferences close={props.close} changePref={props.query} /> : ('')}
          <div className="queryBtns" >
            <input className="qb" type="button" value="Search" onClick={props.search} />
            <input className="qb" type="button" value="Advanced Search" onClick={props.advMenu} />
          </div>
        </div>
        <div className="searchResults">
          <h3>Results: </h3>
          {/* <select name="searchSort" id="searchSort">
            <option value="A-Z">A-Z</option>
            <option value="Z-A">Z-A</option>
            <option value="cheapest">$ &rarr; $$$$</option>
            <option value="expensive">$$$$ &rarr; $</option>
          </select> */}
          
          {/* {props.searchResults.slice(0, 10).map((wine, i) => {
            return (
              <div className="result" key={i}>
                <div className="resultData" >
                  <em>{wine.name}</em> <a className="heart">&#9825;</a>
                  <br />
                  <a>Region: {wine.region}</a>
                  <br />
                  <a>Type: {wine.type}</a>
                  <br />
                  <a>Rating: {wine.rating}  Price: ${wine.price}</a>
                </div>
              </div>
            )
          })} */}
          {wines.slice(0, 10).map((wine, i) => {
            return (
              <div className="result" key={i}>
              <div className="resultData" >
                <em>{wine.name}</em>  <a className="heart" name={JSON.stringify(wine)} value="false" onClick={props.addFav} >&#9825;</a>
                <br />
                <a>Region: {wine.region} </a>
                <br />
                <a>Type: {wine.type}</a>
                <br />
                <a>Price: ${wine.price}</a>
              </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Search;