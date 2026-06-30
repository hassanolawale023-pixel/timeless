import React from 'react'
import Hero from '../components/Hero'
import NewArrival from '../components/NewArrival'
import SubHero from '../components/SubHero'
import Sale from '../components/Sale'
import Essential from '../components/Essential'
import Testimonials from '../components/Testimonials'
import BlogSection from '../components/BlogSection'
import ViewSection from '../components/ViewSection'
import OurPolicy from '../components/OurPolicy'
import NewsLetterBox from '../components/NewsLetterBox'
import Footer from '../components/Footer'



const Home = () => {
  return (
    <div>
      <Hero/>
      <NewArrival/>
      <SubHero/>
      <Sale/>
      <Essential/>
      <Testimonials/>
      <BlogSection/>
      <ViewSection/>
      <OurPolicy/>
      <NewsLetterBox/>
      
     
    </div>
  )
}

export default Home
