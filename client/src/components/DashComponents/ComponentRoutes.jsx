import React from 'react';
import Search from './Search.jsx';
import Cellar from './Cellar.jsx';
import Profile from './Profile.jsx';

const Routes = (props) => {
  if (props.component === 'Search') return <Search checker={props.checker} getFav={props.getFav} tasteListChecker={props.tasteListChecker} getTasteList={props.getTasteList} /> 
  if (props.component === 'Cellar') return <Cellar favorites={props.favorites} tasteList={props.tasteList} /> 
  if (props.component === 'Profile') return <Profile userProfile={props.profile} getProfile={props.getUserProfile} /> 
}

export default Routes;
