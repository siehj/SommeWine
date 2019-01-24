import React from 'react';
import CellarWine from './CellarWine.jsx';
import { Col, Row, Button } from 'reactstrap';

const TasteLater = (props) => {
  return (
    <Col >
      <h2 className="tabTitle">Taste List</h2>
      <Row >
        <Col className="cellarFavorites" >
        {
          props.tasteList.map(wine => <CellarWine key={wine.id} wine={wine} />)
        }
        </Col>
      </Row>
      <div>
        <Button onClick={() => props.toggle('ShowTasteLater')} outline color="secondary" block >Back</Button>
      </div>
    </Col>
  )
}

export default TasteLater;