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
                <img src='https://t4.ftcdn.net/jpg/00/09/21/15/360_F_9211505_d4hxfNtPeTfgt7AeGmoO7u79P2hwxkoQ.jpg' className="d-block w-100" alt="" height="450" />
              </div>
              <div className="carousel-item" data-bs-interval="2000">
                <img src='https://as1.ftcdn.net/v2/jpg/00/87/67/74/1000_F_87677449_Ia7kriWg3RTu8WKEDzkuNV2KMtfBeV1m.jpg' className="d-block w-100" alt="" height="450"/>
              </div>
              <div className="carousel-item" data-bs-interval="2000">
                <img src='https://q-xx.bstatic.com/xdata/images/hotel/max1024x768/90776404.jpg?k=84c6aeeb0e88c32a02fd52df8d1a80d0db8591bd1daff913ec148365e67cd29a&o=' className="d-block w-100" alt="" height="450"/>
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

        <h3 className='text-uppercase fw-bolder text-center mt-5 ourRoomHeading'>Popular hotels</h3>
        <div className='text-center mt-4'>
          {/* <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, reprehenderit!</h4> */}
        </div>
        <HotelListing />
        {/* <img className='w-100 h-25 mt-5' src={roomdeal} alt='roomdealImg' /> */}
     
    </div>
  )
}

export default Home;
