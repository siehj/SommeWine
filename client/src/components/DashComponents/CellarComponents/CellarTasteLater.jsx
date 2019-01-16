import React from 'react';

const TasteLater = (props) => {
  return (
    <div className="tasteLater" >
      <button onClick={() => props.toggle('ShowTasteLater')} >Cancel</button>
    </div>
  )
}

export default TasteLater;