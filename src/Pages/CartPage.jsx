import React from 'react'
import { useCart } from '../Context/cart'
import { useAuth } from '../Context/Auth'
import { useNavigate } from 'react-router-dom'
import '../assets/css/cart.css'
import '../assets/css/responsive.css'
import ToTop from './ToTop'

const CartPage = () => {
    const [cart, setCart] = useCart()
    const [auth] = useAuth()
    const navigate = useNavigate()

    //total price
    const totalPrice = () => {
        try {
            let total = 0;
            cart && cart.forEach((item) => {
                total = total + Number(item.price)
            })
            return total.toLocaleString("en-IN", {
                style: "currency",
                currency: "INR"
            })
        } catch (error) {
            console.log(error)
        }
    }

    //delete item
    const removeCartItem = (itemid) => {
        try {
            let mycart = [...cart]
            let index = mycart.findIndex((product) => product._id === itemid)
            mycart.splice(index, 1)
            setCart(mycart)
            localStorage.setItem('cart', JSON.stringify(mycart))
        } catch (error) {
            console.log(error)
        }
    }

    //buy item
    const handleBuyItem = () => {
        if (!auth.user) {
            alert('First Sign-In')
            navigate('/login')
        }
        if (auth.token && auth.user.name) {
            prompt("Address....")
            navigate('/payment')
        }
    }
    return (
        <div>
            <div className="container">
                <div className="row">
                    <h1 className='text_cart'>
                        {`Hello ${auth?.token && auth?.user?.name}`}
                    </h1>
                    <h4 className='text_cart'>
                        {cart?.length > 0
                            ? `You Have ${cart.length} items in your cart ${auth?.token ? "" : "Please login to checkout"}`
                            : "Your Cart Is Empty!"}
                    </h4>
                </div>

                <div className="flex row2">

                    <div className="row">
                        {
                            cart && cart.map((item, index) => {
                                return (
                                    <div className=' flex row3' key={index}>
                                        <img src={item.image} alt="img not found" style={{ "width": "150px", "margin": "20px" }} />
                                        <div >
                                            <h2> {item.name}</h2>
                                            <p> {item.catagory}</p>
                                            <h2 style={{ "color": "tomato" }}> ₹{item.price}   <span style={{ "textDecoration": "line-through", "color": "gray", "fontSize": "14px" }}>₹{item.oPrice}</span></h2>
                                            <img src={item.rating} width={100} alt="img not found" />
                                            <br />
                                            <button className='remove_btn' onClick={() => removeCartItem(item._id)}>Remove</button>

                                        </div>
                                    </div>
                                )
                            })}
                    </div>

                    <div className="cart_summary">
                        <h2>Cart Summary</h2>
                        <p>Total | Checkout | Payment</p>
                        <hr />
                        <h3>Total : {totalPrice()}</h3>
                        <button className='buy_btn' onClick={handleBuyItem} >Buy Now</button>
                    </div>
                </div>
            </div>
            <ToTop />
        </div>
    )
}

export default CartPage