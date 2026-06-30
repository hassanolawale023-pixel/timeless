import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'

const Orders = () => {

  const {products, currency} = useContext(ShopContext) 

  return (
    <div className='lg:my-24'>
       <div className='text-start text-3xl my-2 flex gap-2 justify-center items-center'>
        <p> MY</p> 
        <p className='text-blue-500 font-medium'> ORDERS</p>
      </div>
      
     <div>
      {
        products.slice(1,4).map((item,index)=>(
          <div className='py-4 border-b text-gray-700 flex flex-col md:justify-between items-center md:flex-row gap-4'>
            <div
            key={index}
             className='flex items-start gap-6 text-sm'>
              <img 
              src={item.image[0]}
              className='w-16 sm:w-20'
              alt="" />

              <div>
                <p className='sm:text-base font-medium'>{item.name}</p>
                <div className='flex items-center gap-3 text-base text-gray-500'>
                  <p className='text-lg'>
                    {currency}{item.price}
                  </p>
                    <p>Quantity: 2</p>
                 
                </div>

                <p className='mt-2'>Date: <span className='text-gray-400'>1, July, 2026</span></p>
              </div>
            </div>

            <div className='md:w-1/2 flex justify-between'>
            <div className='flex items-center gap-2'>
              <p className='min-w-2 h-2 rounded-full bg-green-400'></p>
              <p>Ready to Ship</p>
            </div>
            <button className='border px-4 py-2 text-sm font-medium'>Track Order</button>
            </div>
          </div>
        ))
      }
      </div>
      
    </div>
  )
}

export default Orders
