import React from 'react';
import { Row, Col } from 'reactstrap';

const SearchResult = (props) => {
  return (
    <Row className="resultData" >
      <Col xs="8" md="8" lg="8">
        <h6>{props.wine.name}</h6>
        <a>Region: {props.wine.region} </a>
      </Col>
      <Col xs="2" md="2" lg="2" >
        <Row><a>Price: ${props.wine.price}</a></Row>
        <Row><a>Type: {props.wine.type}</a></Row>
      </Col>
      <Col >
        <a id="heart" onClick={() => props.favorite(props.wine)} name={JSON.stringify(props.wine)} value="false" >&#9825; Save Wine</a>
        <br/>
        <a id="list" onClick={() => props.taste(props.wine)} >+ Taste List</a>
      </Col>
    </Row>
  )
};

export default SearchResult;