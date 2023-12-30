import React from 'react'
import { Link } from 'react-router-dom'
import '../assets/css/style.css'
import HotelCardAbout from '../components/HotelCardAbout'
import Services from '../components/Services'


const AboutUs = () => {
  return (
    <div>
      <div className='container-fluid'>
        <img src='https://as1.ftcdn.net/v2/jpg/00/29/13/38/1000_F_29133877_bfA2n7cWV53fto2BomyZ6pyRujJTBwjd.jpg' alt='' height='350' className='w-100' />
      </div>
      <div className='container mt-3'>
        <div className='row text-center mt-3'>
          <p>About Us</p>
          <h2 className='aboutus_HeadingHotel'>dee fellows Riverside Resort</h2>
        </div>
      </div>
       <div className='row'>
        <HotelCardAbout />
       </div>
    </div>
  )
}

export default AboutUs
