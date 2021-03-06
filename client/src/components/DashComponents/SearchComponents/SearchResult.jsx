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
      {
        props.checker.includes(props.wine.name) ? <a id="unsaved" onClick={() => props.favorite(props.wine)} >- Unsave</a> : 
        <a id="heart" onClick={() => props.favorite(props.wine)} name={JSON.stringify(props.wine)} value="false" >&#9825; Save Wine</a>
      }
        <br/>
      {
        props.TLChecker.includes(props.wine.name) ? <a id="removeList" onClick={() => props.taste(props.wine)} >- List</a> :
          <a id="list" onClick={() => props.taste(props.wine)} >+ Taste List</a>
      }
      </Col>
    </Row>
  )
};

export default SearchResult;