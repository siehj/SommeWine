import React from 'react';

const LandingExplanaitions = (props) => {
  if (props.info.type === 1) {
    return (
      <div className="landingExplanaition" >
        <h1>{props.info.title}</h1>
        <div className="type1Text" >
          <em >{props.info.text}</em>
        </div>
        { props.info.msg ? <em style={{ fontSize: '25px', fontWeight: 'bold' }} >{props.info.msg}</em> : null }
      </div>
    )
  } else if (props.info.type === 2) {
    return (
      <div className="landingExplanaition" >
        <h1>{props.info.title}</h1>
        <div>
          <img src={props.info.img} />
        </div>
        <div className="type1Text" >
          <em >{props.info.text}</em>
        </div>
      </div>
    )
  } else if (props.info.type === 3) {
    return (
      <div className="landingExplanaition" >
        <h1>{props.info.title}</h1>
        <div className="type3Box" >
          <div className="Col1" >
            <a>{props.info.col1}</a>
            <br/>
            <img src={props.info.img1} />
            <br/>
            <em>{props.info.text1}</em>
          </div>
          <div className="Col2" >
            <a>{props.info.col2}</a>
            <br/>
            <img src={props.info.img2} />
            <br/>
            <em>{props.info.text2}</em>
          </div>
        </div>
      </div>
    )
  } else {
    return (
      <div className="landingExplanaition" >
        <h1>{props.info.title}</h1>
        <div className="type4Box" >
          {
            props.info.bullets.map((item, i) => <ul key={i} >{item}</ul> )
          }
        </div>
      </div>
    )
  }
};

export default LandingExplanaitions;