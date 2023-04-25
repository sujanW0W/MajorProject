import React from 'react'
import './Cards.css'
import { useNavigate } from 'react-router-dom'

export const Cards = (props) => {
  const navigate=useNavigate('/Upload');
 


 
  return (
    <div className='cards-main'>
      <div className='cards-submain'>
        <div className='image-container'>
          <div className='before'  style={{backgroundImage:`url(${props.image})`}} >
           
          </div>
          {/* <input type='range' min="0" max="270" step="10" id="compare-ip"  ></input> */}
         
        </div>
        <div className='des-container'>
          <h1>{props.title}
          </h1>
          <p style={{marginRight:'50px'}}>{props.des}</p>
          <div className='cards_button'>
            <button style={{marginBottom:'5px'}}onClick={()=>{navigate('/Upload')}}>Image Inpaint Now  </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cards;
