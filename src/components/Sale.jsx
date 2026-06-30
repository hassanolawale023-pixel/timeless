import React, { useContext, useEffect, useState } from 'react'
import Title from './Title'
import { ShopContext } from '../context/ShopContext'
import ProductItem from './ProductItem'

const Sale = () => {

    

    const {products} = useContext(ShopContext)

    const [onSale, setOnSale] = useState([]);

    useEffect(() => {
  const filtered = products.filter(item => item.onSale === true);
  setOnSale(filtered.slice(0, 8));
}, [products]);


  return (
    <div className='my-10 mb-50'>
        <div className='text-start text-4xl py-8 px-9'>
            <Title text1={'Limited'} text2={' Offers'}/>
        <p className='w-3/4 m-auto text-center text-xs sm:text-sm md:text-base text-black'>Discover exclusive deals on our latest luxury watch collections.</p>
        </div>

        {/* rendering products */}
        <div className='grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4 gap-y-6 justify-center items-center px-20'>
        {
            onSale
                .filter(item => item.onSale === true)
                .map((item, index) => (
                <ProductItem
                key={index}
                id={item.id}
                image={item.image}
                name={item.name}
                price={item.price}
        />
      ))
  }
</div>
      
    </div>
  )
}

export default Sale


