import React from 'react';
import { Card, Button, ListGroup, ListGroupItem,CardTitle, CardText, Row, Col } from 'reactstrap';

const UserPreferences = (props) => {
  return props.edit ? null :
  (
    <Card className="userPreferences" >
      <CardTitle className="text-center" >Preferences:</CardTitle>
      <Row>
        {
          Object.keys(props.prefs).map(category => {
            return (
            <Col key={category} className="prefsColLists" >
              <ListGroup>
                <ListGroupItem className="categoryTitle text-center" >{ category=== 'Country' ? 'REGION' : category.toUpperCase() }</ListGroupItem>
                { category !== 'Country' ? 
                  props.prefs[category].map(entry => <ListGroupItem className="prefItem" key={entry.id} >{entry.note}</ListGroupItem>) 
                  : 
                  Object.keys(props.prefs[category]).map(region => <ListGroupItem className="prefItem" key={region} >{ region }</ListGroupItem> )
                }
              </ListGroup>
            </Col> 
            )           
          })
        }
      </Row>
    </Card>
  )
}

export default UserPreferences;
