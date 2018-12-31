import React from 'react';
import '../../../dist/ComponentCss/cellar.css';

class Cellar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      
    };
  }

  render() {
    return (
      <div>
        <h2 className="tabTitle">Cellar</h2>
        <div className="cellarHome">
          <div className="cellarLeft"><h3 className="text-center clText" >Favorites</h3></div>
          <div className="cellarRight">
            <h3>A</h3>
            <h3>B</h3>
          </div>
        </div>
      </div>
    )
  }
}

export default Cellar;