import React, { useEffect, useState } from 'react'
import img1 from '../../assets/images/img1.jpg'
import img2 from '../../assets/images/img2.jpg'
import img3 from '../../assets/images/img3.jpg'
import img4 from '../../assets/images/img4.jpg'
import img5 from '../../assets/images/img5.jpg'
import '../../assets/css/nav.css';

const Slider = () => {
  const [img, setImg] = useState(0);
  const [allImg] = useState([img1, img2, img3, img4, img5])

  useEffect(() => {
    setInterval(() => {
      setImg(img => img < 4 ? img + 1 : 0)
    }, 4000)

  }, [])
  return (
    <>
      <img className='imageSlider' src={allImg[img]} alt='Error to load' />
    </>
  )



}

export default Slider