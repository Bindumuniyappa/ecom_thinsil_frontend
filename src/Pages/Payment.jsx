import React, { useEffect, useState } from 'react';
import DropIn from "braintree-web-drop-in-react";
import axios from 'axios';
import { useAuth } from '../Context/Auth';
import '../assets/css/cart.css';
import '../assets/css/responsive.css';
import { useCart } from '../Context/cart';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify'



const Payment = () => {
    const [clientToken, setClientToken] = useState('');
    const [instance, setInstance] = useState(null);
    const [auth] = useAuth();
    const [cart, setCart] = useCart()
    const navigate = useNavigate()

    // Get payment gateway token
    const getToken = async () => {
        try {
            const { data } = await axios.get('http://localhost:3000/braintree/token');
            setClientToken(data?.clientToken);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getToken();
    }, [auth?.token]);

    // Handle payments
    const handlePayment = async () => {
        if (instance) {
            try {
                const { nonce } = await instance.requestPaymentMethod();
                // Send the nonce to your server for further processing
                // console.log(nonce)
                // console.log(cart)

                let arr = []
                cart && cart.forEach((item) => {
                    arr.push(item._id)
                })

                 await axios.post('/braintree/payment', {
                    product: arr,
                    payment: nonce,
                    buyers: auth.user._id
                })
                // console.log(data)
                localStorage.removeItem("cart")
                setCart([])
                alert("payment Completed")
                toast.success('Payment Completed Sucessfully')
                navigate('/')

            } catch (error) {
                console.log(error);
            }
        }
    };

    return (
        <>
            <button onClick={() => navigate(-1)} style={{ "fontSize": "1.4rem" }} id='goback' className='goback_btn'>Go Back</button>
            <div className='payment'>
                {
                    !clientToken || !cart?.length ? ("") : (
                        <>
                            {clientToken && (
                                <DropIn
                                    options={{
                                        authorization: clientToken,
                                        paypal: {
                                            flow: 'vault',
                                        },
                                    }}
                                    onInstance={instance => setInstance(instance)}
                                />
                            )}
                            <button className='payment_btn' onClick={handlePayment} disabled={!instance}>
                                Make Payment
                            </button>
                        </>
                    )
                }
            </div>
        </>
    );
};

export default Payment;
