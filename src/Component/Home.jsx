import React from 'react'
import Navbar from './Navbar'
import Slider from './Slider'
import Visiting from './Visiting'
import Tripplan from './Tripplan'
import Footer from './Footer'
import Section2 from './Section2'
import Homepage from './homepage'
import Book from './Book'
import Crispy from './Crispy'
import Festival from './festival'

const Home = () => {
  return (
    <div className='bg-base-100 dark:bg-slate-100    '>
      <Navbar/>
      {/* <Slider/> */}
      <Homepage/>
      {/* <Book/> */}
      <Festival/>
      <Crispy/>
      
      {/* <Section2/> */}
      {/* <Visiting h1="Must Visit Destinations"/> */}
      {/* <Tripplan/> */}
      <Footer/>
      {/* <Banner/> */}
    </div>
  )
}

export default Home