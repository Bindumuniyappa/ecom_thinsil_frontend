import React from 'react'
import '../App.css';


const ToTop = () => {
    const handleTop=()=>{
        window.scrollTo({top:0,behavior:'smooth'})
    }
  return (
    <div>
        <button onClick={handleTop} className='top_arrow'><i className="fa-solid fa-arrow-up"></i></button>
    </div>
  )
}

export default ToTop



