import React from 'react'
import Navbar from './Navbar'
import Homee from './Homee'
import Benefits from './Benefits'
import Tutorials from './Tutorials'
import AboutUs from './AboutUs'
import Services from './Services'

const Index = () => {
  return (
    <div>
        <Navbar/>
        <Homee/> 
        <Benefits/>
        <Tutorials/>
        <AboutUs/>
        <Services/>
    </div>
  )
}

export default Index