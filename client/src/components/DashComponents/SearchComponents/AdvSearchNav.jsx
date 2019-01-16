import React from 'react';
import { Card, Row, Col, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

const SearchNav = (props) => {
  return (
    <Card id="advSearchNav" > 
    { props.status ? 
      (
        <Row className="text-center" >
          {
            Object.keys(props.prefs).map((col, i) => {
              return (
                <Col key={i}>
                  <a className="colTitle" >{col === 'Country' ? "REGION" : col.toUpperCase()}</a>
                  <br/>

                  {
                    col === 'Country' ? 
                      Object.keys(props.prefs[col]).map((region, r) => {
                        return (
                          <Row key={r} className="advRegions" >
                            <Col>
                              <a >{region}</a>
                            </Col>
                            <Col>
                              <select name={region} className="advCountries" onMouseUp={props.query} onMouseDown={props.query} >
                                {
                                  props.prefs[col][region].map((country, c) => <option  value={country.note} key={c}>{country.note}</option> )
                                } 
                              </select>
                            </Col>
                          </Row>
                        )
                      })
                    :
                      props.prefs[col].map((options, j) => <a key={j} >{ options.note }  <input onClick={props.query} type="checkbox" value={options.note} /> </a> )

                  }
                </Col>
              )
            })
          }
        </Row>
      ) : null }
    </Card>
  )  
}
    
export default SearchNav;


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