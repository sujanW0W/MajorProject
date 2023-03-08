

import { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { UserContext} from '../components/UserContext';



import './LoginPage.css';
const LoginPage = () => {

    const navigate = useNavigate();

    const { User, setUser, } = useContext(UserContext)
    const [newUsername, setUsername] = useState('');
    const [newPassword, setPassword] = useState('');

    const getApi=async()=>{
        const response= await fetch('http://localhost:3500/api_login',{
            method:"POST",
            headers:{
                "Content-Type":'application/json',
            },
            body:JSON.stringify({
                newUsername,
                newPassword
            })
        })
        const result= await response.json();
        if(result.user){
            alert("login sucessful")
            // window.location.href='/dashboard'
            navigate('/dashboard')

        }else{
            alert('Login unsuccessful, Try again !!')
        }
    }

    const getAdminApi=async()=>{
        const response= await fetch('http://localhost:3500/api_login',{
            method:"POST",
            headers:{
                "Content-Type":'application/json',
            },
            body:JSON.stringify({
                newUsername,
                newPassword
            })
        })
        const result= await response.json();
        if(result.user){
            alert("login sucessful")
            // window.location.href='/dashboard'
            navigate('/Admin')

        }else{
            alert('Login unsuccessful, Try again !!')
        }
    }
    


    const takevalue = () => {
        return (
            {
                username: newUsername,
                password: newPassword

            }
        )

    }

    const titilechanger = (event) => {
        setUsername(event.target.value)
    }

    const passwordchanger = (event) => {
        setPassword(event.target.value)
    }


    const submithandler = async (event) => {

        event.preventDefault()
        const Datas = takevalue();
        setUser(Datas)
        setUser(true)
        getApi();
        console.log(Datas);
        //navigate('/dashboard')
        setPassword('')
        setUsername("")
        

    }
    const adminsubmithandler = async (event) => {

        event.preventDefault()
        const Datas = takevalue();
        setUser(Datas)
        setUser(true);
        getAdminApi();
        console.log(Datas);
        // navigate('/admin')
        setPassword('')
        setUsername("")
        

    }
    console.log(User)
   


    return (
        <div>
            <div className='lomain-container'>
                <div className='losubmain-container'>
                    <img src='images/logo.png'></img>
                </div>
                <h1 style={{fontSize:"4vw", color:"white",fontWeight:"700", marginTop:"100px"}}>Login</h1>
                <p style={{color:"white",fontSize:"20px", wordSpacing:"2px", padding:"7px"}}>Sign in here to get started.</p>

                <div className="lo-main">
                    <form className='form_feild' onSubmit={submithandler}>
                        <div className='text_feild'>
                            <label >Username</label>
                            <span></span>
                            <input type="text" onChange={titilechanger} value={newUsername}></input>

                        </div>
                        <div className='text_feild'>
                            <label>Password</label>
                            <span></span>
                            <input type="password" onChange={passwordchanger} value={newPassword} />
                        </div>
                        <div className='pass'></div>
                         <button className="lo-sub" onClick={submithandler} type='submit'>Sign In</button>
                         <button className="lo-sub"  onClick={adminsubmithandler} type='submit'>Sign in as Admin</button>

                    </form>

                </div>
                <p style={{color:"white", marginTop:"400px"}}>Don't have an account? <Link to={'/registration'}>Create an account</Link></p>
            </div>
        </div>


    )
}

export default LoginPage;
