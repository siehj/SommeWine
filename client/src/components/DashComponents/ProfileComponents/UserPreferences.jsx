import React from 'react';
import { Card, Button, ListGroup, ListGroupItem,CardTitle, UncontrolledCollapse, Row, Col } from 'reactstrap';

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
                
              { category=== 'Country' ? <ListGroupItem className="categoryTitle text-center" >REGION <a id="regions" >( +/- )</a></ListGroupItem> : 
                <ListGroupItem className="categoryTitle text-center" >{category.toUpperCase()}</ListGroupItem> }
                
                { category !== 'Country' ? 
                  props.prefs[category].map(entry => <ListGroupItem className="prefItem" key={entry.id} >{entry.note}</ListGroupItem>) 
                  : 
                  Object.keys(props.prefs[category]).map(region => {
                    return (
                      <div key={region} >
                        <ListGroupItem className="prefItem" id={region} >{ region }</ListGroupItem> 
                        {
                          props.prefs[category][region].map(country => {
                            return (
                              <UncontrolledCollapse toggler="#regions" key={country.id} >
                                <ListGroupItem className="countries" >{country.note}</ListGroupItem>
                              </UncontrolledCollapse>
                            )
                        })
                        }
                      </div>
                    )}
                    )
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
