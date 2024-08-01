import { useState } from 'react'
import Hero from './components/hero/Hero'
import NavigationBar from './components/navigation_bar/NavigationBar'
import { Banner } from './components/banner/Banner'
import { Upcoming } from './sections/upcoming/Upcoming'
import { About } from './components/about/About'
// import './debugCSS.css'

function App() {
  return (
    <>
      <div className='container mx-auto flex-col grow max-w-full'>
        <NavigationBar/>
        <Banner/>
        <Hero/>
        <Upcoming/>
        <About/>
      </div>
    </>
  )
}

export default App
