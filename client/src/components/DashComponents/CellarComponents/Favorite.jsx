import React from 'react';
import { Row, Col, Collapse, CardTitle, CardText, Card, Media, Button } from 'reactstrap';

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
            <div>
              <CardTitle className="text-center" >Wine Details</CardTitle>
              <CardText>Winery: {this.props.wine.winery}</CardText>
              <CardText>MSRP: ${this.props.wine.price}</CardText>
            </div>
            </Col> 
            <Col style={{ width: '15%'}} className="text-center" >
              <div className="text-center" >
                <CardTitle>Wine Label</CardTitle>
                <a><Media className="favLabel" src={this.props.wine.image} /></a> 
              </div>
            </Col>
          </Row>
          {/* <div className="text-center" >
            <Button style={{ marginTop: '10px' }} >Remove From Favorites</Button>
          </div> */}
        </Collapse>
      </Card>
    )
  }
}

export default Favorite;
