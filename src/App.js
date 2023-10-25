import './App.css';
import React from 'react';
import { BrowserRouter,Route, Routes } from 'react-router-dom';
import Nav from './Components/NavFooter/Nav';
import Signup from './Pages/Auth/Signup';
import Login from './Pages/Auth/Login';
import Footer from './Components/NavFooter/Footer';
import GoToTop from './Pages/GoToTop';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Home from './Pages/Home';
import ProductData from './Pages/ProductData';
import { Store } from './Components/Api/ApiFile';
import SinglePage from './Pages/SinglePage';
import CartPage from './Pages/CartPage';
import Payment from './Pages/Payment';

function App() {
  
  return (
    <div className="App">
      <BrowserRouter>
      <GoToTop/>
      <Nav/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/:id' element={<ProductData/>}/>
        <Route path='/store' element={<Store/>}/>
        <Route path='/product/:id' element={<SinglePage/>}/>
        <Route path='/cart' element={<CartPage/>} />
        <Route path='/payment' element={<Payment/>} />
        <Route path='/signin' element={<Signup/>} />
        <Route path='/login' element={<Login/>} />
      </Routes>
      </BrowserRouter>
      <ToastContainer />
      <Footer/>
    </div>
  );
}

export default App;
