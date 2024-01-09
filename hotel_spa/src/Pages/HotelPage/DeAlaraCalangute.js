import React from 'react'
import Card from '../../components/Card';
import Services from '../../components/Services';
import calanguteHotel from '../../assets/images/calanguteHotel.jpg'

const DeAlaraCalangute = () => {
  return (
    <>
      <div className='container-fluid'>
        <img className='w-100' src={calanguteHotel} alt="img"/>
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
