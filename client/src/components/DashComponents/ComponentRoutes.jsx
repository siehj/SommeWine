import React from 'react';
import Search from './Search.jsx';
import Favorites from './Favorites.jsx';
import Profile from './Profile.jsx';

const Routes = (props) => {
  if (props.component === 'Search') return <Search /> 
  if (props.component === 'Favorites') return <Favorites /> 
  if (props.component === 'Profile') return <Profile /> 
}

export default Routes;
