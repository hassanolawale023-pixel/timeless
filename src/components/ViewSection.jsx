import React from 'react'
import { assets } from '../assets/myAssets/assets'
import { useNavigate } from 'react-router-dom'

const ViewSection = () => {

  const navigate = useNavigate();

  return (
    <div className='w-full md:h-full  sm:px-8 lg:px-10 py-16'>
        <div className='relative  '>
            <img src={assets.hero} className='w-full h-[30vh] lg:h-[60vh] md:h-[40vh]  object-cover' alt="" />
            <div className='absolute inset-0 bg-black/30'></div>

            <div className='absolute inset-0 flex flex-col items-start justify-center text-start text-white lg:px-15 px-5'>
             <h2 className='text-3xl mb-4'>Discover Your Perfect Watch</h2>

               <p className='text-sm mb-6 max-w-md sm:max-w-lg'>Where luxury meets individuality. Discover a curated selection of exquisite watches that resonate with your unique style and personality.</p>
                <button
                onClick={()=>navigate('/collection')}
                className=' px-5 py-2 bg-transparent border border-white text-white hover:bg-white hover:text-black transition cursor-pointer'>View Collection</button>
            </div>
               
              
        </div>

       
    </div>
  )
}

export default ViewSection
