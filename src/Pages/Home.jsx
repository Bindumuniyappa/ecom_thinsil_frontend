import React, { useEffect, useState } from 'react'
import Slider from '../Components/Api/Slider'
import '../assets/css/home.css'
import '../assets/css/responsive.css';
import { Link } from 'react-router-dom';
import ToTop from './ToTop'
import axios from 'axios';

const Home = () => {
  const [storeData, setStoreData] = useState()
  
  useEffect(() => {
    async function fetchdata() {
      let storeData = await axios.get(`http://localhost:3000/store/`)
      let data = await storeData.data
      setStoreData(data)
    }
    fetchdata()
  }, [])

  return (
    <div>
      <Slider />
      <section className='section'>
        <h1 className='text_bs'>Best Seller</h1>
        <div className='product_container'>
          {storeData && storeData.slice(0, 8).map((item) => {
            return (
              <Link to={`/product/${item.name}`} key={item.name}>
                <div className="card">
                <div className='flex_box'>
                  <div className='card_top'>
                    <img src={item.image} alt="404 Error" className='home_img' />
                  </div>
                  <h2>{item.name}</h2>
                  <img src="https://t4.ftcdn.net/jpg/02/74/86/39/360_F_274863915_4JnfDXwTaTsjg5w5e7keElOipBswjAte.jpg" alt="" style={{ "height": "50px", "width": "auto" }} />
                  <h4 className='deal'>Deal of the Day</h4>
                  <h2 style={{ "color": "tomato" }}> ₹{item.price}   <span style={{ "textDecoration": "line-through", "color": "gray", "fontSize": "14px" }}> ₹{item.oPrice}</span></h2>
                </div>
              </div></Link>
            )
          })}
        </div>
      </section>


      <h1 className='text_bs'><Link to='/store' style={{ "color": "black", "cursor": "pointer" }}>Load More</Link></h1>

      <hr className='hr' />

      <div className='OurBenifit'>
        <div className="benifit">
          <i className="fa-solid fa-truck-fast fa-xl" style={{ "color": "rgb(255, 123, 123)" }} id='truck'></i>
          <h3>Free Shipping</h3>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt consequatur earum inventore incidunt dolorem repudiandae dolore culpa nostrum nobis neque.</p>
        </div>
        <div className="benifit">
          <i className="fa-solid fa-sack-dollar fa-xl" style={{ "color": "rgb(255, 123, 123)" }} id='truck'></i>
          <h3>100% Refund</h3>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt consequatur earum inventore incidunt dolorem repudiandae dolore culpa nostrum nobis neque.</p>
        </div>
        <div className="benifit">
          <i className="fa-solid fa-handshake-angle fa-xl" style={{ "color": "rgb(255, 123, 123)" }} id='truck'></i>
          <h3>Support 24/7</h3>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt consequatur earum inventore incidunt dolorem repudiandae dolore culpa nostrum nobis neque.</p>
        </div>
      </div>
      <ToTop />
    </div>
  )
}

export default Home