import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Cart from './Cart';
import Home from './Home';
import Products_Page from './Products_Page';
import Sign_In_Login from './Sign_In_Login';
import AddToCart from './AddToCart';
import Checkout from './Checkout';
import Navbar from '../Components/Navbar';
export const All_Routes = () => {
  return (
    <Routes>
      
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Sign_In_Login/>}/>
      <Route path="/products/:id" element={<Products_Page />} />
      <Route path ="/add_to_cart" element={<AddToCart/>}/>
      <Route path="/cart" element={<Cart />} />
      <Route path="/checkout" element={<Checkout/>}/>
    </Routes>
  );
};
