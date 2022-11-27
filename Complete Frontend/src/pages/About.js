import React from 'react'
import Header from '../components/Header'
import './LearnToUse.css'
import './About.css'
import bg2 from '../Images/about11.jpg'
import { Rating } from '@mui/material'
import { Card2 } from '../components/Card2'
import { color } from '@mui/system'
import Card1 from '../components/Card1'
import { LastBanner } from '../components/LastBanner'
import Footer from '../components/Footer'

export const About = () => {
    const variable = [
        {
            img: 'img/16.png',
            bg: '#68d484',
            tit: 'Colorize',
            des: 'Based on AI technology, you can colorize the black and white photos on your mobile phones.'
        },
        {
            img: 'img/17.png',
            bg: '#463af0',
            tit: 'Enhance',
            des: 'Colorize! is a great app to unblur and sharpen your old blurry pictures. Make old photo crisper!'
        },
        {
            img: 'img/18.png',
            bg: '#f74b4a',
            tit: 'Re-Touch',
            des: 'Colorize! app also includes powerful retouching technology to detect your face and retouch for better looking.'
        }

    ];
    const content2 = [
        {
            id: '1',
            img: "img/8.png",
            title: "AI Algorithm",
            des: "We are training the AI system to colourize black and white photos. *Colorization is based online."
        },
        {
            id: '1',
            img: "img/9.png",
            title: "Fully Featured",
            des: "All-in-one features. Make everything simple for you to process photo colorization and enhancement."
        },
        {
            id: '1',
            img: "img/10.png",
            title: "Totally Automatic",
            des: "Apply the most correct color selection to objects based on the boundaries and surfaces."
        },
        {
            id: '1',
            img: "img/11.png",
            title: "Free to Start",
            des: "Start using it without any limitations. Only a little watermark when exporting the image."
        },
        {
            id: '1',
            img: "img/12.png",
            title: "User-Friendly Surface",
            des: "The interface is carefully designed. No learning curves and you can use it immediately."
        },
        {
            id: '1',
            img: "img/13.png",
            title: "Free Upgrade",
            des: "We provide free upgrade for lifetime."
        },
    ]

    return (
        <div>
            <div className='upmain-container' style={{ background: `url(${bg2})` }}>
                <div className='upmain'>
                    <Header></Header>
                    <div className='ab-container'>
                        <h1 style={{ color: 'white', fontSize: '3.5vw', fontWeight: "900", marginTop: "120px", color: "white" }}><b>Colorizer!!</b>
                        </h1>
                        <p style={{ width: "50%", height: "100px", lineHeightStep: "500px", fontSize: "18px", wordSpacing: "3px", marginTop: "30px", color: "white", textAlign: "center" }}>Looking for the best picture colorizer application to restore old photo on phones? Try our online Application  - "Colorize!" and colourize your old black and white pictures instantly. No Photoshop skills required and it is easiest way to neutralize the color for beginners. Download restore and enhanced and use it for 100% free!
                        </p>
                        <Rating name="read-only" value={5} readOnly style={{ marginTop: "20px", }} />

                    </div>
                </div>
            </div>

            <div className='ab-innerContainer1' >
                <p style={{ color: 'red', fontSize: '15px' }}> MAIN FEATURES</p>
                <h1 style={{ width: '50%', textAlign: 'center' }}> We provide great features for you to restore old photos </h1>
                <div className='grid-view25'>
                    {
                        variable.map((item1) => (
                            <Card2
                                img={item1.img}
                                bg={item1.bg}
                                tit={item1.tit}
                                des={item1.des}
                            ></Card2>

                        ))
                    }

                </div>
            </div>
            <div className='ab-innerContainer2'>
                <h1><b> Restore old photos with 3 steps</b></h1>
                <p style={{ width: '40%', textAlign: 'center' }}> With our powerful AI app, you can restore and bring new life to your old black and white pictures.</p>
                <div className='ab-inner'>
                    <div style={{ width: '400px', height: '600px' }}>
                        <img style={{ maxWidth: '100%', maxHeight: '100%' }} src='img/19.png'></img>
                    </div>
                    <div className='ab-innerDiv'>
                        <div className='ab-subinnerDiv'>
                            <div className='seq-img'><img className='seq-img' src='img/20.png'></img></div>
                            <div>
                                <h1 style={{ fontSize: '22px', fontWeight: '900' }}>Install Colorize! app and upload</h1>
                                <p style={{ color: 'rgb(196, 196, 196)' }}>Search "Colorize!" in any webprotal to find the online application. Add one old picture you love.</p>
                            </div>
                        </div>
                        <div className='ab-subinnerDiv'>
                            <div className='seq-img'><img className='seq-img' src='img/21.png'></img></div>
                            <div>
                                <h1 style={{ fontSize: '22px' }}>Use Powerful Features</h1>
                                <p style={{ color: 'rgb(196, 196, 196)' }}>We provide three main features. Colorize, Enhance, Retouch. Choose the best one for perfect end result.</p>
                            </div>
                        </div>
                        <div className='ab-subinnerDiv'>
                            <div className='seq-img'><img className='seq-img' src='img/22.png'></img></div>
                            <div>
                                <h1 style={{ fontSize: '22px' }}>Download in second</h1>
                                <p style={{ color: ' rgb(196, 196, 196)' }}>After uploading, your processed picture will be ready for downloading. Save it to your photo album.</p>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
            <div className='l-maincontainer4'>
                <h1 style={{ marginTop: "100px", color: "white" }}>Highlights Features</h1>
                <div className='grid-view3'>
                    {

                        content2.map((item1) => (
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
    )
}
