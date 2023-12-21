import React from 'react';
import slider from '../assets/slider.jpg'
import Card from '../components/Card';
import roomdeal from '../assets/room-deal.jpg';

const Home = () => {
  return (
    <div>
      <div>
        <img src={slider} className='w-100 mb-5' alt='slider' height='450' />
      </div>
      <div>
        <h1 className='text-uppercase text-dark fw-bolder text-center mt-4 ourRoomHeading'>Our Rooms</h1>
      </div>
      <div className='text-center mt-4'>
        <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, reprehenderit!</h3>
      </div>

      <Card />
        <img className='w-100 h-25 mt-5' src={roomdeal} alt='roomdealImg' /> 
    </div>

  )
}

export default Home;
