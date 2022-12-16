import React from 'react'
import Servicecomp from '../components/Servicecomp'
import Homeheader from '../components/Homeheader'
import HomeStats from '../components/Homestats'
import Brands from '../components/Brands'
import Footer from '../components/Footer'



const Home = () => {
  return (
    <div>
    <Homeheader/>
    <Servicecomp/>
    <HomeStats/>
    <Brands/>
    <Footer/>
    
    </div>
  )
}

export default Home
