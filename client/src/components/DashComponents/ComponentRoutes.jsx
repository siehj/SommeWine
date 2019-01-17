import React from 'react';
import Search from './Search.jsx';
import Cellar from './Cellar.jsx';
import Profile from './Profile.jsx';

const Routes = (props) => {
  if (props.component === 'Search') return <Search checker={props.checker} /> 
  if (props.component === 'Cellar') return <Cellar /> 
  if (props.component === 'Profile') return <Profile /> 
}

export default Routes;
