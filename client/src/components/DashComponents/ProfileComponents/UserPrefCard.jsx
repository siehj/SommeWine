import React from 'react';
import { Card, Row, CardTitle, Button, Col } from 'reactstrap';

const UserPrefernceCard = (props) => {
  return (
    <Card className="userPreferences">
      <CardTitle className="text-center" >Your Preferences:</CardTitle>
      {
        props.prefs.length ? 
        <Row>
          {
            props.prefs.map((item, i) => {
              return <Col key={i} ><ul><li>{item.note}</li></ul></Col>
            })
          }
        </Row>
        : 
        <div>
          <h3 className="text-center" >No Preferences have been selected</h3>
        </div>
      }
      <Button outline color="secondary" onClick={() => props.toggle('editPreferences')} >Add/Remove Preferences</Button>
    </Card>
  )
}

export default UserPrefernceCard;
