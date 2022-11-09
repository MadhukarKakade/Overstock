import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Cart from '../Pages/Cart';
import Home from '../Pages/Home';
import ProductsPage from '../Pages/ProductsPage';
import Sign_In_Login from './Sign_In_Login';
import AddToCart from './AddToCart';
import Checkout from './Checkout';
export const All_Routes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Sign_In_Login/>}/>
      <Route path="/products" element={<ProductsPage />} />
      <Route path ="/add_to_cart" element={<AddToCart/>}/>
      <Route path="/cart" element={<Cart />} />
      <Route path="/checkout" element={<Checkout/>}/>
    </Routes>
  );
};
