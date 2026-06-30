import React from 'react'
import Title from '../components/Title'
import ViewSection from '../components/ViewSection'
import { assets } from '../assets/myAssets/assets'
import { useNavigate } from 'react-router-dom'


const Category = () => {
  const navigate = useNavigate();

  


  return (
    <div className=' md:px-50 lg:px-1'>
    <div className="w-full mt-15 px-4 sm:px-8 lg:px-10 py-16 bg-gray-50" >
       <div className="mb-10">
              <Title text1={'Explore'} text2={'Watch Categories'}/>
        </div>

        <div className='grid grid-cols-2 lg:grid-cols-3 gap-5'>
           <div
           onClick={()=>navigate('/collection')}
           className="relative overflow-hidden group cursor-pointer h-[350px] sm:h-[450px]">
            
          <img
            src={assets.MensWatch_Banner}
            
            alt="watch"
            className="w-full h-full object-cover transition-transform duration-[700ms] ease-in-out group-hover:scale-[1.04]"
          />

          <div className="absolute inset-0 bg-black/10 group-hover:bg-black/10 transition-all duration-[700] ease-in-out flex flex-col justify-end p-6 sm:p-8 text-white">
            <p className="text-md text-center font-bold tracking-wide opacity-80">MEN WATCH</p>

            <div className="mt-4 flex items-center gap-2 text-sm opacity-90"></div>
          </div>
        </div>

        
           <div
            onClick={()=>navigate('/collection')}
            className="relative overflow-hidden group cursor-pointer h-[350px] sm:h-[450px]">
            
          <img
            src={assets.SportWatch_Banner}
            alt="watch"
            className="w-full h-full object-cover transition-transform duration-[700ms] ease-in-out group-hover:scale-[1.04]"
          />

          <div className="absolute inset-0 bg-black/10 group-hover:bg-black/10 transition-all duration-[700] ease-in-out flex flex-col justify-end p-6 sm:p-8 text-white">
            <p className="text-md text-center font-bold tracking-wide opacity-80">SPORT WATCH</p>

            <div className="mt-4 flex items-center gap-2 text-sm opacity-90"></div>
          </div>
        </div>

        
           <div
            onClick={()=>navigate('/collection')}
            className="relative overflow-hidden group cursor-pointer h-[350px] sm:h-[450px]">
            
          <img
            src={assets.SmartWatch_Banner}
            alt="watch"
            className="w-full h-full object-cover transition-transform duration-[700ms] ease-in-out group-hover:scale-[1.04]"
          />

          <div className="absolute inset-0 bg-black/10 group-hover:bg-black/10 transition-all duration-[700] ease-in-out flex flex-col justify-end p-6 sm:p-8 text-white">
            <p className="text-md text-center font-bold tracking-wide opacity-80">SMART WATCH</p>

            <div className="mt-4 flex items-center gap-2 text-sm opacity-90"></div>
          </div>
        </div>

        
           <div 
           onClick={()=>navigate('/collection')}
           className="relative overflow-hidden group cursor-pointer h-[350px] sm:h-[450px]">
            
          <img
            src={assets.WomensWatch_Banner}
            alt="watch"
            className="w-full h-full object-cover transition-transform duration-[700ms] ease-in-out group-hover:scale-[1.04]"
          />

          <div className="absolute inset-0 bg-black/10 group-hover:bg-black/10 transition-all duration-[700] ease-in-out flex flex-col justify-end p-6 sm:p-8 text-white">
            <p className="text-md text-center font-bold tracking-wide opacity-80">WOMEN WATCH</p>

            <div className="mt-4 flex items-center gap-2 text-sm opacity-100"></div>
          </div>
        </div>

        <div
           onClick={()=>navigate('/collection')}
           className="relative overflow-hidden group cursor-pointer h-[350px] sm:h-[450px]">
            
          <img
            src={assets.style3}
            
            alt="watch"
            className="w-full h-full object-cover transition-transform duration-[700ms] ease-in-out group-hover:scale-[1.04]"
          />

          <div className="absolute inset-0 bg-black/10 group-hover:bg-black/10 transition-all duration-[700] ease-in-out flex flex-col justify-end p-6 sm:p-8 text-white">
            <p className="text-md text-center font-bold tracking-wide opacity-80">CASUAL WATCH</p>

            <div className="mt-4 flex items-center gap-2 text-sm opacity-90"></div>
          </div>
        </div>

        <div
           onClick={()=>navigate('/collection')}
           className="relative overflow-hidden group cursor-pointer h-[350px] sm:h-[450px]">
            
          <img
            src={assets.style6}
            
            alt="watch"
            className="w-full h-full object-cover transition-transform duration-[700ms] ease-in-out group-hover:scale-[1.04]"
          />

          <div className="absolute inset-0 bg-black/10 group-hover:bg-black/10 transition-all duration-[700] ease-in-out flex flex-col justify-end p-6 sm:p-8 text-white">
            <p className="text-md text-center font-bold tracking-wide opacity-80">LEATHER WATCH</p>

            <div className="mt-4 flex items-center gap-2 text-sm opacity-90"></div>
          </div>
        </div>


        </div>

       
       
    </div>
    <ViewSection/>

    <div className=' mt-10 flex flex-col justify-center items-center '>
     <p className='text-center text-3xl text-black '>Share your stylish moments with #watchwonders</p>
        <p className='mt-5 px-5 text-gray-500 text-center text-md  max-w-md sm:max-w-lg lg:max-w-5/6'>Capture your wristwear adventures and become part of our watch community! Share your stylish moments with #WatchWonders for a chance to be featured on our Instagram page.</p>
      </div>

      <div className='mt-10 px-3 grid grid-cols-3 gap-2 sm:grid-cols-3 lg:grid-cols-6'>
        <img 
        className="w-full h-full md:h-full lg:h-[45vh] object-cover"
         src={assets.style1} alt="" />
        <img
        className="w-full h-full object-cover " 
        src={assets.style2} alt="" />
        <img
         className="w-full h-full object-cover"
        src={assets.style3} alt="" />
        <img 
        className="w-full h-full object-cover "
        src={assets.style4} alt="" />
        <img
        className="w-full h-full object-cover" 
        src={assets.style5} alt="" />
        <img
        className="w-full h-full object-cover"
         src={assets.style6} alt="" />

      </div>
  </div> 
  )
}

export default Category
