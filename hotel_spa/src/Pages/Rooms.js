import React from 'react';
import { Link } from 'react-router-dom';
import Services from '../components/Services';
import HotelRooms1 from '../assets/images/HotelRooms1.jpg';
import '../assets/css/style.css';



const Rooms = () => {
  const roomsImg = [
    {
      id: 1,
      src: HotelRooms1,
    }
  ]
  return (
    <>

      <div className='bgImg_Contact mb-4 pt-5'>
        <h1 className='pt-5 align-item-center'>Rooms</h1>
        <span className='fs-5'><Link to='/home' className='text-white text-decoration-none'>Home</Link >/ Rooms</span>
      </div>
      <div className='container mt-5 '>
        <h3 className='roomsSec_Heading'>Delux Room</h3>
        <div className='row mt-5 d-flex-wrap'>
          {roomsImg.map((item, id) => (
            <div className='col-lg-6' key={id}>
              <div className='row'>
                  <div className="card border border-0 mb-3 mt-3 mb-5">
                    <img src={item.src} className="card-img-top mb-4" alt={item.id} />
                  </div>
              </div>
            </div>
            
          ))}
          <div className='col-lg-6'>
              <div className='row'>
                  <div className=" mb-3 mt-3  mb-5">
                    <Services />
                  </div>
              </div>
            </div>
        </div>
      <Link to='/booking_engine' type='btn' className='btn border borde rounded-pill w-25 p-3 transitionEffect_BookBtn fw-bolder'>Book Now </Link>
      </div>
    </>
  )
}

export default Rooms;
