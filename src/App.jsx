import React from 'react'
import Navbar from './components/Navbar'
import { Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import Collection from './Pages/Collection'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Cart from './Pages/Cart'
import Product from './Pages/Product'
import Login from './Pages/Login'
import Orders from './Pages/Orders'
import PlaceOrder from './Pages/PlaceOrder'
import { ToastContainer } from 'react-toastify'
import Category from './Pages/Category'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import SearchBar from './components/SearchBar'

const App = () => {
  return (
     <div className='bg-white w-full h-full overflow-x-hidden font-bricolage'>


      <ToastContainer/>



      <Navbar/>
      <SearchBar/>
      <ScrollToTop/>

      
      <Routes>
        <Route path='/' element={<Home/>}/>

        <Route path='/collection' element={<Collection/>}/>

        <Route path='/about' element={<About/>} />

          <Route path='/category' element={<Category/>} />

        <Route path='/contact' element={<Contact/>} />

        <Route path='/cart'element={<Cart/>} />

        <Route path='/product/:productId' element={<Product/>} />

        <Route path='/login' element={<Login/>}/>

        <Route path='/orders' element={<Orders/>}/>

        <Route path='/place-order' element={<PlaceOrder/>}/>


      </Routes>

      <Footer/>
    </div>
  )
}

export default App
