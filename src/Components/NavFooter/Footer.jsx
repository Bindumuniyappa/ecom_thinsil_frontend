import React from 'react'
import '../../assets/css/nav.css'

const Footer = () => {
    return (
        <>
            <div className='main_footer'>
                <div className="social">
                    <h2>Connect with Us</h2>
                    <p>FaceBook</p>
                    <p>Instagram</p>
                    <p>Whatsapp</p>
                </div>
                <div className="social">
                    <h2>Get to Know Us</h2>
                    <p>About Us</p>
                    <p>Careers</p>
                    <p>Press Release</p>
                    <p>Terms & Conditions</p>
                </div>
                <div className="social">
                    <h2>Let Us Help You</h2>
                    <p>Returns Centre</p>
                    <p>100% Purchase Protection</p>
                    <p>Help</p>
                </div>

            </div>
            {/* <hr className='hr' /> */}

            <p style={{ "textAlign": "center" }}> @ <span style={{ "fontFamily": "Alkatra,cursive" }}>Created by Bindushree</span></p>
        </>
    )
}

export default Footer