import React from 'react'
import High_Slider from '../Components/Components_Home/High_Slider'
import Servicios_Review from '../Components/Components_Home/Servicios_Review'
import Proyectos_Preview from '../Components/Components_Home/Proyectos_Preview'
import Aboutme from '../Components/Components_Home/Aboutme'
import Reviews from '../Components/Components_Home/Reviews'

const Home = () => {
  return (
    <div className='bg-white'>
      <High_Slider/>
      <Servicios_Review/>
      <Proyectos_Preview/>
      <Aboutme/>
      <Reviews/>      
    </div>
  )
}

export default Home