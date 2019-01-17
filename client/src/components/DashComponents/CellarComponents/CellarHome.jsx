import React from 'react';
import CellarPhoto from './CellarPhoto.jsx';
import TasteLater from './CellarTasteLater.jsx';

const CellarHome = (props) => {
  return (
    <div className="cellarHome">
      <div className="cellarLeft" onClick={() => props.toggle('ShowFavorites') } >
        <h3 className="text-center" style={{ marginTop: '40%' }} >Favorites</h3>
      </div>
      <div className="cellarRight">
        <div className="rightTop" >
          {
            props.addPhoto ? <CellarPhoto toggle={props.toggle} /> : <h3 onClick={() => props.toggle('AddPhoto')} className="rtText" >Photo</h3>
          }
          
        </div>
        <div className="rightBottom" >
          {
            props.TasteLater ? <TasteLater toggle={props.toggle}  /> : <h3 onClick={() => props.toggle('ShowTasteLater')} className="rbText" >Taste Later</h3>
          }
        </div>
      </div>
    </div>
  )
};

export default CellarHome;
