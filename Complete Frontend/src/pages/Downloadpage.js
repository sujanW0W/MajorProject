import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'

const Downloadpage = () => {
  return (
    <div>
        <Header></Header>
        <div>
            <div style={{textAlign:"center"}}><h1 style={{color:'white'}}>Image is ready to download</h1></div>
            <div style={{width:'100%',height:'500px', display:'flex',justifyContent:'center'}}>
                <img style={{maxHeight:'500px',maxWidth:'500px', borderRadius:'10px'}} src='img/mybaby.jpeg'></img>
            </div>
            <div style={{width:'100%',display:'flex', justifyContent:'center', padding:'30px'}}>
                <button style={{height:'45px',width:'200px',background:'blue', border:"none",color:'white', borderRadius:'5px'}}>Download Image</button>
            </div>
           
        </div>
        <Footer></Footer>
    </div>

  )
}

export default Downloadpage