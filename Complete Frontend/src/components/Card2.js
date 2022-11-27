import React from 'react'
import '../pages/About.css'

export const Card2 = (props) => {
  
  return (
    <div>
      <div className='card2-div' style={{background:props.bg}}>
        <div style={{ height: '40%', width: '100%', display: "flex", justifyContent: 'center' }}>
          <img style={{ maxHeight: '80%', maxWidth: '80%' }} src={props.img} />
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', alignItems: "center", marginTop:'30px'}}>
          <h1 style={{ fontSize: '2vw' }}>{props.tit}</h1>
          <p style={{ width: '70%', textAlign: 'center' }}>{props.des}</p>
        </div>

      </div>

    </div>
  )
}
