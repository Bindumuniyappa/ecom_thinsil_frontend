import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useCart } from '../Context/cart'
import { toast } from 'react-toastify'

import '../assets/css/responsive.css';


const SinglePage = () => {
  const navigate = useNavigate()
  const { id } = useParams()

  const [unique, setUniquedata] = useState()
  const [cart , setCart] = useCart()

  useEffect(() => {
    async function uniqueData() {
      let recived = await axios.get(`http://localhost:3000/product/${id}`)
      let udata = recived.data
      setUniquedata(udata)
    }

    uniqueData()
  }, [id])

  console.log(unique && unique[0].catagory)
  return (
    <div>
      <button onClick={() => navigate(-1)} style={{ "fontSize": "1.4rem" }} id='goback'>Go Back</button>

      {unique && unique.map((item) => {
        return (
          <div style={{ "textAlign": "center" }} key={item._id} >
            <img src={item.image} alt="img not found" style={{ "width": "250px", "margin": "20px" }} />
            <h2> {item.name}</h2>
            <p> {item.catagory}</p>
            <h2 style={{ "color": "tomato" }}>₹{item.price}   <span style={{ "textDecoration": "line-through", "color": "gray", "fontSize": "14px" }}> ₹{item.oPrice}</span></h2>
            <img src={item.rating} width={100} alt="img not found" />
            <br />
            <button
              onClick={() => {
                setCart([...cart,item])
                localStorage.setItem('cart', JSON.stringify([...cart, item]))
                toast.success("Item Added to Cart")
              }}

               className='cart_btn'><h1> Add to card </h1></ button>
          </div>

        )
      })}
    </div>
  )
}

export default SinglePage