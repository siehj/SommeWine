import React from 'react';
// var countries = require('../../../database-mysql/storedData').countries;
// import countries from '../../../database-mysql/storedData.js';

const SearchNav = (props) => {
  return (
    <div id="advSearchNav" > 
      {/* <h2>preferences</h2>
      <div id="prefList">
        <div className="Types">
          <h3>Type:</h3>

          <a> Red<input onClick={props.changePref} type="checkbox" name="types" value="Red" /> </a>
          <a>White <input onClick={props.changePref} type="checkbox" name="types" value="White" /></a>
          <a>Rosé <input onClick={props.changePref} type="checkbox" name="types" value="Rose" /></a>
          <a>Champagne <input onClick={props.changePref} type="checkbox" name="types" value="Champagne" /></a>
        </div>
        <br />
        <div className="Notes">
          <h3>Tasting Notes: </h3>

          <a>Sweet <input onClick={props.changePref} type="checkbox" name="notes" value="Sweet" /></a>
          <a>Dry <input onClick={props.changePref} type="checkbox" name="notes" value="Dry" /></a>
          <a>Floral <input onClick={props.changePref} type="checkbox" name="notes" value="Floral" /></a>
          <a>Fruity <input onClick={props.changePref} type="checkbox" name="notes" value="Fruity" /></a>
          <a>Spicy <input onClick={props.changePref} type="checkbox" name="notes" value="Spicy" /></a>
          <a>Nuts/Vanilla <input onClick={props.changePref} type="checkbox" name="notes" value="Nuts" /></a>
          <a>Woody <input onClick={props.changePref} type="checkbox" name="notes" value="Wood" /></a>
        </div>
        <br />
        <div className="Regions">
          <h3>Regions: </h3>
          {Object.keys(countries).map((region, i) => {
            return(
              <div className="region" key={i}>
                <h4 key={i} >{region}</h4>
                {countries[region].map((country, j) => {
                  return(                 
                    <a key={j} >{country} <input onClick={props.changePref} type="checkbox" name="regions" value={country} /></a>
                  )
                })}
              </div>
            )
          })}
        </div>
        <br />
          <input className="close" type="button" value="Close" onClick={props.close} />
        </div> */}
    </div>
  )
}
    
export default SearchNav;