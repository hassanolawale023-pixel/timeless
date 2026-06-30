import React, { useContext, useEffect, useState } from 'react'

import { ShopContext } from '../context/ShopContext'
import Title from './Title'
import ProductItem from './ProductItem'

const RelatedProduct = ({category, brand}) => {

  const {products} = useContext(ShopContext)
  const [related, setRelated] = useState([])

  useEffect (()=> {
    if(products.length > 0) {
      let productCopy = products.slice();

      productCopy = productCopy.filter((item)=> category === item.category)

      productCopy = productCopy.filter((item)=> brand === item.brand)

      setRelated(productCopy.slice(0,5))
    }
  },[products])


  return (
    <div className='my-24'>
      <div className='text-start text-3xl my-2 flex gap-2 justify-center items-center'>
        <p> RELATED</p> 
        <p className='text-blue-500 font-medium'> PRODUCTS</p>
      </div>

      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
        {
          related.map((item,index) => (
            <ProductItem
            key={index}
            id={item._id}
            name={item.name}
            price={item.price}
            image={item.image}/>
          ))
        }
      </div>
      
    </div>
  )
}

export default RelatedProduct
