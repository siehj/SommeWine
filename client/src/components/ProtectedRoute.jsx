import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import auth from '../../../service/auth.js';

const ProtectedRoute = (props) => {
  return <Route render={() => auth.authCheck() ? <props.component /> : <Redirect to="/login" /> } />
};

export default ProtectedRoute;

