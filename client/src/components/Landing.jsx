import React from 'react';
import { Link } from 'react-router-dom';
// import LandingModal from './NestedComponents/LandingModal.jsx';
import '../../dist/ComponentCss/landing.css';

class LandingPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayed: '',
      features : {
        'Customize Search' : {},
        'Get Suggestions' : {},
        'Save Wines' : {}
      }
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
        <section className="three text-center" >
          Bottom
        </section>
      </div>
    )
  }
};


export default LandingPage;