import React from 'react'
import High_Slider from '../Components/Components_Home/High_Slider'
import Servicios from '../Components/Components_Home/Servicios'
import Proyectos from '../Components/Components_Home/Proyectos'
import Aboutme from '../Components/Components_Home/Aboutme'
import Reviews from '../Components/Components_Home/Reviews'

const Home = () => {
  return (
    <div>
      <High_Slider/>
      <Servicios/>
      <Proyectos/>
      <Aboutme/>
      <Reviews/>      
    </div>
  )
}

export default Home