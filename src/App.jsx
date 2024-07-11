import React, {useState} from 'react'
import Home from './pages/Home'
import Cart from './pages/Cart'
import Navbar from './components/Navbar'
import {BrowserRouter, Routes, Route} from "react-router-dom"

const App = () => {
  const [products, setProducts]= useState([]);

  return (
    <>
    
    <BrowserRouter>
    <h1 className="text-3xl font-bold underline">
      <Navbar setProducts= {setProducts}/>
    </h1>
    <Routes>
      <Route path= "/" element= {<Home products= {products} setProducts= {setProducts}/>}/>
      <Route path="/cart" element= {<Cart/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
