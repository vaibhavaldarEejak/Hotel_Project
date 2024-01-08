import React from 'react';
import { Link } from 'react-router-dom';
import Services from '../components/Services';
import DeAlaraBaga from './HotelPage/DeAlaraBaga'
import DeAlaraCalangute from './HotelPage/DeAlaraCalangute'


import HotelRooms1 from '../assets/images/HotelRooms1.jpg';
import '../assets/css/style.css';




const Hotel = () => {
  return (
    <>
      {/* <div className='bgImg_Contact mb-4 pt-5'>
        <h1 className='allImgBg_Heading align-item-center'>Hotels</h1>
        <span className='fs-5'><Link to='/home' className='text-white text-decoration-none'>Home</Link >/ Rooms</span>
      </div> */}
      <DeAlaraBaga />
      <DeAlaraCalangute />
      <div className='container'>
        <Link to='/booking_engine' type='btn' className='btn border borde rounded-pill w-25 p-3 transitionEffect_BookBtn fw-bolder mt-5'>Book Now </Link>
      </div>
    </>
  )
}

export default Hotel;
