import React from 'react'
import Navbar from './Navbar'
import Hero from './Hero'
import OurBestSeller from './OurBestSeller'
import ManWomen from './ManWomen'
import MenSweaters from './MenSweaters'
import Footer from './Footer'
import Categories from './Categories'

const Home = () => {
  return (
    <>
    <Navbar/>
    <Hero/>

    <Categories/>
    <OurBestSeller/>
    <ManWomen/>
    <MenSweaters/>
    <Footer/>
    </>
  )
}

export default Home