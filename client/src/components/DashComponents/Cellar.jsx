import React from 'react';
import '../../../dist/ComponentCss/cellar.css';
import CellarHome from './CellarComponents/CellarHome.jsx';

class Cellar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      screen: 'Home',
      AddPhoto: false,
      ShowTasteLater: false,
    };
    this.toggleFeature = this.toggleFeature.bind(this);
  }

  toggleFeature(target) {
    console.log(target, this.state[target])
    this.setState({ [target] : !this.state[target] });
  }
    
  render() {
    return (
      <div>
        {/* <h2 className="tabTitle">Cellar</h2> */}
       <CellarHome addPhoto={this.state.AddPhoto} toggle={this.toggleFeature} tasteLater={this.state.ShowTasteLater} />        
      </div>
    )
  }
}

export default Cellar;