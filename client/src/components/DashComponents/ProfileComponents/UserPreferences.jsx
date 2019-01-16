import React from 'react';
import UserPreferenceCard from './UserPrefCard.jsx';
import { Card, Button, ListGroup, ListGroupItem,CardTitle, UncontrolledCollapse, Row, Col } from 'reactstrap';

const UserPreferences = (props) => {
  let inUserPrefs = []; 
  props.userPrefs.map(obj => inUserPrefs.push(obj.note))
  return props.edit ? 
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
                  props.prefs[category].map(entry => <ListGroupItem className="prefItem" title={entry.note} onClick={props.update} key={entry.id} >{entry.note} <a>{inUserPrefs.includes(entry.note) ? '-' : '+' }</a></ListGroupItem>) 
                  : 
                  Object.keys(props.prefs[category]).map(region => {
                    return (
                      <div key={region} >
                        <ListGroupItem id={region} >{ region }</ListGroupItem> 
                        {
                          props.prefs[category][region].map(country => {
                            return (
                              <UncontrolledCollapse toggler="#regions" key={country.id} >
                                <ListGroupItem className="countries prefItem" title={country.note} onClick={props.update} >{country.note}<a>{inUserPrefs.includes(country.note) ? '-' : '+' }</a></ListGroupItem>
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
      <Button style={{ margin: '10px' }} outline title={'editPreferences'} onClick={props.save} >Save/Cancel</Button>
    </Card>
  ) : <UserPreferenceCard prefs={props.userPrefs} toggle={props.toggle} /> 
}

export default UserPreferences;
