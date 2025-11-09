import React from 'react'
import Footer from './Footer'
import Product from './ProductSection'
import Myprofile from './MyProfile/Myprofile'
import Jumbotron from './Jumbotron'
import Benefit from './Benefit/Benefit'
import Header from './Header'

const LandingPage = () => {
  return (
    <div classname='flex flex-col gap-24'>
      <Header/>
      <Jumbotron/>
      <Benefit />
      <Myprofile />
      <Product />
      <Footer />
    </div>
  )
}

export default LandingPage
