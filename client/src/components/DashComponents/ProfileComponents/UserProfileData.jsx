import React from 'react';
import { Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';

const UserProfile = (props) => {
 return (
  <Card className="userData" >
    {/* <CardTitle>{ props.user.name ? props.user.name : props.user.username }</CardTitle> */}
    <Row>
      {
        Object.keys(props.user).map(item => {
          return (
            <Col key={item}>
              <CardText>
                <label>{item}:</label>
                { 
                  props.user[item] === null ? <em className="pleaseUpdate">Please Update</em> : <em>{props.user[item]}</em>
                 }
              </CardText>
            </Col>
          )
        })
      }
    </Row>
    <Button outline color="secondary" >Edit</Button>
  </Card>
 )
};

export default UserProfile;