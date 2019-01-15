import React from 'react';
import { Card, Row, CardTitle, Button } from 'reactstrap';

const UserPrefernceCard = (props) => {
  return (
    <Card className="userPreferences">
      <CardTitle className="text-center" >Your Preferences:</CardTitle>
      {
        Object.keys(props.prefs).length ? 
        <ul>
          {
            Object.keys(props.prefs).map(item => {
              console.log(item)
              return <li>item</li>
              // return props.prefs[item].map(bullet => <li>{bu}</li> )
            })
          }
        </ul> 
        : 
        <div>
          <h3 className="text-center" >No Preferences have been selected</h3>
        </div>
      }
      <Button outline color="secondary" onClick={() => props.toggle('editPreferences')} >Add Preferences</Button>
    </Card>
  )
}

export default UserPrefernceCard;
