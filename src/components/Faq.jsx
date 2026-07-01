import React, { useState } from 'react'
import { assets } from '../assets/myAssets/assets'
import Title from './Title'
import { ChevronRight, ChevronDown } from 'lucide-react'
import { AnimatePresence, motion } from 'framer-motion'

const Faq = () => {
    const [activeIndex, setActiveIndex] = useState(null)

    const data = [
        {
            title: "Do you offer international shipping?",
            content: "Yes, we offer international shipping to select countries. Shipping times and costs vary depending on the destination. Please refer to our Shipping Policy or contact our customer support team for more information."
        },
        {
            title: "Are your watches by a warranty?",
            content: "Yes, all our watches are covered by a manufacturer's warranty. Warranty periods vary by brand and model but typically cover manufacturing defects for a specified period."
        },
        {
            title: "Do you offer gift wrapping services?",
            content: "Yes, we offer gift wrapping services for an additional fee. During the checkout process, you will have the option to add gift wrapping to your order. You can also include a personalized message for the recipient."
        },
         {
            title: "Can I request a custom engraving for my watch?",
            content: "No, we do not have the service available curently but clients would notify you as soon as the service is available."
        },
         {
            title: "How can I contact customer support?",
            content: "You can contact our customer support team via email at watchtowersupport@outlook.com or by phone at 234-813-945-4558. Our team is available Monday through Friday, from 9:00 AM to 5:00 PM WAT, to assist you with any questions or concerns you may have."
        },
         {
            title: "What is your return policy?",
            content: "We want you to be completely satisfied with your purchase. If for any reason you are not, we offer a hassle-free return policy. Items must be returned within 30 days of purchase, in their original condition, for a full refund or exchange. Please refer to our Returns Policy for more details."
        }

    ]

    const toggle = (index) =>{
        setActiveIndex(activeIndex === index ? null :index )
    }


  return (
     <div className='px-5 md:px-10 mb-15 lg:py-16 mt-5 lg:mt-25'>
        <div className='mb-12'>
            <Title text1={'FAQs'} text2={'Have any questions?'}/>
        </div>

            <div className='flex flex-col lg:flex-row gap-12 items-start'>
                {/* FAQ IMAGE */}
                <div className='w-full lg:w-1/2'>
                <img src={assets.faq} alt="FAQ" className='w-full h-full object-cover'/>
            </div>

                {/* FAQ SECTION */}
        <div className='w-full lg:w-1/2'>

            {data.map((item, index) => (
                <div
                    key={index}
                    className='border-b border-black p-5 mb-1 transition-all duration-300'>

                {/* QUESTION */}
        <div
            onClick={() => toggle(index)}
            className='flex items-center justify-between cursor-pointer gap-5'>
            <p className='font-medium text-sm sm:text-base'>
            {item.title}
            </p>

                {/* ARROW */}
            <motion.div
            animate={{
            rotate: activeIndex === index ? 90 : 0}}
            transition={{ duration: 0.3 }}>
            <ChevronRight size={22} />
            </motion.div>
        </div>

                {/* ANSWER */}
        <AnimatePresence>
            {activeIndex === index && (
                <motion.div
                initial={{
                height: 0,
                opacity: 0
                }}
                animate={{
                height: 'auto',
                opacity: 1
                }}
                exit={{
                height: 0,
                opacity: 0
                }}
                transition={{
                duration: 0.4,
                ease: 'easeInOut'
                }}
                className='overflow-hidden'>
                <p className='pt-4 text-gray-600 text-sm sm:text-base leading-relaxed'>
                {item.content}</p>
            </motion.div>
    )}
        </AnimatePresence>

    </div>
))}

        </div>
     </div>
</div>

  )
}

export default Faq
