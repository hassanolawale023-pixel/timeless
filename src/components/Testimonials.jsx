import React, { useEffect, useState } from 'react'
import Title from './Title'
import { assets } from '../assets/myAssets/assets'

const Testimonials = () => { 
   const reviews = [
        {
            text: "I recently purchased the Vanguard Voyager from Wristy, and I must say, it has exceeded all my expectations. The attention to detail in the design is remarkable, and the quality of craftsmanship is evident from the moment you hold it in your hand. Not only does it look stunning on the wrist, but it also performs flawlessly.",
            name: "John",
            role: "CEO, Company Inc.",
            image: assets.Customer_1
        },
        {
            text: "Exceptional service from start to finish! I reached out to the customer support team with a few questions about a particular watch, and they were incredibly helpful and knowledgeable.",
            name: "Amaka",
            role: "Entrepreneur",
            image: assets.Customer_2
        },
        {
            text: "I've been a watch collector for many years, and I can confidently say that the Heritage Horizon from Wristy is one of the finest additions to my collection. The design is a perfect blend of vintage charm and modern sophistication, with a beautifully crafted dial and elegant case.",
            name: "Michael",
            role: "Designer",
            image: assets.Customer_3
        },
        {
            text: "I bought a watch as a gift for my husband, and he absolutely loves it! The quality is exceptional, and it looks even better in person. It's become his go-to watch for both casual and formal occasions.",
            name: "Sarah Lee",
            role: "Manager",
            image: assets.Customer_4
        }
    ]

    const [current, setCurrent] = useState(0)

    
    const nextSlide = () => {
        setCurrent((prev) => (prev + 1) % reviews.length)
    }

    const prevSlide = () => {
        setCurrent((prev) => prev === 0 ? reviews.length - 1 : prev - 1)
    }

    
    useEffect(() => {
        const interval = setInterval(() => {
            nextSlide()
        }, 10000)

        return () => clearInterval(interval)
    }, [current])


  return (
<div className='my-10 lg:mb-20 w-full px-4 sm:px-6 lg:px-10 py-6 lg:py-10'>

  <div className='flex flex-col sm:flex-row sm:justify-between sm:items-center gap-5 mb-8'>

    <Title text1={'Testimonials'} text2={'Customer Reviews'} />

    <div className='flex gap-2 self-start sm:self-auto'>
      <div
        onClick={prevSlide}
        className='border p-2 rounded-full cursor-pointer'
      >
        <img src={assets.arrow_left_black} className='w-4 sm:w-5' alt="" />
      </div>

      <div
        onClick={nextSlide}
        className='border p-2 rounded-full cursor-pointer'
      >
        <img src={assets.arrow_right_black} className='w-4 sm:w-5' alt="" />
      </div>
    </div>

  </div>


  {/* Content */}
  <div className='flex flex-col md:flex-row gap-8 lg:gap-14 items-center'>

    {/* Image */}
    <div className='w-full md:w-1/2 relative overflow-hidden rounded-xl h-[250px] sm:h-[350px] md:h-[400px]'>

      {reviews.map((item,index)=>(
        <img
          key={index}
          src={item.image}
          alt=""
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700
          ${index === current ? "opacity-100":"opacity-0"}`}
        />
      ))}

    </div>


    {/* Text */}
    <div className='w-full md:w-1/2 relative min-h-[200px] sm:min-h-[250px] flex items-center'>

      {reviews.map((item,index)=>(
        <div
          key={index}
          className={`absolute transition-all duration-700
          ${
            index === current
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-6"
          }`}
        >

          <p className='text-sm sm:text-base lg:text-lg text-gray-700 italic leading-7 mb-6'>
            "{item.text}"
          </p>

          <h3 className='text-xl sm:text-2xl font-medium'>
            {item.name}
          </h3>

          <p className='text-xs sm:text-sm text-gray-500'>
            {item.role}
          </p>

        </div>
      ))}

    </div>

  </div>

</div>
  )
}

export default Testimonials
