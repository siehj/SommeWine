import React from 'react';

const Preferences = (props) => {
  return (
    <div>
      <h2>preferences</h2>
      <div id="prefList">
        <div className="Types">
          <h4>Type:</h4>

          <a> Red<input onClick={props.changePref} type="checkbox" name="types" value="Red" /> </a>
          <a>White <input onClick={props.changePref} type="checkbox" name="types" value="White" /></a>
          <a>Rosé <input onClick={props.changePref} type="checkbox" name="types" value="Rose" /></a>
          {/* <a>Champagne <input onClick={props.changePref} type="checkbox" name="types" value="Champagne" /></a> */}
        </div>
        <br />
        <div className="Notes">
          <h4>Tasting Notes: </h4>

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
          <h4>Regions: </h4>

          {/* <a>Africa <input onClick={props.changePref} type="checkbox" name="regions" value="Africa" /></a>
          <a>Asia <input onClick={props.changePref} type="checkbox" name="regions" value="Asia" /></a>
          <a>Europe <input onClick={props.changePref} type="checkbox" name="regions" value="Europe" /></a>
          <a>South America <input onClick={props.changePref} type="checkbox" name="regions" value="South America" /></a> */}
          <a>France <input onClick={props.changePref} type="checkbox" name="regions" value="France" /></a>
          <a>Italy <input onClick={props.changePref} type="checkbox" name="regions" value="Italy" /></a>
          <a>Japan <input onClick={props.changePref} type="checkbox" name="regions" value="Japan" /></a>
          <a>Argentina <input onClick={props.changePref} type="checkbox" name="regions" value="Argentina" /></a>
          <a>United States <input onClick={props.changePref} type="checkbox" name="regions" value="United States" /></a>
        </div>
        <br />
          <input className="close" type="button" value="Close" onClick={props.close} />
        </div>
    </div>
      )
    }
    
export default Preferences;