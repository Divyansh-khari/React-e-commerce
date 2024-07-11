import React, {useState} from 'react'
import { Link } from 'react-router-dom';

const Navbar = ({setProducts}) => {

    const [value, setValue] = useState('');

  // Step 2: Create the onChange handler
  const handleChange = (e) => {
    setValue(e.target.value);
  };

    const searchedValue= async ()=>{
        const response= await fetch(`https://dummyjson.com/products/search?q=${value}`);
        const data= await response.json();
        console.log(data.products);
        setProducts(data.products);
    }
  return (
    <nav className="flex justify-evenly items-center shadow-md py-3 mb-5">
      <h3 className='font-extrabold text-2xl'>Project1</h3>
      <div>
        <input type="search" name="" id="" placeholder='Search Here .....' onChange= {handleChange}  className='outline-none border-2 px-3 py-1 rounded-md w-[40vw]'/>
        <button className='px-3 py-1 text-white bg-gray-500 rounded-md ml-2 ' onClick={searchedValue}>Search</button>
      </div>
      <ul className='flex gap-5 text-xl font-bold'>
        <Link to ="/" className='text-black hover:text-gray-500'>Home</Link>
        <Link to ="/cart" className='text-black hover:text-gray-500'>Cart</Link>
      </ul>
    </nav>
  )
}

export default Navbar
