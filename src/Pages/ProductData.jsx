import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { useContext } from 'react'
import { Store } from '../Components/Api/ApiFile';
import '../assets/css/responsive.css';
import axios from 'axios'
import '../assets/css/product.css'
import ToTop from './ToTop';

const ProductData = () => {
    const Context = useContext(Store);
    const { id } = useParams()
    const [showData, setShowData] = useState()
    
    useEffect(() => {
        async function product_data() {
            let catlog = await axios.get(`http://localhost:3000/category/${id}`)
            let data1 = await catlog.data
            setShowData(data1)
        }
        product_data()
    }, [Context, id])
    // console.log(showData)
    
    const [isClicked, setIsClicked] = useState(false)

    const handleIsClick = () => {
        setIsClicked(!isClicked)
    }

    const containerClassName = isClicked ? 'containerStyle' : 'prod_div';

    return (
        <>
            <button onClick={handleIsClick} ><i className="fa-solid fa-bars" id='grid'></i></button>

            <div className={containerClassName} >
                {showData && showData.map((item) => {
                    return (
                        <Link to={`/product/${item.name}`} key={item.name} id='btn'>
                            <div className='key_div'>
                                <img src={item.image} alt="img not found" style={{ "width": "150px", "margin": "20px" }} />
                                <h2> {item.name}</h2>
                                <p> {item.catagory}</p>
                                <h2 style={{ "color": "tomato" }}> ₹{item.price}   <span style={{ "textDecoration": "line-through", "color": "gray", "fontSize": "14px" }}> ₹{item.oPrice}</span></h2>
                                <img src={item.rating} width={100} alt="img not found" />
                            </div>
                        </Link>
                    )
                })}
            </div>

            {containerClassName === 'containerStyle' && <ToTop />}
            <ToTop/>
        </>
    )
}

export default ProductData