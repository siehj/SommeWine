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
        {/* <h2 className="tabTitle">Cellar</h2> */}
        <div className="cellarHome">
          <div className="cellarLeft"><h3 className="text-center" style={{ marginTop: '40%' }} >Favorites</h3></div>
          <div className="cellarRight">
            <div className="rightTop" >
              <h3 className="rtText" >Photo</h3>
            </div>
            <div className="rightBottom" >
              <h3 className="rbText" >Taste Later</h3>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Cellar;