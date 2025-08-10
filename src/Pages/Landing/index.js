import React from 'react'
import Footer from './Footer'
import Product from './ProductSection'
import Myprofile from './MyProfile/Myprofile'
import Benefit from './Benefit/Benefit'

const LandingPage = () => {
  return (
    <div>
      <Benefit />
      <Myprofile />
      <Product />
      <Footer />
    </div>
  )
}

export default LandingPage
