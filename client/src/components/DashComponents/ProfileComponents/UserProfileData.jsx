import React from 'react';
import { Card, Button, CardTitle, CardText, Row, Col, Input } from 'reactstrap';

const UserProfile = (props) => {
 return (
  <Card className="userData" >
    {/* <CardTitle>{ props.user.name ? props.user.name : props.user.username }</CardTitle> */}
    <Row>
      {
        Object.keys(props.user).map(item => {
          return (
            <Col key={item}>
              {
                props.edit ? 
                  <CardText>
                    { 
                      item === "username" ? 
                      <div>
                        <label>{item}:</label>
                        <em>{props.user[item]}</em>
                      </div>
                      : <Input placeholder={item} onChange={props.update} />
                    }
                  </CardText> 
                : 
                  <CardText>
                    <label>{item}:</label>
                    { 
                      props.user[item] === null ? <em className="pleaseUpdate">Please Update</em> : <em>{props.user[item]}</em>
                    }
                  </CardText>
              }
            </Col>
          )
        })
      }
    </Row>
    {
      props.edit ? 
      <Row style={{ marginTop : "10px" }} >
        <Col>
          <Button outline color="secondary" className="userProfileBtns" title="editUser" onClick={props.save} >Save</Button> 
        </Col>
        <Col>
          <Button outline color="secondary" className="userProfileBtns" onClick={() => props.toggle('editUser')}>Cancel</Button> 
        </Col>
      </Row>
        : <Button onClick={() => props.toggle('editUser')} outline color="secondary" >Edit</Button>
    }
  </Card>
 )
};

export default UserProfile;