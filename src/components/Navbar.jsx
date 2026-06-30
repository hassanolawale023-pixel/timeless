import React, { useContext, useState } from 'react'
import { assets } from '../assets/myAssets/assets'
import { Link, NavLink,  } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext'

const Navbar = () => {

    const [visible, setVisible] = useState(false)
    const {setShowSearch, getCartCount} =useContext(ShopContext)
    

  return (
    <div className='flex items-center justify-between  font-sm fixed top-0 w-full left-0 z-50 Prata py-3  bg-black px-4'>

         <img onClick={()=>setVisible(true)} src={assets.menu_icon} className='w-5 cursor-pointer invert sm:hidden' alt="" />

        <Link to={'/'}> <img src={assets.LOGO} className='w-19 hidden md:block  ' alt="" /></Link>

       

    <ul className='hidden sm:flex gap-5 text-sm text-black'>

        <NavLink to={'/'} className='flex flex-col items-center gap-1'>
            <p className='text-gray-300'>Home</p>
            <hr className='w-2/4 border-none h-[2.5px] bg-blue-600 hidden'/>
            </NavLink>

            <NavLink to={'/category'} className='flex flex-col items-center gap-1'>
            <p className='text-gray-300'>Category</p>
            <hr className='w-2/4 border-none h-[2.5px] bg-blue-600 hidden'/>
            </NavLink>

             <NavLink to={'/about'} className='flex flex-col items-center gap-1'>
            <p className='text-gray-300'>About</p>
            <hr className='w-2/4 border-none h-[2.5px] bg-blue-600 hidden'/>
            </NavLink>

            <NavLink to={'/collection'} className='flex flex-col items-center gap-1'>
            <p className='text-gray-300'>Collection</p>
            <hr className='w-2/4 border-none h-[2.5px] bg-blue-600 hidden'/>
            </NavLink>

           

            <NavLink to={'/contact'} className='flex flex-col items-center gap-1'>
            <p className='text-gray-300'>Contact</p>
            <hr className='w-2/4 border-none h-[2.5px] bg-blue-600 hidden'/>
            </NavLink>

        </ul>

        <div className='flex items-center gap-6'>

             <img onClick={()=>setShowSearch(true)} src={assets.search_icon} className='w-5 cursor-pointer invert' alt="" />

          <Link to={'/cart'} className='relative'><img src={assets.cart_icon} className='w-5 cursor-pointer invert' alt="" />
          <p className='absolute right-[-5px] bottom-[-5px] w-4 text-center bg-white text-black leading-4 aspect-square rounded-full text-[8px] font-bold'>{getCartCount()}</p>
           
          </Link>  

        <div className='group relative' >
        <Link to={'/login'} >
            <img className='w-5 cursor-pointer invert ' src={assets.profile_icon} alt="" />
        </Link>

        <div className='group-hover:block hidden absolute dropdown-menu right-0 pt-4'>

            <div className='flex flex-col gap-2 w-36 py-3 px-5 bg-slate-200 text-black rounded'>
                <p className='cursor-pointer pl-2 border-l-2 border-transparent hover:border-blue-600 transition'>My Profile
                </p> 
                
                <p className='cursor-pointer pl-2 border-l-2 border-transparent hover:border-blue-600 transition'>Orders

                </p>
                
                <p className='cursor-pointer pl-2 border-l-2 border-transparent hover:border-blue-600 transition'>Logout
                </p>
               
            </div>
             </div>

          </div>

         
        </div>

        <div className={`absolute top-0 right-0 bottom-0 h-screen overflow-hidden bg-white transition-all ${visible ? 'w-full' : 'w-0'}`}>
            <div className='flex flex-col text-back bg-white h-screen'>
                <div onClick={()=>setVisible(false)} className='flex items-center gap-4 p-3 cursor-pointer'>
                    <img src={assets.dropdown_icon} className='h-4 rotate-180' alt="" />
                    <p>Back</p>
                </div>

                <NavLink onClick={()=>setVisible(false)} className={({ isActive }) =>
                `py-3 pl-6 border-l-5 ${
                isActive ? "border-blue-600" : "border-transparent"
                    }`
                } to='/' >Home</NavLink>

                <NavLink onClick={()=>setVisible(false)}  className={({ isActive }) =>
                `py-3 pl-6 border-l-5 ${
                isActive ? "border-blue-600" : "border-transparent"
                    }`
                }
                 to='/about' >About</NavLink>

                <NavLink onClick={()=>setVisible(false)} className={({ isActive }) =>
                `py-3 pl-6 border-l-5 ${
                isActive ? "border-blue-600" : "border-transparent"
                    }`
                } to='/category'>Category</NavLink>

                <NavLink onClick={()=>setVisible(false)} className={({ isActive }) =>
                `py-3 pl-6 border-l-5 ${
                isActive ? "border-blue-600" : "border-transparent"
                    }`
                } to='/collection'>Collection</NavLink>

                

                <NavLink onClick={()=>setVisible(false)} className={({ isActive }) =>
                `py-3 pl-6 border-l-5 ${
                isActive ? "border-blue-600" : "border-transparent"
                    }`
                }to='/contact'>Contact</NavLink>

               


            </div>

        </div>
    
    </div>
  )
}

export default Navbar
