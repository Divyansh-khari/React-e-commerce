import React, {useState} from 'react'
import Home from './pages/Home'
import Cart from './pages/Cart'
import Navbar from './components/Navbar'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import ProductContext from './context/ProductContext'

const App = () => {
const [products, setProducts]= useState([]);
const [cart, setCart]= useState([]);

const addToCart=(product)=>{
setCart([...cart, product]);
alert("Product added to Cart!!");
console.log(cart);
};

const removeFromCart = (product)=>{
  const newcart= cart.filter((item)=> item.id != product.id);
  setCart(newcart);
  alert("Product removed !!")
};

  return (
    <>
    <ProductContext.Provider value= {{products, setProducts, cart, addToCart, removeFromCart}}>
    <BrowserRouter>
    <h1 className="text-3xl font-bold underline">
      <Navbar />
    </h1>
    <Routes>
      <Route path= "/" element= {<Home />}/>
      <Route path="/cart" element= {<Cart/>}/>
    </Routes>
    </BrowserRouter>
    </ProductContext.Provider>
    </>
  )
}

export default App
