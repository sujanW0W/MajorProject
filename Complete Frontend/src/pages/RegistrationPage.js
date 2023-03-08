
import React, { useEffect, useState } from 'react'
import './LoginPage.css'
import { Link, useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import { schema } from '../components/validationSchema';



const initialValues = {
    fullname: '',
    username: '',
    email: '',
    password: '',
    phone: '',
}

export const RegistrationPage = () => {
    const [gender1, setgender] = useState("")
    const [userDetail, setuserDetail] = useState("")
    const navigate = useNavigate()

 
    let array = ''; // You cannot assign values to const variables once it is declared. So dont use const ....
    const { errors, handleBlur, handleChange, handleSubmit, values } = useFormik({
        initialValues: initialValues,
        validationSchema: schema,
        onSubmit:() => {

            
            setuserDetail(values);
            array = {
                ...values,
                gender: gender1
            }
            postData();
            navigate('/login')
          

        }
    })
    const postData= async ()=>{
        const response = await fetch('http://localhost:3500/api_register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json' //it is necessary to specify the type like binary, URL, JSON etc
            },
            body: JSON.stringify(
               {
                   fullname,
                   username,
                   email,
                   password,
                   phone
               
               }
            )
        })
        const data = await response.json();
        if(data.status==='ok')
        {
            navigate=navigate('login')
        }
        console.log(data)

    }

    const clickhandler = (event) => {
        setgender(event.target.value)
    }
     const{fullname, username,email,password,phone}=values




    return (
        <div>
            <div className='lomain-container'>
                <div className='losubmain-container'>
                    <img src='images/logo.png'></img>
                </div>
                <h1 style={{ fontSize: "4vw", color: "white", fontWeight: "700", marginTop: "30px" }}>Registration Form</h1>
                {/* <p style={{ color: "white", fontSize: "20px", wordSpacing: "2px", padding: "7px" }}>Sign up here to get started.</p> */}

                <div className="reg-main">
                    <form className='form_feild' onSubmit={handleSubmit} >
                        <div className='text_feild'>
                            <label >Fullname</label>
                            <span></span>
                            <input type="text" name='fullname' value={values.fullname} onChange={handleChange} onBlur={handleBlur}></input>
                            {<p style={{ fontSize: '10px', marginBottom: '2px', color: '#961d1d' }}>{errors.fullname}</p>}

                        </div>
                        <div className='text_feild'>
                            <label >Username </label>
                            <span></span>
                            <input type="text" name='username' value={values.username} onChange={handleChange} onBlur={handleBlur}></input>
                            {<p style={{ fontSize: '10px', marginBottom: '2px', color: '#961d1d' }}>{errors.username} </p>}
                        </div>
                        <div className='text_feild'>
                            <label >Email</label>
                            <span></span>
                            <input type="email" name="email" value={values.email} onChange={handleChange} onBlur={handleBlur} ></input>
                            {<p style={{ fontSize: '10px', marginBottom: '2px', color: '#961d1d' }}>{errors.email}</p>}
                        </div>
                        <div className='text_feild'>
                            <label>Password</label>
                            <span></span>
                            <input type="password" name="password" value={values.password} onChange={handleChange} onBlur={handleBlur} />
                            {<p style={{ fontSize: '10px', marginBottom: '2px', color: '#961d1d' }}>{errors.password} </p>}
                        </div>
                        <div className='text_feild'>
                            <label>Phone Number</label>
                            <span></span>
                            <input type="tel" name="phone" value={values.phone} onChange={handleChange} onBlur={handleBlur} />
                            {<p style={{ fontSize: '10px', marginBottom: '2px', color: '#961d1d' }}>{errors.phone}</p>}
                        </div>
                        <div className='radio-btn' >
                            <div className='head'>Gender</div>
                            <div className='radio-flex'>
                                <input type='radio' id='male' name='gender' value='male' onClick={clickhandler} ></input> <label htmlFor='male'>Male</label>
                                <input type='radio' id='female' name='gender' value="female" onClick={clickhandler} ></input> <label htmlFor='female' >Female</label>
                                <input type='radio' id='others' name='gender' value='others' onClick={clickhandler} ></input> <label htmlFor='others'>Others</label>
                            </div>
                        </div>
                        <button className="lo-sub" style={{ marginTop: "10px", marginBottom: '10px' }} type='submit'>Registration</button>

                    </form>

                </div>
                <p style={{ color: "white", marginTop: '5px' }}>Already have an account?<Link to={'/login'}>Sign In</Link></p>
            </div>


        </div>
    )
}
