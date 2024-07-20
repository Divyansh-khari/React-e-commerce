import React, {useContext} from 'react'
import ProductContext from '../context/ProductContext'
import {FadeLoader} from 'react-spinners'

const Cart = () => {
  const {cart, removeFromCart}= useContext(ProductContext);
  return <div>
    <div className='grid grid-cols-3 lg: grid-cols-3 gap-10 justify-center items-center'>
    { cart.length==""? (
      <h1 className='font-bold lg:w-[80vw] text-center w'>Nothing to Show. No items added to Cart</h1>
      ):(
      cart.map((product)=>{
        return (
          <div key= {product.id} className='bg-gray-100 mx-auto w-[80vw] lg:w-[20vw] rounded-md overflow-hidden'>
          <img src={product.images} 
          width="200" height="200" className='rounded-md rounded-bl-none rounded-br-none hover: scale-105 transition-all'/>
          <h2 className='font-bold uppercase'>{product.title}</h2>
          <p className='text-sm'>{product.description}</p>
          <div className='flex justify-between'>
          <h3 className='font-bold text-gray-9000'>${product.price}</h3>
          <button onClick={()=> removeFromCart(product)} className='px-3 py-1 bg-black text-white font-bold '>Remove from Cart</button>
          </div>
          </div>
        )
      }))
    }
  </div>
  </div>
    
}

export default Cart
