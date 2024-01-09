import React from 'react'
import Card from '../../components/Card';
import Services from '../../components/Services';
import { Link } from 'react-router-dom';
import bagaHotel1 from '../../assets/images/bagaHotel1.jpg'


const DeAlaraBaga = () => {
  return (
    <>
      <div className='container-fluid '>
        <img className='w-100' src={bagaHotel1} alt="img" />
      </div>
      <div className='container'>
        <h4 className='text-center mt-5'>De Alara,Baga</h4>
        <h3 className='text-center aboutus_HeadingHotel'>Discover Our Rooms</h3>
        <div className='row'>
          <div className='col-lg-6'>
            <Card />
          </div>
          <div className='col-lg-6 mt-5'>
            <Services />
          </div>
        </div>
        <div className='container'>
          <Link to='/booking_engine' type='btn' className='btn btn-outline-secondary rounded-pill w-25 p-3 transitionEffect_BookBtn fw-bolder mt-5 mb-5'>Book Now </Link>
        </div>

      </div>

    </>
  )
}

export default DeAlaraBaga;
