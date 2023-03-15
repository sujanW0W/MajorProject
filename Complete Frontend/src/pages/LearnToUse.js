import React from 'react'
import Header from '../components/Header'
import './Homepage.css'
import bg3 from '../Images/backbeautiful.jpg'
import './LearnToUse.css'
import { Rating } from '@mui/material'
import Card1 from '../components/Card1'
import './UploadPage.css'
import './Homepage.css';
import '../components/Cards.css';
import { LastBanner } from '../components/LastBanner'
import Footer from '../components/Footer'





export const LearnToUse = () => {
    const content = [
        {
            id: "1",
            title: "Colorize",
            des: "Everyone can generate impressive photo realistic images, even you are not a master of a graphic designer.",
            img: 'img/1.png'

        },
        {
            id: "2",
            title: "Enhancer",
            des: "Adjust the Exposure, Saturation, Hue, Sharpen, Radius, Gamma, and Denoise. Use Inpaint, Brush and filters.",
            img: 'img/3.png'

        },
        {
            id: "3",
            title: "Lifetime",
            des: "Pay once, use forever. No monthly fee and renewal fee. Enjoy the lifetime upgrade and colorization services.",
            img: 'img/4.png'

        },
    ]
    const content2=[
        {
            id:'1',
            img:"img/8.png",
            title:"AI Algorithm",
            des:"We are training the AI system to colourize black and white photos. *Colorization is based online."
        },
        {
            id:'1',
            img:"img/9.png",
            title:"Fully Featured",
            des:"All-in-one features. Make everything simple for you to process photo colorization and enhancement."
        },
        {
            id:'1',
            img:"img/10.png",
            title:"Totally Automatic",
            des:"Apply the most correct color selection to objects based on the boundaries and surfaces."
        },
        {
            id:'1',
            img:"img/11.png",
            title:"Free to Start",
            des:"Start using it without any limitations. Only a little watermark when exporting the image."
        },
        {
            id:'1',
            img:"img/12.png",
            title:"User-Friendly Surface",
            des:"The interface is carefully designed. No learning curves and you can use it immediately."
        },
        {
            id:'1',
            img:"img/13.png",
            title:"Free Upgrade",
            des:"We provide free upgrade for lifetime."
        },
    ]
    return (
        <div>
            <div className='upmain-container' style={{ backgroundImage: `url(${bg3})` }}>
                <div className='upmain'>
                    <Header></Header>
                    <div className='upsub-container'>
                        <div className='upsub-innercontainer'>
                            <h1 style={{ fontWeight: "900", color: 'black', marginTop: "50px", color: "white" }}>Picture Colorizer</h1>
                            <p style={{ width: "40%", height: "100px", lineHeightStep: "400px", fontSize: "18px", wordSpacing: "3px", marginTop: "30px", color: "white", textAlign: "center" }}> Picture Colorizer is a Windows and Mac application used for B&W photo colorization and old photo restoration. Allows users to adjust various parameters of the photo and apply filters. Register to remove watermark.</p>
                            <Rating name="read-only" value={5} readOnly style={{ marginTop: "20px", width:"150px"}} />
                        </div>

                        <button className='l-btn'><h1>Soon Lunching For Mac And Win</h1></button>
                        <p style={{ width: "40%", height: "100px", lineHeightStep: "400px", fontSize: "10px", wordSpacing: "3px", marginTop: "30px", color: "white", textAlign: "center" }}> Picture Colorizer 3 will be released on 01/03/2030. With some fantastic features and improved colorization and enhancement workflow. Feature like auto-update feature. Please download and install the 3.0 version in your Mac/Win.</p>
                    </div>
                    <div className='grid-view2' style={{ background: "black" }}>
                        {
                            content.map((item) => (
                                <Card1
                                    id={item.id}
                                    img={item.img}
                                    tit={item.title}
                                    des={item.des}
                                ></Card1>
                            ))

                        }
                    </div>
                    <div className='l-maincontainer3'>
                        <div className='l-submaincontainer'>
                            <div className='l-innercontainer'>
                                <h1 style={{ color: "white", fontFamily: " Verdana, Geneva, Tahoma, sans-serif" }}>Colorize and enhance black and white photo</h1>
                                <p style={{ lineHeightStep: "200px", fontSize: "18px", wordSpacing: "3px", marginTop: "30px", color: "white" }}>No advanced GPU required. Download our program, upload the B&W photos for colorization so quickly with Picture Colorizer.</p>
                                <div  className='cards-btn'><a href='https://imagecolorizer.com/colourize-black-white-photo-on-Windows.html'><button className='cards_button1'><h1 style={{ fontSize: "15px", fontWeight: "900", fontFamily: "Verdana, Geneva, Tahoma, sans-serif" }}>Learn How To Use It </h1></button></a></div>

                            </div>
                            <div className='l-img'>
                                <img className="l-img" src='Img/img2.png'></img>
                            </div>

                        </div>
                        <div className='l-submaincontainer'>
                            <div className='l-img' >
                                <img className='l-img' style={{ height: "20vw" }} src='img/img3.png'></img>
                            </div>
                            <div className='l-innercontainer'>
                                <h1 style={{ color: "white", fontFamily: " Verdana, Geneva, Tahoma, sans-serif" }}>Use Advanced Inpaint feature to repair old pictures</h1>
                                <p style={{ lineHeightStep: "200px", fontSize: "18px", wordSpacing: "3px", marginTop: "30px", color: "white" }}>By using the Inpaint feature, you can repair the scratched photo or remove some watermarks.
                                    Add mask on the damaged part and then click "InPaint" button.</p>

                                <div className='cards-btn'><a href='https://imagecolorizer.com/blog/advanced-features-picture-colorizer.html'><button className='cards_button1' ><h1 style={{ fontSize: "15px", fontWeight: "900", fontFamily: "Verdana, Geneva, Tahoma, sans-serif" }}>Learn How To Use It </h1></button></a></div>

                            </div>
                        </div>
                        <div className='l-submaincontainer'>
                            <div className='l-innercontainer'>
                                <h1 style={{ color: "white", fontFamily: " Verdana, Geneva, Tahoma, sans-serif" }}>Use In-built Brush feature to add color splash effect</h1>
                                <p style={{ lineHeightStep: "200px", fontSize: "18px", wordSpacing: "3px", marginTop: "30px", color: "white" }}>Super easy to add color to part of B&W photos and get outstanding results.</p>
                                <div className='cards-btn'>
                                    <a href='https://imagecolorizer.com/blog/add-color-splash-effect.html'><button className='cards_button1'><h1 style={{ fontSize: "15px", fontWeight: "900", fontFamily: "Verdana, Geneva, Tahoma, sans-serif" }}>Learn How To Use It </h1> </button></a></div>

                            </div>
                            <div className='l-img'>
                                <img className='l-img' src='img/img4.png'></img>
                            </div>

                        </div>

                    </div>
                    <div className='l-maincontainer4'>
                        <h1 style={{marginTop:"100px",color:"white"}}>Highlights Features</h1>
                        <div className='grid-view3'>
                            {
                                content2.map((item1)=>(
                                    <Card1
                                    id={item1.id}
                                    tit={item1.title}
                                    img={item1.img}
                                    des={item1.des}
                                    ></Card1>
                                ))
                            }

                        </div>

                    </div>
                    <LastBanner></LastBanner>
                    <Footer></Footer>

                </div>
            </div>
        </div>
    )
}
