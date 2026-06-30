import React, { useEffect } from 'react'
import ViewSection from '../components/ViewSection'
import Title from '../components/Title'
import { assets } from '../assets/myAssets/assets'
import Faq from '../components/Faq'
import { useLocation } from 'react-router-dom'

const Contact = () => {
    const location = useLocation()

    useEffect(() => {
      if (location.hash) {
    const element = document.querySelector(location.hash)

    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      })
    }
  }

}, [location])

  return (
    <div>
      <div className='w-full mt-15 px-4 sm:px-8 lg:px-10 py-16 bg-gray-50'>
        
      <div className="mb-10">
              <Title text1={'Get in Touch'} text2={'Contact Us'}/>
      </div>

      <div className='flex flex-col gap-5 sm:flex-row mb-100 lg:mb-25'>
        <div className='w-full md:w-1/2'>
          <img src={assets.contact_1} className='w-full h-auto object-cover' alt="" />
          </div>

        <div className='w-full lg:w-1/2 md:w-1/2 px-4 h-1 gap-5 py-20 grid grid-cols-2'>

          <div>
            <p className='text-sm px-3'>First Name</p>
            <input type="text" placeholder='Enter your first name' className='w-full border-b outline-none p-3 text-sm text-gray-500 ' />
          </div>

          <div>
            <p className='text-sm px-3' >Last Name</p>
            <input type="text" placeholder='Enter your last name' className='w-full border-b outline-none p-3 text-sm text-gray-500' />
          </div>

          <div>
            <p className='text-sm px-3'>Email</p>
            <input type="email" placeholder='Enter your email' className='w-full outline-none border-b p-3 text-sm text-gray-500' />
          </div>

          <div>
            <p className='text-sm px-3'>Phone Number</p>
            <input type="number" placeholder='Enter your phone number' className='w-full outline-none border-b p-3 text-sm text-gray-500' />
          </div>

          <div className='col-span-2'>
          <p className='text-sm px-3'>Message</p>
            <textarea placeholder='Enter your message' className='w-full border-b p-3 text-sm text-gray-500 h-32 resize-none outline-none'></textarea>
          </div>

            <div className='py-3 flex items-center gap-2'>
              <input type="checkbox" />
                  <span className='text-gray-500'>Agree to Terms and Conditions</span>
            </div>

            <div className='flex justify-end'>
             <button className=' border text-black font-light px-6  hover:bg-black items-end hover:text-white cursor-pointer transition-all ease-in-out duration-300 '>Submit</button>
            </div>
          
    
        </div>


      </div>

       <div className='flex flex-col-reverse gap-20 sm:flex-row lg:mt-25 sm:mt-25'>

        <div className='w-full lg:w-1/2 md:w-1/2 px-4 mb-5 gap-5 py-10 grid grid-cols-2'>

        <div className='col-span-2 mb-5'>
        <p className='px-3 text-lg'>Feel free to adjust the description to include specific contact details such as email address, phone number, and physical address as needed.</p>
        </div>

          <div>
            <p className=' px-3'>Location</p>
          </div>

          <div>
           <p className=' px-3'>1, Odunlami Street, Lagos Island, Lagos.</p>
          </div>

          <div>
            <p className=' px-3'>Email</p>
          </div>

          <div>
            <p className=' px-3'> hassanolawale023@gmail.com</p>
          
          </div>

          <div>
          <p className=' px-3'>Phone Number</p>
          </div>

          <div>
            <p className=' px-3'>0813954558</p>
          </div>

            <div>
              <p className='px-3'> Follow us on</p>
            </div>

            <div className='flex flex-row items-center gap-3'>
            <p>Facebook</p>
            <p>Twitter</p>
            <p>Instagram</p>
            <p>LinkedIn</p>
            </div>
          
    
        </div>

         <div className='w-full md:w-1/2'>
          <img src={assets.contact_2} className='w-full h-auto object-cover' alt="" />
          </div>

      </div>

      

    </div>

    <div  id='faq'> 
      <Faq/>
    </div>
      <ViewSection/>
    </div>
  )
}

export default Contact
