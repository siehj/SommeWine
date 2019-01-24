import React from 'react';
import { Link } from 'react-router-dom';
import '../../dist/ComponentCss/landing.css';
import landingData from './../../../database-pg/landingData';
import LandingExplanaitions from  './LandingComponents/LandingExp.jsx';

class LandingPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayed: landingData.LandingData.SommeWine,
      features : landingData.LandingData
    };
    this.changeExplanaition = this.changeExplanaition.bind(this);
  }

  changeExplanaition(target) {
    this.setState({ displayed : landingData.LandingData[target] });
  }

  render() {
    return (
      <div id="landing" >
        <section className="one">
          <h1 id="LandingTitle" className="slide-fwd-bottom text-center" > SommeWine </h1>
          <div className="slide-fwd-bottom text-center" >
            <Link to="/login">
              <button className="btn" >Get Started</button>
            </Link>
          </div>
        </section>
        <section className="two" >
          <div className="features" >
            {
              Object.keys(this.state.features).map((feature, i) => <h1 key={i} onClick={() => this.changeExplanaition(feature)} >{feature}</h1> )
            }
          </div>
          <div className="explanaitions text-center" >
            <LandingExplanaitions info={this.state.displayed} />
          </div>
        </section>
        <section className="three" >
          <div className="text-center" >
            <a href="https://github.com/siehj/sommewine" target="_blank" style={{ color: "darkRed" }}> [ Repo ] </a> 
            <a href="https://www.github.com/siehj/" target="_blank" style={{ color: "darkRed" }}> [ Github ] </a> 
            <a href="https://www.linkedin.com/in/siehj/" target="_blank" style={{ color: "darkRed" }}> [ LinkedIn ] </a> 
          </div>
        </section>
      </div>
    )
  }
};


export default LandingPage;