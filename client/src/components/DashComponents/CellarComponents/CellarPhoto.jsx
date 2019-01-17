import React from 'react';
import { Input, Button, Col, Row } from 'reactstrap';

const CellarPhoto = (props) => {
  return (
    <div className="cellarPhoto" >
      <h3 onClick={() => props.toggle('AddPhoto')} >COMING SOON</h3>
      {/* <Col>
        <Row className="text-center" >
          <Input type="file" />
        </Row>
        <Row>
          <Col>
            <Button>Add to Favorites</Button>
          </Col>
          <Col>
            <Button>Add to Taste List</Button>
          </Col>
        </Row>
        <Button onClick={() => props.toggle('AddPhoto')} >Cancel</Button>
      </Col> */}
    </div>
  )
};

export default CellarPhoto;

