import React from 'react';

const Preferences = (props) => {
  return (
    <div>
      <h2>preferences</h2>
      <form id="prefList">
        <div className="Types">
          <h4>Type:</h4>

          Red<input onClick={props.changePref} type="checkbox" name="types" value="Red" />
          White <input onClick={props.changePref} type="checkbox" name="types" value="White" />
          Rosé <input onClick={props.changePref} type="checkbox" name="types" value="Rose" />
          Champagne <input onClick={props.changePref} type="checkbox" name="types" value="Champagne" />
        </div>
        <br />
        <div className="Notes">
          <h4>Tasting Notes: </h4>

          Sweet <input onClick={props.changePref} type="checkbox" name="notes" value="Sweet" />
          Dry <input onClick={props.changePref} type="checkbox" name="notes" value="Dry" />
          Floral <input onClick={props.changePref} type="checkbox" name="notes" value="Floral" />
          Fruity <input onClick={props.changePref} type="checkbox" name="notes" value="Fruity" />
          Spicy <input onClick={props.changePref} type="checkbox" name="notes" value="Spicy" />
          Nuts/Vanilla <input onClick={props.changePref} type="checkbox" name="notes" value="Nuts" />
          Woody <input onClick={props.changePref} type="checkbox" name="notes" value="Wood" />
        </div>
        <br />
        <div className="Regions">
          <h4>Regions: </h4>

          Africa <input onClick={props.changePref} type="checkbox" name="regions" value="Africa" />
          Asia <input onClick={props.changePref} type="checkbox" name="regions" value="Asia" />
          Europe <input onClick={props.changePref} type="checkbox" name="regions" value="Europe" />
          South America <input onClick={props.changePref} type="checkbox" name="regions" value="South America" />
          United States <input onClick={props.changePref} type="checkbox" name="regions" value="United States" />
        </div>
        <br />
        </form>
    </div>
      )
    }
    
export default Preferences;