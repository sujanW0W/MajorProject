import React from 'react';
import '../pages/Homepage.css';

const Card1 = (props) => {
  return (
    <div>
      <div className='grid-container'>
        <div className='grid-image'>
          <img className='grid-image' src={props.img}></img>
        </div>
        <div className="grid-text">
          <h1 className='grid-h1'>{props.tit}</h1>
          <p className="grid-innertext">{props.des}
          </p>
        </div>
      </div>
    </div>
  )
}

export default  Card1;

