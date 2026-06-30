import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/myAssets/assets'
import { motion } from 'framer-motion'
import { Star, Globe, Shield } from 'lucide-react'
import Faq from '../components/Faq'
import OurPolicy from '../components/OurPolicy'
import TheTeam from '../components/TheTeam'
import { useNavigate } from 'react-router-dom'


const About = () => {

  const navigate = useNavigate();

  const items = [
    { icon: <Star size={20} />, text: "Premium Quality" },
    { icon: <Globe size={20} />, text: "Worldwide Shipping" },
    { icon: <Shield size={20} />, text: "Secure Payments" },
  ];

  return (
    <div >
      <div className="mt-30 px-5">
        <Title text1={'About'} text2={'Our Story'}/>
      </div>

    <div className='grid grid-cols-1 md:grid-cols-[1fr_2fr] mt-10 gap-10'>

      {/* left card */}
      <div className='w-full hidden md:block '>
        <div className='relative overflow-hidden h-[350px] sm:h-[450px]'>
          <img src={assets.about_img1} className='w-full h-full object-cover' alt="" />

      <motion.div
      initial={{ y: 0 }}
      whileInView={{ y: "100%" }}
      transition={{ duration: 1.3, ease:"easeInOut" }}
      viewport={{ once: true }}
      className="absolute top-0 left-0 w-full h-full bg-white z-10"/>
        </div>

         <div className='px-5 mt-6'>
          <p className='text-sm max-w-md sm:max-w-lg lg:max-w-lg md:hidden'>We strive to provide exceptional customer service, ensuring that your shopping experience with us is nothing short of extraordinary.</p>
         </div>
      </div>

      {/* Right card */}
      <div className='w-full'>
        <div className='relative overflow-hidden h-[350px] sm:h-[450px]'>
          <img src={assets.about_img2} className='w-full h-full object-cover' alt="" />

        <motion.div
        initial={{ y: 0 }}
        whileInView={{ y: "-100%" }}
        transition={{ duration: 1.3, ease:"easeInOut" }}
        viewport={{ once: true }}
        className="absolute top-0 left-0 w-full h-full bg-white z-10"/>
        </div>

         <div className='px-5 mt-6 '>
          <p className='text-sm max-w-md sm:max-w-lg lg:max-w-lg text-center hidden md:hidden md:block '>With years of experience in the watch industry, our team is dedicated to curating a meticulously selected collection of watches from renowned brands and emerging designers alike.</p>
         </div>
      </div>

    </div>

    <div className='flex flex-col md:flex-row items-center mt-1 lg:mt-15 px-5 gap-1 justify-between md:text-start  overflow-hidden '>
      <div className='shrink-0 '>
        <p className='text-4xl sm:text-5xl lg:text-6xl  font-medium'>12<span className='text-sm ml-2'>
      Years of Experience
    </span>
  </p>
    <div className='w-full md:w-1/2'>
  <p className='text-sm max-w-md sm:max-w-lg lg:max-w-lg block lg:hidden text-start mb-3'>We strive to provide exceptional customer service, ensuring that your shopping experience with us is nothing short of extraordinary.</p>

   <p className='text-sm max-w-md sm:max-w-lg lg:max-w-lg text-start block lg:hidden'>With years of experience in the watch industry, our team is dedicated to curating a meticulously selected collection of watches from renowned brands and emerging designers alike.</p>
   </div>

</div>

      <div className='ml-0 lg:ml-100 '>

       <div className='flex-1 overflow-hidden'>
          <div className="wfull lg:w-1/2 overflow-hidden bg-white py-4">
    
            <div className="flex w-max animate-scroll whitespace-nowrap">
      
            {/* First Set */}
            {items.map((item, index) => (
            <div
            key={index}
            className="flex items-center gap-2 mx-8 text-black">
            {item.icon}
            <p>{item.text}</p>
            </div>
          ))}

            {/* Duplicate Set */}
            {items.map((item, index) => (
            <div
            key={`duplicate-${index}`}
            className="flex items-center gap-2 mx-8 text-black">
            {item.icon}
            <p>{item.text}</p>
            </div>
          ))}
      </div>

          </div>
        </div>
      </div>
    </div>

    <div className='flex flex-col lg:flex-row gap-10 mt-5 lg:mt-15 px-5 py-10'>
      <div className='py-20 md:w-full justify-center items-center'>
        <p className='text-5xl'>Our Mission</p>
        <p className='text-sm max-w-md sm:max-w-lg lg:max-w-lg text-start py-5'>Our mission is to redefine the way people perceive and experience timekeeping. We are committed to offering an unparalleled selection of exquisite timepieces that not only tell time but also tell stories.</p>
        <button 
        onClick={()=>navigate('/contact')}
        className='border border-black bg-white text-black cursor-pointer px-5 py-2 text-sm sm:text-base hover:bg-black hover:text-white '>Contact Us</button>

      </div>

      <div className='relative overflow-hidden h-full lg:h-[350px] md:w-full sm:h-[450px]'>
          <img src={assets.about_img3} className='w-full h-full lg:h-[350px] object-cover' alt="" />

        <motion.div
        initial={{ y: 0 }}
        whileInView={{ x: "100%" }}
        transition={{ duration: 1.3, ease:"easeInOut" }}
        viewport={{ once: true }}
        className="absolute top-0 left-0 w-full h-full bg-white z-10"/>
        </div>
    </div>

    <div className='flex flex-col-reverse lg:flex-row gap-10 mt-5 lg:mt-10 px-5  md:w-full  py-10'>

      <div className='relative overflow-hidden  h-full md:w-full lg:h-[350px] sm:h-[450px]'>
          <img src={assets.about_img4} className='w-full h-full lg:h-[350px] object-cover' alt="" />

        <motion.div
        initial={{ y: 0 }}
        whileInView={{ x: "-100%" }}
        transition={{ duration: 1.3, ease:"easeInOut" }}
        viewport={{ once: true }}
        className="absolute top-0 left-0 w-full h-full bg-white z-10"/>
        </div>

        <div className='py-20 justify-center items-center md:w-full'>
        <p className='text-5xl'>Our Vision</p>
        <p className='text-sm max-w-md sm:max-w-lg lg:max-w-lg text-start py-5'>Our vision is to inspire passion, creativity, and self-expression through the world of horology, enriching the lives of our customers one watch at a time.We envision a future where every individual can find their perfect watch, regardless of style or budget, and where the experience of shopping for a timepiece is as memorable as wearing it.</p>
        <button 
        onClick={()=>navigate('/cpllection')}
        className='border border-black bg-white text-black cursor-pointer px-5 py-2 text-sm sm:text-base hover:bg-black hover:text-white '>View Collection</button>

      </div>

    </div>


    <div className='grid grid-cols-1 lg:grid-cols-3 bg-black text-white justify-between mt-15 lg:mt-15'>
      <div className='flex flex-col px-8 py-15'>
        <span className='text-gray-400 text-xs'>01</span>
        <p>Smartwatch Integration</p>
        <p className='text-gray-400 text-sm py-5'> One of the most exciting areas of innovation is the integration of smartwatch technology into traditional timepieces. By incorporating features such as fitness tracking.</p>

        <div className='mt-5 lg:mt-40'>
          <span className='text-gray-400 text-xs'>03</span>
        <p>Customization Options</p>
        <p className='text-gray-400 text-sm py-5'>Discussing innovative customization options, such as interchangeable straps & personalized engravings, that allow customers to create unique timepieces.</p>
        </div>

      
      </div>

      <div className='p-5 overflow-hidden hidden md:block'>
        <motion.img
            initial={{ opacity: 0, scale: 0.95, y: 100 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            transition={{
            duration: 0.9,
            ease: "easeOut",
            delay: 0.1
            }}
            src={assets.about_img6} className='w-full h-full object-cover' alt="" />
      </div>


      <div className='flex flex-col px-8 py-15'>
        <span className='text-gray-400 text-xs'>02</span>
        <p>Sustainable Materials</p>
        <p className='text-gray-400 text-sm py-5'>From eco-friendly materials to ethical sourcing practices, we strive to minimize our environmental footprint while creating watches that stand the test of time.</p>

        <div className='mt-5 lg:mt-40'>
          <span className='text-gray-400 text-xs'>04</span>
        <p>Advanced Movement Technology</p>
        <p className='text-gray-400 text-sm py-5'>Advancements in movement technology, such as high-frequency movements and innovative escapements, that enhance accuracy and performance in watches.</p>
        </div>

      
      </div>
    </div>

    <div className='mt-25 lg:mt-15 flex flex-col-reverse  lg:flex-row gap-10'>
      <div className='px-5  md:py-15'>
        <p className='text-5xl py-8'>Our Empowerment</p>
        <p className=' max-w-md sm:max-w-lg lg:max-w-md font-barlow text-start text-gray-500 py-3'>We strive to create a work environment where every individual feels valued, respected, and empowered to reach their full potential. We invest in ongoing training & development opportunities to help our team members grow both personally and professionally, fostering a culture of innovation, collaboration, and excellence.</p>
        <p className='max-w-md sm:max-w-lg lg:max-w-md text-start text-gray-500'>Through our curated collection, educational resources, and engaging events, we aim to empower our customers to explore their passion for watches & discover the joy of collecting and wearing timepieces that resonate with them on a personal level.</p>
        <button className='border border-black bg-white text-black cursor-pointer px-5 py-2 text-sm sm:text-base hover:bg-black hover:text-white my-10 '>View Products</button>


        <p className='text-gray-400 text-lg'>Sold Worldwide Watches</p>
        <p className='font-semibold text-4xl'>85,000+</p>
      </div>

      <div className='w-full md:max-w-full lg:w-1/2 px-3'>
        <img src={assets.about_img5} alt="FAQ" className='w-full md:w-full h-full object-contain'/>
      </div>
    </div>

    <TheTeam/>
    <OurPolicy/>
    <Faq/>
  </div>
  )
}

export default About
