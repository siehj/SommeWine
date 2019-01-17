import React from 'react';
import '../../../dist/ComponentCss/cellar.css';
import CellarFavorites from './CellarComponents/CellarFavorites.jsx';
import CellarHome from './CellarComponents/CellarHome.jsx';

class Cellar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      screen: 'Home',
      AddPhoto: false,
      ShowTasteLater: false,
      ShowFavorites: false,
    };
    this.toggleFeature = this.toggleFeature.bind(this);
  }

  toggleFeature(target) {
    this.setState({ [target] : !this.state[target] });
  }
    
  render() {
    return (
      <div>
        {
          this.state.ShowFavorites ? <CellarFavorites favorites={this.props.favorites} /> :
          <CellarHome showFavs={this.state.ShowFavorites} addPhoto={this.state.AddPhoto} toggle={this.toggleFeature} tasteLater={this.state.ShowTasteLater} />        
        }
      </div>
    )
  }
}

export default Cellar;