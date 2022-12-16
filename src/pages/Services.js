import React from 'react'

import Brands from '../components/Brands'
import Serviceheader from '../components/Serviceheader'
import Testimonials from '../components/Testimonials'
import Serviceinfo from '../components/Serviceinfo'
import Footer from '../components/Footer'

const Services = () => {
  return (
    <div>
      <Serviceheader/>
     <Serviceinfo/>
     <Testimonials/>
      <Brands/>
    
      <Footer/>
    </div>
  )
}

export default Services
