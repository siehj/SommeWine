import React from 'react';
import Search from './Search.jsx';
import Favorites from './Favorites.jsx';
import Profile from './Profile.jsx';

const Routes = (props) => {
  console.log(props)
  return (
    <div> 
      < props.component />
    </div>
  )
}

export default Routes;
