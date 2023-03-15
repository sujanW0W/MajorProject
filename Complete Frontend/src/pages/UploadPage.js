import React, { useContext, useState } from 'react'
import Header from '../components/Header'
import './UploadPage.css'
import './Homepage.css'
import Card1 from '../components/Card1'
import videobg from './video/Image Colorizer Introduction _ Colorize Black and White Photos Online Automatically.mp4'
import { LastBanner } from '../components/LastBanner'
import Footer from '../components/Footer'
import Background2 from "../Images/backtry.jpeg"
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { PathContext } from '../components/UserContext'




export const UploadPage = () => {
 const {imagePath, setimagePath}=useContext(PathContext);
  //const [imagePath1, setimagePath1]=useState('');
  const navigate= useNavigate();

  const about = [
    {
      id: "1",
      img: "img/5.png",
      tit: "AI Technology",
      des: "Based on the AI technology, we train the system to colourize the black and white photos in only a few seconds."
    },
    {
      id: "2",
      img: "img/6.png",
      tit: "Colourize Old Photos",
      des: "No PhotoShop skills required to colourize black and white photos. Upload your old photos and leave the pixel job to our picture colorizer."
    },
    {
      id: "3",
      img: "img/7.png",
      tit: "Privacy Protect",
      des: "All uploaded items will be cleared every 24 hours. No photos will be stored and used for other purposes without your permission."
    },
  ]

  const uploadfile = () => {
    document.getElementById("select_file").click();
  }

  const [file, setFile] = useState(null); 
  const [fileDataURL, setFileDataURL] = useState(null);
  const [showdiv,setDiv]=useState(false);
  //const[fileData,setfileData]=useState(null);


  const changeHandler = (e) => {
    const file = e.target.files[0];
    setFile(file)
    setDiv(true)

    // const form = new FormData();
    // form.append('testImage',file)
    // setfileData(form)
    
    console.log(file) //yesma files ko sabai detail haru aaucha like format, size, name etc...
    
    let fileReader=false;
    fileReader = new FileReader(); //FileReader is an API that uses FILE object to read the selected user's files.
    fileReader.onload = (e) => {
      const { result } = e.target;

      setFileDataURL(result)
    }
    fileReader.readAsDataURL(file);
  
  }

  const uploadhandler = async ()=>{
    // fetch('http://localhost:7600/api/v1/images',{
    //   method:"POST",
    //   headers:{
    //     'Content-Type':'multipart/form-data',
    //     'authorization':`Bearer ${localStorage.getItem('token')}`
    //   },
    //   body:JSON.stringify({
    //     image:file,
    //     name: file.name
    //   })
    // }).then((resp)=>resp.json()).then((data)=>{
    //   console.log("Response", data)
    // })
       const resp=await axios.post('http://localhost:7600/api/v1/images',
       {
        testImage:file,
        name:file.name
      }
       ,
       {
        headers:{
          'Content-type':'multipart/form-data',
          Authorization:`Bearer ${localStorage.getItem('token')}`
        }
       }
       )
       
       console.log(resp)
       setimagePath(resp.data.filePath);

  }

  const startRestore=()=>{
   
    navigate('/restoreImage')
    console.log(imagePath)

  }


 
  return (
    <div style={{ background: "black" }}>
      <Header></Header>
      <div className='sub-container1' >
        <div className='image-back1' style={{ backgroundImage: `url(${Background2})` }}>
          <h3>COLORIZE! ONLINE</h3>
          <div className='title'>
            <h1>Best Picture Colorizer that Adds Color to Black and White Old Pictures. No Account Needed!</h1></div>
          <div className='upload-sec' >
            <div className='uploadimage-container'>
              <div className="inner-upload-container">
                <button className='upload-btn' onClick={uploadfile}> <img className="inner-upload-container" src='img/1.png' alt=''></img></button>
                <input id="select_file" onChange={changeHandler} type="file" className='input-file' name="testImage" ></input>
              </div>

              <div><h2 style={{ color: "white", marginTop: '20px' }}>Click or Drop Files</h2></div>
              <div><p style={{ color: "white" }}>Less than 5MB, 3000×3000, Support .jpg .jpeg .png.</p></div>
            </div>
            
            {showdiv?<div className='show_content' >
              
                <img className='show_imgcontent'  src={fileDataURL} alt=''></img>
                <div className='btn-content'>
                <button className='btn-innercontent' onClick={startRestore}>Start</button>
                <button className='btn-innercontent' onClick={uploadhandler}>Upload</button>
                </div>
                
            </div>:<div></div>}
          </div>
        </div>
      </div>
      <div className='sub-container21'>
        <div className='sub-text1'>
          <img className='sub-text1' src='img/bell.png' alt=''></img>
        </div>
        <div className='title'>
          <h1 style={{ fontSize: "1vw" }}>Subscribe to our services to colorize large B&W pictures upto 6000px*6000px
            Now you can edit photo online before uploading for AI processing</h1>
        </div>
        <div className='grid-view1'>
          {
            about.map((item,i) => (
              <Card1
                key={i} 
                id={item.id}
                img={item.img}
                tit={item.tit}
                des={item.des}
              ></Card1>
            ))
          }

        </div>

      </div>
      <div className='sub-container3'>
        <div className='Video'>
          <video src={videobg} autoPlay loop muted style={{ width: "100%", height: "95%", borderRadius: "25px" }}></video>
        </div>
      </div>
      <LastBanner></LastBanner>
      <Footer></Footer>

    </div>
  )
}
