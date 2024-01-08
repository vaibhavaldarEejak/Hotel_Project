import React, { useState, useEffect } from 'react'
// import axios from 'axios';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import HotelRooms1 from '../assets/images/HotelRooms1.jpg'
import HotelRooms2 from '../assets/images/HotelRooms2.jpg'
import HotelRooms8 from '../assets/images/HotelRooms8.jpg'
import HotelRooms4 from '../assets/images/HotelRooms4.jpg'
import HotelRooms5 from '../assets/images/HotelRooms5.jpg'
import HotelRooms7 from '../assets/images/HotelRooms7.jpg'

const Card = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  const roomsImgData = [
    {
      id: 1,
      src: HotelRooms1,
      title: "DELUX ROOM",
      price: "89$ / Night"
    },
    {
      id: 2,
      src: HotelRooms2,
      title: "DELUX ROOM",
      price: "89$ / Night"
    },
    {
      id: 3,
      src: HotelRooms7,
      title: "DELUX ROOM",
      price: "89$ / Night"
    },
    {
      id: 3,
      src: HotelRooms5,
      title: "DELUX ROOM",
      price: "89$ / Night"
    },
    {
      id: 5,
      src: HotelRooms4,
      title: "DELUX ROOM",
      price: "89$ / Night"
    },
    {
      id: 6,
      src: HotelRooms8,
      title: "DELUX ROOM",
      price: "89$ / Night"

    }
  ]

  return (
    <>
      <div className='container mt-5'>
        <div className='row d-flex-wrap '>
          <h5 className='text-center'>Delux Rooms</h5>
          <Slider {...settings}>
            {roomsImgData.map((item, id) => (
              <div className='col-lg-4' key={id}>
                <div className="card  mx-auto flex-wrap">
                  <img src={item.src} className="card-img-top" alt={item.id} />
                  {/* <div className="card-body text-center p-3 fs-4">
                    <p className='card-text'>{item.title}</p>
                    <p className='mt-3 card-text'>{item.price}</p>
                  </div> */}
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </>
  )
}
export default Card;
