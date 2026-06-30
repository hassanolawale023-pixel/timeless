import React from 'react'
import { assets } from '../assets/myAssets/assets'
import { motion } from 'framer-motion'
import { NavLink } from 'react-router-dom'


const Hero = () => {
  
  const watchPill = [
    'Luxury',
    'Sport',
    'SmartWatch'
  ]

  return (
<div className='flex flex-col sm:flex-col h-200   md:text-start lg:text-start lg:flex-row min-h-screen bg-black pt-16 w-full font-bricolage'>
      
<div className='bg-black  h-full w-full '>
  <motion.div 
    className= 'text-white z-10 px-6 sm:px-10  pt-5 lg:pt-35 w-full '>
  <motion.h1  
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9 }}  className='text-5xl sm:text-5xl lg:text-7xl py-5 '> 
      Timeless Elegance 

  </motion.h1>

<motion.p 
  
  initial={{ opacity: 0, y: 30 }}
  animate={{ opacity: 1, y: 5 }}
  transition={{ duration: 0.9, delay: 0.2 }} 
  className='max-w-md sm:max-w-lg lg:max-w-xl mb-8 text-sm sm:text-base '>Elevate your style with our curated collection of essential watches for every wardrobe. From classic timepieces that exude sophistication to modern designs that make a statement.</motion.p>

<NavLink to={'/collection'}>
  <motion.button 
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.9, delay: 0.4 }} 
    className=' border border-white px-5 py-2 text-sm sm:text-base hover:bg-white hover:text-black cursor-pointer transition-all duration-300 ease-in-out ' 
    > View Collection</motion.button>
</NavLink>



</motion.div>
</div>

 {/* hero right */}
    
 <div className= 'overflow-hidden h-[80vh] sm:h-[110vh] lg:h-full md:h-[109.8vh] relative pb-20 flex items-center justify-center lg:w-180 w-full '>

 <motion.img
    initial={{ opacity: 0, scale: 0.85, y: 40 }}
    animate={{ opacity: 1, scale: 1, y: 0 }}
    transition={{
    duration: 0.6,
    ease: "easeOut",
    delay: 0.1
    }}
    src={assets.Watch_1} className='w-60 sm:w-72 lg:w-96 object-contain ' alt="" />

 
   <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex  sm:top-110 min-[800px]:max-[1002px]:top-[200px] md:top-200 text-center justify-center gap-3 z-20">
    {watchPill.map((item, index) => (
      <button
        key={index}
        className="px-8 py-1 border border-gray-400/30 text-center justify-center flex text-white rounded-full hover:bg-gray-400/60 hover:text-white  transition md:mb-60  lg:mb-10"
      >
        {item}
      </button>
    ))}
  </div>

  {/* Bottom gradient */}
   <div className="absolute inset-0 z-10 bg-gradient-to-t from-blue-400/50 via-purple-500/4 to-transparent md:h-[86.4%]  sm:mt-20 lg:h-full overflow-hidden"></div>

  </div> 
</div>


  )
}

export default Hero
