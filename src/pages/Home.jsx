import React from 'react'
import Hero from '../components/Hero'
import Faq from '../components/Faq'
import Traders from '../components/Traders'
import Tab from '../components/Tab'
import Soni from '../components/Soni'
import Intervals from '../components/Intervals'
import Blog from '../components/Blog'
import Investment from '../components/Investment'

const Home = () => {
  return (
    <>
     <Hero/>
     <Faq/> 
     <Traders/>
     <Tab/>
     <Soni/>
     <Intervals/>
     <Blog/>
     <Investment/>
    </>
  )
}

export default Home 