import React from 'react';
import { Route, Link, History, BrowserRouter as Router } from 'react-router-dom';


let LandingPage = (props) => {
  return (
    <div>
      <h1>
        LandingPage
      </h1>
      <Link to="/login">Login</Link>
      <Link to="/signup">SignUp</Link>
    </div>
  )
};


export default LandingPage;