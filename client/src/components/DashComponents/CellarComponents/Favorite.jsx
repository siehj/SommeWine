import React from 'react';
import { Row, Col, Collapse, CardTitle, CardText, Card, Media } from 'reactstrap';

class Favorite extends React.Component {
  constructor(props) {
    super(props);
    this.state = { collapse: false };
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({ collapse: !this.state.collapse });
  }

  render() {
    return (
      <Card className="favWines" >
        <div onClick={this.toggle} className="text-center" >
          <CardTitle className="favTitle" >{this.props.wine.name}</CardTitle>
        </div>
        <Collapse isOpen={this.state.collapse} >
          <Row style={{ paddingLeft : '2%' }} >
            <Col style={{ width: '80%' }} >
            <div className="text-center" >
              <CardTitle>Wine Details</CardTitle>
            </div>
              <CardText>Winery: {this.props.wine.winery}</CardText>
              <CardText>MSRP: ${this.props.wine.price}</CardText>
            </Col> 
            <Col style={{ width: '15%'}} className="text-center" >
              <div className="text-center" >
                <CardTitle>Wine Label</CardTitle>
                <Media className="favLabel" src={this.props.wine.image} /> 
              </div>
            </Col>
          </Row>
        </Collapse>
      </Card>
    )
  }
}

export default Favorite;
