import React from 'react';
import { Col, Row, Button } from 'reactstrap';
import CellarWine from './CellarWine.jsx';

const CellarFavorites = (props) => {
  return (
    <Col >
      <h2 className="tabTitle">Favorites</h2>
      <Row >
        <Col className="cellarFavorites" >
        {
          props.favorites.map(wine => <CellarWine key={wine.id} wine={wine} />)
        }
        </Col>
      </Row>
      <div>
        <Button onClick={() => props.toggle('ShowFavorites')} outline color="secondary" block>Back</Button>
      </div>
    </Col>
  )
}

export default CellarFavorites;
