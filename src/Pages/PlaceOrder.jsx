import React, { useContext, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import CartTotal from '../components/CartTotal'
import { assets } from '../assets/myAssets/assets'

const PlaceOrder = () => {

  const [method, setMethod] = useState('cod')
  const {navigate} = useContext(ShopContext)
  return (
    <div className='flex flex-col justify-between sm:flex-row gap-4 pt-5 sm:pt-14 min-h-[80vh] lg:mt-25 px-10 mt-15 my-5'>
       <div className='flex flex-col w-full gap-4 sm:max-w-120'>
        <div className='text-start text-3xl my-2 flex gap-2 justify-center items-center'>
        <p> DELIVERY</p> 
        <p className='text-blue-500 font-medium'> INFORMATION</p>
      </div>

      <div className='flex gap-3'>
        <input 
        type="text"
        className='border border-b-gray-400 rounded py-1.5 px-3.5 w-full'
        placeholder='First Name' />

        <input 
        type="text"
        className='border border-b-gray-400 rounded py-1.5 px-3.5 w-full'
        placeholder='Last Name' />
      </div>

      <input 
        type="email"
        className='border border-b-gray-400 rounded py-1.5 px-3.5 w-full'
        placeholder='Email Address' />

        <input 
        type="number"
        className='border border-b-gray-400 rounded py-1.5 px-3.5 w-full'
        placeholder='Phone Number' />

        <input 
        type="text"
        className='border border-b-gray-400 rounded py-1.5 px-3.5 w-full'
        placeholder='House Address' />

        <div className='flex gap-3'>
          <input 
        type="text"
        className='border border-b-gray-400 rounded py-1.5 px-3.5 w-full'
        placeholder='City' />

        <input 
        type="text"
        className='border border-b-gray-400 rounded py-1.5 px-3.5 w-full'
        placeholder='State' />
        </div>

        <div className='flex gap-3'>
          <input 
        type="number"
        className='border border-b-gray-400 rounded py-1.5 px-3.5 w-full'
        placeholder='Zip Code' />

        <input 
        type="text"
        className='border border-b-gray-400 rounded py-1.5 px-3.5 w-full'
        placeholder='Country' />
        </div>
       </div>

       {/* Right Side */}

       <div className='mt-8 min-w-80'>
        <CartTotal/>

        <div className='mt-12'>
          <div className='text-start text-3xl my-2 flex gap-2 justify-center items-center'>
        <p> PAYMENT</p> 
        <p className='text-blue-500 font-medium'> METHOD</p>
        </div>

        <div className='flex gap-4 flex-col lg:flex-row'>
          <div onClick={()=>setMethod('stripe')}
            className='flex items-center p-2 px-7 cursor-pointer'>
              <p className={`min-w-3.5 h-3.5 border rounded-full ${method === 'stripe' ? 'bg-green-400' : ''}`} ></p>
              <img 
              src={assets.star_icon}
              className='h-5 mx-4' 
              alt="" />
            </div>

            <div onClick={()=>setMethod('razorpay')}
            className='flex items-center p-2 px-7 cursor-pointer'>
              <p className={`min-w-3.5 h-3.5 border rounded-full ${method === 'razorpay' ? 'bg-green-400' : ''}`} ></p>
              <img 
              src={assets.star_dull_icon}
              className='h-5 mx-4' 
              alt="" />
            </div>

            <div onClick={()=>setMethod('cod')}
            className='flex items-center p-2 px-7 cursor-pointer'>
              <p className={`min-w-3.5 h-3.5 border rounded-full ${method === 'cod' ? 'bg-green-400' : ''}`} ></p>
              <p className='text-gray-700 text-sm font-medium mx-4'> CASH ON DELIVERY</p>
            </div>
        </div>
      

      <div className='w-full text-end mt-8'>
        <button 
        className='bg-black text-white py-3 px-16'
        onClick={()=>navigate('/orders')}>PLACE ORDER</button>
      </div>
        </div>
       </div>
    </div>
  )
}

export default PlaceOrder
