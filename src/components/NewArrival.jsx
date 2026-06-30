import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title'
import ProductItem from './ProductItem'

const NewArrival = () => {
  const { products } = useContext(ShopContext)

  const [ newArrival, setNewArrival ] = useState([]);

  useEffect(()=> {
    const filtered = products.filter(item => item.newArrival === true);
    setNewArrival(filtered.slice(0,3))
  },[products])

  return (
    <div className='my-10 mb-50'>
      <div className='text-start text-4xl py-8 px-9'>
        <Title text1={'New'} text2={' Arrivals'}/>

        <p className='w-3/4 m-auto text-center text-xs sm:text-sm md:text-base text-black'>Discover Timeless Craftsmanship in Our Latest Arrivals</p>

      </div>

      {/* products rendering */}
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 gap-y-6 justify-center items-center   px-20'>
        {
          newArrival.map((item,index)=>(
            <ProductItem key={index} id={item.newArrival} image={item.image} name={item.name} price={item.price}/>
          ))
        }
      </div>
      
    </div>
  )
}

export default NewArrival
