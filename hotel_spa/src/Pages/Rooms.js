import React from 'react'
import { Link } from 'react-router-dom'
import Services from '../components/Services'
import HotelRooms6 from '../assets/images/HotelRooms6.jpg'
import '../assets/css/style.css'



const Rooms = () => {
  return (
    <>
      <div className='container mt-5'>
        <div className='row'>
          <h2 >Delux Rooms</h2>
          <div className='col-lg-6 mt-5'>
            <div class="card" >
              <img src={HotelRooms6} class="card-img-top" alt="hotelRooms6"/>
            </div>
          </div>
          <div className='col-lg-6'>
            <Services />
          </div>
        </div>
        <Link to='/booking_engine' type='btn' className='btn border border-secondary  rounded-5 p-2 transitionEffect_BookBtn fw-bolder'>Book Now </Link>
      </div>
    </>
  )
}

export default Rooms;
