import React from 'react';
import { Link } from 'react-router-dom'
import HotelListing from '../components/HotelListing';



const Home = () => {
      
  return (
    <div>
        <div>
          <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
              <div className="carousel-item active" data-bs-interval="2000">
                <img src='https://gaviaspreview.com/wp/boliin/wp-content/uploads/2023/01/slider-2.jpg' className="d-block w-100" alt=""  />
              </div>
              <div className="carousel-item" data-bs-interval="2000">
                <img src='https://gaviaspreview.com/wp/boliin/wp-content/uploads/2023/01/slider-2.jpg' className="d-block w-100" alt="" />
              </div>
              <div className="carousel-item" data-bs-interval="2000">
                <img src='https://gaviaspreview.com/wp/boliin/wp-content/uploads/2023/02/slider-1.jpg' className="d-block w-100" alt="" />
              </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>

        </div>

        <h3 className='text-uppercase fw-bolder text-center mt-5 ourRoomHeading'>Our Hotel</h3>
        <div className='text-center mt-4'>
          {/* <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, reprehenderit!</h4> */}
        </div>
        <HotelListing />
        {/* <img className='w-100 h-25 mt-5' src={roomdeal} alt='roomdealImg' /> */}
     
    </div>
  )
}

export default Home;
