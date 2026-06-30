import React, { useState } from 'react'
import { assets } from '../assets/myAssets/assets'
import { AnimatePresence, motion} from 'framer-motion';


const SubHero = () => {

    const [activeIndex, setActiveIndex] = useState(null);

    const data = [
        {
            title: "Watch Maintenance and Repair",
            content: "Our skilled technicians meticulously assess, repair & service your watches, restoring them to their optimal condition. From battery replacements to intricate mechanical adjustments."
        },
        {
            title: "Watch Consultation Services",
            content: "Our knowledgeable advisors provide personalized guidance tailored to your preferences and lifestyle, helping you navigate the vast world of watches with confidence."
        },
        {
            title: "Custom Watch Design Services",
            content: "Make your watch dreams a reality with our Custom Watch Design Services. Collaborate with our skilled artisans to create a bespoke timepiece that reflects your unique style and vision."
        }
    ]


  const toggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };


  return (
    <div className='bg-black min-h-screen w-full flex flex-col lg:flex-row justify-between py-10 text-start px-10 text-white gap-10
    '>
        <div className='items-start py-12 '>
            <p className='text-4xl font-semibold max-w-md sm:max-w-lg lg:max-w-lg mb-8 '>Luxury Watch Appraisal</p>

            <p className='font-light mt-5 max-w-md sm:max-w-lg lg:max-w-lg mb-8 text-sm:text-base pb-50'>Whether you're seeking a statement piece for a special occasion of an everyday watch that reflects your unique personality, our styling sessions offer tailored guidance and recommendations.</p>

    {data.map((item, index)=>(
        <div key={index}>
        <p onClick={() => toggle(index)} className='pt-5 cursor-pointer transition ease-in-out'  >
        <span className='text-xs '>0{index + 1}.</span> {item.title}</p>
        <AnimatePresence>
            {activeIndex === index && (
            <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="overflow-hidden">

            <p className='mt-3 text-sm text-gray-500 max-w-md sm:max-w-lg lg:max-w-lg mb-8 sm:text-base'>
            {item.content}
            </p><hr className='w-full text-gray-400 col-span-2' />
            </motion.div>
            )}
            </AnimatePresence>
            </div>
            ) )}

        </div>

        {/* subhero image */}
      <div className='w-full lg:w-1/2 flex justify-center py-10 items-center relative overflow-hidden'>
        <img className='w-full h-full object-cover ' src={assets.man_watch} alt="" /> 

        <motion.div
        initial={{ y: 0 }}
        whileInView={{ x: "-100%" }}
        transition={{ duration: 1.3, ease: "easeInOut" }}
        viewport={{ once: true }}
        className="absolute top-0 left-0 w-full h-full bg-black z-10"/>
        </div>
      
    </div>
  )
}

export default SubHero
