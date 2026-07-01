import React from 'react'
import { assets } from '../assets/myAssets/assets'
import { NavLink } from 'react-router-dom'

const Essential = () => {
  return (
    <div className="w-full px-4 sm:px-8 lg:px-10 lg:py-10">
      
      <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-6">
        
        {/* LEFT CARD */}
        <div className="relative overflow-hidden group cursor-pointer h-[350px] sm:h-[450px]">
            <NavLink to={'/category'}>
          <img
            src={assets.white_watch}
            alt="watch"
            className="w-full h-full object-cover transition-transform duration-[700ms] ease-in-out group-hover:scale-[1.04]"
          />

          <div className="absolute inset-0 bg-black/10 group-hover:bg-black/10 transition-all duration-[700] ease-in-out flex flex-col justify-end p-6 sm:p-8 text-white">
            <p className="text-xs tracking-wide opacity-80">LUXURY WATCH</p>
            <h2 className="text-xl sm:text-2xl font-medium mt-2">
              Where Style Meets Substance.
            </h2>

            <div className="mt-4 flex items-center gap-2 text-sm opacity-90">
              <span>Explore Collection</span>
              <span>→</span>
            </div>
          </div>
          </NavLink>
        </div>

        {/* RIGHT CARD */}
        <div className="relative overflow-hidden group cursor-pointer h-[350px] sm:h-[450px]">

            <NavLink to={'/collection'}>
          <img
            src={assets.man_wearing_watch} alt="watch"
            className="w-full h-full object-cover transition-transform duration-[700ms] ease-in-out group-hover:scale-[1.04]"
          />

          <div className="absolute inset-0 bg-black/10 group-hover:bg-black/10 transition-all duration-[700ms] ease-in-out flex flex-col justify-end p-6 sm:p-8 text-white">
            <p className="text-xs tracking-wide opacity-80">WEAR PROFESSIONAL</p>
            <h2 className="text-xl sm:text-2xl font-medium mt-2">
              Fashion Meets Function In Every Tick.
            </h2>

            <div className="mt-4 flex items-center gap-2 text-sm opacity-90">
              <span>Shop Watches</span>
              <span>→</span>
            </div>
          </div>
          </NavLink>
        </div>

      </div>
    </div>
  )
}

export default Essential
