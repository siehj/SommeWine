import React from 'react';
import { Link } from 'react-router-dom';
// import LandingModal from './NestedComponents/LandingModal.jsx';
import '../../dist/ComponentCss/landing.css';

let LandingPage = (props) => {
  return (
    <div id="landing" >
      <section className="one">
        <h1 id="LandingTitle" className="slide-fwd-bottom text-center" >
          SommeWine
        </h1>
        <div className="slide-fwd-bottom text-center" >
          <Link to="/login">
            <button className="btns" >Get Started</button>
          </Link>
          
          {/* <Link to="/login">Login</Link> |  <Link to="/signup">SignUp</Link> */}
        </div>
      </section>
      <section className="two" >
        HI
      </section>
      <section className="three text-center" >
        Bottom
      </section>
    </div>
  )
};


export default LandingPage;