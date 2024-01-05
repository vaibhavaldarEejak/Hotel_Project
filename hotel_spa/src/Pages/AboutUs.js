import React from 'react'
import { Link } from 'react-router-dom'
import '../assets/css/style.css'
import HotelCardAbout from '../components/HotelCardAbout'
import ServicesCardComp from '../components/ServicesCardComp'



const AboutUs = () => {
  return (
    <>
      <div className='bgImg_AboutPage mb-4 pt-5'>
        <h1 className='allImgBg_Heading align-item-center'>About</h1>
        <span className='fs-5'><Link to='/home' className='text-white text-decoration-none'>Home</Link >/About</span>
      </div>
      <div className='container-fluid mt-3'>
        <div className='row text-center mt-5'>
          <p className='fs-4'>About Us</p>
          <h2 className='aboutus_HeadingHotel'>de Alara Prestige Inn</h2>
        </div>
        <div className='row'>
          <HotelCardAbout />
        </div>
      </div>
    </>
  )
}

export default AboutUs
