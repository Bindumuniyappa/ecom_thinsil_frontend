import React, { useEffect, useState } from 'react'
import '../assets/css/home.css'
import '../assets/css/responsive.css';
import ToTop from './ToTop';
import { Link } from 'react-router-dom';
import axios from 'axios';
import ReactPaginate from 'react-paginate';

const Store = () => {
  const [storeData, setStoreData] = useState([])
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage]= useState(8)
  // const totalPages = 10;
  useEffect(() => {
    async function fetchdata() {
      let storeData = await axios.get(`http://localhost:3000/store/`)
      let data = await storeData.data
      setStoreData(data)
    }
    fetchdata()
  }, [])
  const lastPostIndex= currentPage * postsPerPage; //(2*10=20)
  const firstPostIndex= lastPostIndex - postsPerPage; //(20-10=10)
  const currentPosts=storeData.slice(firstPostIndex,lastPostIndex)
  // console.log(setPostsPerPage[0])
  
  return (
    <>
      <h1 className='text_OS'>Our Store
        <button ><Link to='/' style={{ "fontSize": "2rem" }} id='back'><i className="fa-solid fa-arrow-left"></i></Link></button></h1>
       
        <ReactPaginate className='pagination'
          pageCount={Math.ceil(storeData.length / postsPerPage)}
          pageRangeDisplayed={4}
          marginPagesDisplayed={1}
          onPageChange={({ selected }) => setCurrentPage(selected + 1)}forcePage={currentPage - 1}
        /> 

      <div className='product_container'>
        {currentPosts.length > 0 && currentPosts.map((item) => {
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
                  <h2 style={{ "color": "tomato" }}>₹ {item.price}   
                  <span style={{ "textDecoration": "line-through", "color": "gray", "fontSize": "14px" }}>₹{item.oPrice}</span></h2>
                </div>
              </div></Link>
          )
        })}
      </div>
      <ToTop />
    </>
  )
}

export default Store