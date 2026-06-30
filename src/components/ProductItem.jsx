import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext'

const ProductItem = ( {id,image,name,price} ) => {

  const {currency} = useContext(ShopContext)

  return (
      <Link className='text-black cursor-pointer' to={`/product/${id}`}>
      <div className=' flex flex-col items-center text-center overflow-hidden'>
        <img className='object-contain hover:scale-110  aspect-square w-60 transition ease-in-out' src={image[0]} alt="" />

      </div>

      
      <p className='mt-3 text-sm text-center '>{name}</p>
      <p className='text-sm text-center '>{currency} {price}</p>

     
      </Link>
    
  )
}

export default ProductItem
