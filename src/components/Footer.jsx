import React from 'react'
import { assets } from '../assets/myAssets/assets'
import { Link, useNavigate } from 'react-router-dom'


const Footer = () => {

  const navigate = useNavigate();
  return (
  <div>
    <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 py-5 px-10 lg:mt-40 text-sm  bg-black text-gray-400 '>

      <div className='py-10'>
        <img src={assets.LOGO} className='mb-4 w-19' alt="" />
        <p className='w-full md:w2/3 text-white max-w-md sm:max-w-lg lg:max-w-sm '>Your trusted partner in timekeeping excellence. Our commitment to quality and style sets us apart in the world of horology.</p>
      </div>

      <div className='lg:py-15'>
        <h3 className='text-white mb-4'>Quick Links</h3>
        <ul>
          <li className='mb-2 cursor-pointer hover:text-white' onClick={()=>navigate('/')}>Home</li>
          <li className='mb-2 cursor-pointer hover:text-white' onClick={()=>navigate('/collection')}>Collection</li>
          <li className='mb-2 cursor-pointer hover:text-white' onClick={()=>navigate('/about')}>About Us</li>
          <li className='mb-2 cursor-pointer hover:text-white' onClick={()=>navigate('/category')}>Category</li>
          <li className='mb-2 cursor-pointer hover:text-white' onClick={()=>navigate('/contact')}>Contact</li>
          <li className='mb-2 cursor-pointer hover:text-white' ><Link to="/contact#faq">FAQs</Link></li>
        </ul>
      </div>

      <div className='lg:py-15'>
        <p className='text-white mb-4'>GET IN TOUCH</p>
        <ul>
          <li className='mb-2 cursor-pointer hover:text-white'>+234-813-975-4558</li>
          <li className='mb-2 cursor-pointer hover:text-white'>hassanolawale023@gmail.com</li>
        </ul>
      </div>

      <div className='col-span-3'>
        <hr className='w-full text-gray-600' />
        <p className='text-start text-gray-500  py-4'>© 2026 Watch Tower. All rights reserved.</p>
    </div>
    </div>

   
  </div>
  )
}

export default Footer
