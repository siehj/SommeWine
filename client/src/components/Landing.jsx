import React from 'react';
import { Link } from 'react-router-dom';
import landingData from './../../../database-pg/landingData';
// import LandingModal from './NestedComponents/LandingModal.jsx';
import '../../dist/ComponentCss/landing.css';

class LandingPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayed: '',
      features : landingData.LandingData
    };
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
              Object.keys(this.state.features).map((feature, i) => <h1 key={i} >{feature}</h1> )
            }
          </div>
          <div className="explanaitions text-center" >
            <em>blah blah blah</em>
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