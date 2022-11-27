import React from 'react'
import Banner from '../components/Banner'
import Card1 from '../components/Card1'

import Footer from "../components/Footer"
import Header from '../components/Header'
import { LastBanner } from '../components/LastBanner'


const Homepage = () => {

  const about=[
    {
      img:'img/1.png',
      tit:'Image Colorize',
      des:'Image Colorizer is our basic AI feature that could add color to black and white pictures naturally.'
    },
    {
      img:'img/2.png',
      tit:'Image Enhancer',
      des:'Trained by thousand of HD picturem AI Image Enhancer could fix the blurry pittures and make them high definition '
    },
    {
      img:'img/3.png',
      tit:'Face Retouch',
      des:'Neural network system could recognize the face in pictures. Retouch the face without damage the original pictures'
    },
    {
      img:'img/4.png',
      tit:'Damaged Picture Restoration',
      des:'If your old pictures are scratched or damaged, use this feature to restore them without any PhotoShop skills.'
    },
  ]

  return (
    <div>
     
      <div className='main-container' style={{backgroundImage:"black  "}}>
      <Header></Header>
       <Banner></Banner>
        <div className='sub-container2'>
          <div className='sub-text'>
            <p> WHY CHOOSE US</p>
          </div>
          <div className='title'>
            <h1> Powerful AI tools help you improve and restore old pictures</h1>
          </div>
          <div className='grid-view'>
            { 
              about.map((item)=>(
                <Card1
                  img={item.img}
                  tit={item.tit}
                  des={item.des}
                ></Card1>
              ))
            }
            {/* <div className='grid-container'>
              <div className='grid-image'>
                <img className='grid-image' src='img/2.png'></img>
              </div>
              <div className="grid-text">
                <h1 className='grid-h1'>Image Enhancer</h1>
                <p className="grid-innertext">Trained by thousands of HD picture, AI Image Enhancer could fix the blurry pictures and make them high definition.</p>
              </div>
            </div>
            <div className='grid-container'>
              <div className='grid-image'>
                <img className='grid-image' src='img/3.png'></img>
              </div>
              <div className="grid-text">
                <h1 className='grid-h1'>Face Retouch</h1>
                <p className="grid-innertext">Neural network system could recognize the face in pictures. Retouch the face without damage the original pictures.</p>
              </div>
            </div>
            <div className='grid-container'>
              <div className='grid-image'>
                <img className='grid-image' src='img/4.png'></img>
              </div>
              <div className="grid-text" >
                <h1 className='grid-h1'>Damaged Pictures Restoration</h1>
                <p className="grid-innertext">If your old pictures are scratched or damaged, use this feature to restore them without any PhotoShop skills.</p>
              </div>
            </div> */}
          </div>
        </div>
        <div className='sub-container3'>
          <div className='sub-container3-image'>
            <img className='sub-container3-image' src='img/innerPic.jpeg'></img>
          </div>
          <div className='sub-container3-text'>
            <h1 className='container3-innertext'>
              All features you may need to optimize and enhance old photos.
            </h1>
            <p className='inner-para'>
              Image Colorizer empowers you with four AI capabilities to bring your old pictures new life.
            </p>
          </div>
        </div>
        <LastBanner></LastBanner>
      </div>
     <Footer></Footer>
     
     
    </div>
  )
}

export default Homepage;