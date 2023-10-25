import React from 'react'
import { Link } from 'react-router-dom'
import '../../assets/css/nav.css';
import '../../assets/css/responsive.css';

const MinNav = () => {
  
  return (
    <div>
      <div className="mini">
                <div style={{"background": "transparent","lineHeight":"35px" , "width": "100%", "textAlign": "center"}} >
                    <ul >
                        <h3><li><Link to="/">Home</Link></li></h3>
                    </ul>
                    <ul>
                        <h3><li><Link to="/Ipad">Ipad</Link></li></h3>
                    </ul>
                    <ul>
                        <h3><li><Link to="/laptop">Laptop</Link></li></h3>
                    </ul>
                    <ul>
                        <h3><li><Link to="/macbook">Macbook</Link></li></h3>
                    </ul>
                    <ul>
                        <h3><li><Link to="/Mobile">Mobile</Link></li></h3>
                    </ul>
                    <ul>
                        <h3><li><Link to="/Accessories">Accesories</Link></li></h3>
                    </ul>
                </div>
            </div>
    </div>
  )
}

export default MinNav;