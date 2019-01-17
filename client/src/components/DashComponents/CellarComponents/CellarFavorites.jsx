import React from 'react';
import { Card, Media, CardTitle, CardText, Col, Row } from 'reactstrap';
import Favorite from './Favorite.jsx';

const CellarFavorites = (props) => {
  return (
    <Col >
      <h2 className="tabTitle">Favorites</h2>
      <Row >
        <Col className="cellarFavorites" >
        {
          props.favorites.map(wine => <Favorite key={wine.id} wine={wine} />)
        }
        </Col>

      </Row>
    </Col>
  )
}

export default CellarFavorites;
