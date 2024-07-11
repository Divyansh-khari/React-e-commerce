import React, {useEffect, useState} from 'react'
import {FadeLoader} from 'react-spinners'

const Home = ({products, setProducts}) => {
  const [loading, setloading]= useState(true);
  useEffect(()=>{
  getProducts();
  }, [])
 const getProducts= async()=>{
  const response = await fetch("https://dummyjson.com/products");
  const data= await response.json();
  console.log(data.products);
  setProducts(data.products);
  setTimeout(()=>{
    setloading(false);
  }, 3000)
 }

  return (
    <div className='grid grid-cols-3 lg: grid-cols-3 gap-10 justify-center items-center'>
      
      { loading? (
        <div className='w-[230vh] h-[80vh] flex justify-center items-center'>
        <FadeLoader /></div>) :
        products.map((product)=>{
          return (
            <div key= {product.id} className='bg-gray-100 mx-auto w-[80vw] lg:w-[20vw] rounded-md overflow-hidden'>
            <img src={product.images} 
            width="200" height="200" className='rounded-md rounded-bl-none rounded-br-none hover: scale-105 transition-all'/>
            <h2 className='font-bold uppercase'>{product.title}</h2>
            <p className='text-sm'>{product.description}</p>
            <div className='flex justify-between'>
            <h3 className='font-bold text-gray-9000'>${product.price}</h3>
            <button className='px-3 py-1 bg-black text-white font-bold '>Buy</button>
            </div>
            </div>
          )
        })
      }
     
    </div>
  )
}

export default Home
