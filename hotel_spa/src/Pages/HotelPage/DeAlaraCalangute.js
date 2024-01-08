import React from 'react'
import Card from '../../components/Card';
import Services from '../../components/Services';
import { Link } from 'react-router-dom';

const DeAlaraCalangute = () => {
  return (
    <>
      <div className='container-fluid'>
        <img className='w-100' src='https://images.unsplash.com/photo-1608198399988-341f712c3711?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt="img" height="400"/>
      </div>
      <div className='container'>
        <h4 className='text-center mt-5'>De Alara,Calangute</h4>
        <h3 className='text-center aboutus_HeadingHotel'>Discover Our Rooms</h3>
        <div className='row'>
          <div className='col-lg-6'>
            <Card />
          </div>
          <div className='col-lg-6 mt-5'>
            <Services />
          </div>
        </div>
      </div>

    </>
  )
}

export default DeAlaraCalangute;
