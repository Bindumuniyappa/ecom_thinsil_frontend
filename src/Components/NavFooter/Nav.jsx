import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import '../../assets/css/nav.css';
import '../../assets/css/responsive.css';
import MinNav from './MinNav';
import { useAuth } from '../../Context/Auth';
import { toast } from 'react-toastify'
import { useCart } from '../../Context/cart';
import { Badge } from 'antd/dist/antd';

const Nav = () => {
    const [menu, setMenu] = useState(false)

    const [auth, setAuth] = useAuth()
    const [cart] = useCart()

    const handleMenu = () => {
        setMenu(!menu)
    }

    const handleLogout = () => {
        setAuth({
            ...auth, user: null, token: ''
        })
        localStorage.removeItem('auth')
        alert("For Logging Out press OK")
        toast.success("Logout Successfully...")
    }
    return (
        <div className='main_heading'>
            <div className="head_nav top">

                <div className='nav_left' >
                    <img src="https://mir-s3-cdn-cf.behance.net/projects/404/877e53119900623.Y3JvcCwzMTk2LDI0OTksNzEsMA.png" alt="404" style={{"height":"80px"}} />
                </div>

                <div className='dropdown_nav' >
                    <i className="fa-solid fa-user" style={{"fontSize":"1.2rem"}}></i>
                    {!auth.user ? (
                        <>
                            <Link to='/login' style={{ "color": 'black', "cursor": "pointer" }}>Signin</Link>

                        </>) : (
                        <>
                            <li className=" dropdown">
                                <NavLink to='/' style={{ "color": 'black', "cursor": "pointer" }} >
                                    {auth?.user.name}
                                </NavLink>
                                <NavLink onClick={handleLogout} to='/login' style={{ "color": 'black', "cursor": "pointer" }}>Logout</NavLink>
                            </li>

                        </>
                    )}
                    <span style={{"margin":"0 0px 0 20px"}}><i className="fa-solid fa-magnifying-glass"></i></span>
                    <li>
                    <Badge count= {cart?.length} showZero >
                        <NavLink to='/cart'>
                            <span><i className="fa-solid fa-cart-shopping" style={{"margin":"0 15px 0 10px","fontSize":"1.2rem"}}></i></span>
                        </NavLink>
                    </Badge>
                    </li>
                </div>
            </div>
            <h1 className='nav_text'>iSHOP</h1>
            <div className="head_nav bottom">
                <div className='navbar'>
                    <ul className='naV'>
                        <h3><li><NavLink className={({ isActive }) => isActive ? "nav" : null} to="/">Home</NavLink></li></h3>

                        <h3><li><NavLink className={({ isActive }) => isActive ? "nav" : null} to="/Ipad">Ipad</NavLink></li></h3>

                        <h3><li><NavLink className={({ isActive }) => isActive ? "nav" : null} to="/laptop">Laptop</NavLink></li></h3>

                        <h3><li><NavLink className={({ isActive }) => isActive ? "nav" : null} to="/macbook">Macbook</NavLink></li></h3>

                        <h3><li><NavLink className={({ isActive }) => isActive ? "nav" : null} to="/Mobile">Mobile</NavLink></li></h3>

                        <h3><li><NavLink className={({ isActive }) => isActive ? "nav" : null} to="/Accessories">Accesories</NavLink></li></h3>
                    </ul>
                </div>
            </div>
            <div className='miniMenu'>
                <button onClick={handleMenu} id='minimenu' ><i className="fa-solid fa-bars"></i></button>
                <button className='btnback'> <Link to='/' style={{ "fontSize": "2rem" }}><i className="fa-solid fa-arrow-left"></i></Link></button>
                {menu && <MinNav />}
            </div>
        </div>
    )
}

export default Nav