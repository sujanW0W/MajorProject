import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import SearchIcon from '@mui/icons-material/Search';
import ContactPageIcon from '@mui/icons-material/ContactPage';
import InfoIcon from '@mui/icons-material/Info';
import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';
import { useNavigate } from "react-router-dom";
import { UserContext } from "./UserContext";

const Header = () => {

    const navigator=useNavigate();
    const [sidebar, setsidebar]=useState(false)
    const {User, setUser }= useContext(UserContext)
    // console.log(User);

    // window.addEventListener("scroll", function(){
    //     const header= document.querySelector('.header')
    //     header.classList.toggle("active",window.screenY>200)
    // })

  
    

    const logOuthandler=()=>{

        const removeToken=localStorage.removeItem('token')
        navigator('/login')
        setUser(null)
        setUser(false)
        console.log(removeToken)
    }
    return (
    <header className="header">
        <div className="container flex">
            <div className="logo">
               <img src="img/logoColorizer.png" className="image" onClick={()=>{navigator('/')}}></img>

            </div >
            <div className="nav">
                <ul className={sidebar?"nav-links-bar":"nav-link"} onClick={()=>{setsidebar(false)}}>
                    <li><Link to='/'>Home</Link> </li>
                    <li><Link to='/learn'>Learn To Use</Link> </li>
                    <li><Link to='/about'>About</Link></li>
                    
                    <li className="icons" > 
                        <SearchIcon  className="HeaderIcon"/>
                        <ContactPageIcon className="HeaderIcon"/>
                         <InfoIcon className="HeaderIcon"/>
                    </li>
                </ul>
            </div>
            <button className="nvabar-items-icon" onClick={()=>{setsidebar(!sidebar)}}>{sidebar?<CloseIcon/>:<MenuIcon/>}</button>
          {User?<button className="btn" onClick={logOuthandler}>Logout</button>:<button className="btn" onClick={()=>{navigator('/login')}}>Login</button>}

            
        </div>
    </header>)
}

export default Header;