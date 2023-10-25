import React, { useState } from 'react'
import "../../assets/css/signin.css"
import "../../assets/css/responsive.css"
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import axios from 'axios'
import { useAuth } from '../../Context/Auth';

const Login = () => {
    const navigate = useNavigate()
   
    const [logindata, setLogindata] = useState({ email: "", password: "" })
    
    const [auth,setAuth]=useAuth()
    
    async function login() {
        try {
            let axioxlogin = await axios.post(`http://localhost:3000/login`, logindata)
            // console.log(logindata)
            toast.success(axioxlogin.data.message)
            
            setAuth({
                ...auth,
                user:axioxlogin.data.user,
                token:axioxlogin.data.token
            })
           
            localStorage.setItem('auth',JSON.stringify(axioxlogin.data))
            navigate('/')
        }
        catch (error) {
           
            toast.error("Kindly fill the repected field Or Checking details are enter correctly..")
        }

    }
    function onChange(e) {
        setLogindata({ ...logindata, [e.target.name]: e.target.value })
    }
    return (
        <>
            <button ><Link to='/' style={{ "fontSize": "2rem", "marginRight": "0" }} id='back'><i className="fa-solid fa-arrow-left"></i></Link></button>
            <div className='flex sign_box'>
                <div>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7JHhuRZwyiRBXKE27R26aO_ACe_ZGnPKoKQ&usqp=CAU" alt="404Error" id='imgs' />
                </div>
                <div className='flex signin'>
                    <h1>Login</h1>
                    <div>
                        <input type="email" name='email' id='input_email' required placeholder='Email' onChange={onChange} />
                        <input type="password" name='password' id='input_password'  placeholder='Password' onChange={onChange} /><br />
                        <input type="submit" value='Continue' className='subin sign_btn' onClick={login} />
                        <hr className='hori' />

                        <p>New to  iSHOP</p><br />
                        <Link to='/signin' className='login'>Creat your iShop account </Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login