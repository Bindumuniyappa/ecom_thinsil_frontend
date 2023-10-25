import axios from 'axios'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

const Signup = () => {
  const navigate = useNavigate()

  const [logindata, setlogindata] = useState({
    name: null,
    email: null,
    password: null,
  })
  async function signup() {
    try {
      let match = await axios.post(`http://localhost:3000/signup`, logindata)
      toast.success(match.data.message)
      navigate('/login')
    }
    catch (error) {
      toast.error("Kindly fill the repected field")
    }
  }

  function handleChange(e) {
    setlogindata({ ...logindata, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

  }

  return (
    <div className='flex sign_box'>
      <div>
        <img src="https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,f_auto,q_auto:eco,dpr_1/ptkwcmcsv58i4ambgmwo" alt="404 Error" id='imgs' />
      </div>
      <div className='flex signin'>
        <h1>Creat Account</h1>
        <form onSubmit={handleSubmit}>
          <input type="text" name="name" placeholder="Name" required autoComplete='true' onChange={handleChange} />
          <br />
          <input type="email" name="email" placeholder="Email" required autoComplete='true' onChange={handleChange} />
          <br />
          <input
            type="password"
            name="password"
            placeholder="Password"
            required
            onChange={handleChange}
          />
          <br />
          <button type="submit" className='subin sign_btn' onClick={signup}>
            Continue
          </button>
          <hr className='hori' />
          <Link to='/login'>
            <p style={{ "color": "black" }}>Existing User ?</p><br />
            <span className='sign_log'> Login</span></Link>
        </form>
      </div>
    </div>
  )
}

export default Signup
