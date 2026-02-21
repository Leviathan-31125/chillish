import React from 'react'
import Product from './ProductSection/index.js'
import MissionSection from './MissionSection.js'
import Benefit from './Benefit/Benefit.js'
import AboutSection from './About/AboutSection.js'
import Myprofile from './MyProfile/MyProfile.js'

const LandingPage = () => {
  return (
    <div>
      <AboutSection />
      <MissionSection />
      <Myprofile />
      <Benefit />
      <Product />
    </div>
  )
}

export default LandingPage
