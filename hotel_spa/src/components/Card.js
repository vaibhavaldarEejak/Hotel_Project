import React,{useState,useEffect} from 'react'
// import axios from 'axios';
import HotelRooms1 from '../assets/images/HotelRooms1.jpg'
import HotelRooms2 from '../assets/images/HotelRooms2.jpg'
import HotelRooms8 from '../assets/images/HotelRooms8.jpg'
import HotelRooms4 from '../assets/images/HotelRooms4.jpg'
import HotelRooms5 from '../assets/images/HotelRooms5.jpg'
import HotelRooms7 from '../assets/images/HotelRooms7.jpg'



const Card = () => {
   const roomsImgData=[
        {
          id:1,
          src: HotelRooms1,
          title: "DELUX ROOM",
          price: "89$ / Night"
        },
        {
            id:2,
            src: HotelRooms1,
            title: "DELUX ROOM",
            price: "89$ / Night"
          },
          {
            id:3,
            src: HotelRooms1,
            title: "DELUX ROOM",
            price: "89$ / Night"
          },
          {
            id:3,
            src: HotelRooms4,
            title: "DELUX ROOM",
            price: "89$ / Night"
          },
          {
            id:5,
            src: HotelRooms4,
            title: "DELUX ROOM",
            price: "89$ / Night"
          },
          {
            id:6,
            src: HotelRooms4,
            title: "DELUX ROOM",
            price: "89$ / Night"
           
          }
      ]

    return (
        <div className='container mt-5'>
            <div className='row mt-5 d-flex-wrap'>
               <h3 className='text-center aboutus_HeadingHotel'>Our Rooms</h3>
                {roomsImgData.map((item, id) => (
                    <div className='col-lg-4 mt-5' key={id}>
                        <div className="card mb-3 mt-3 p-2  mb-5 mx-auto cardImg">
                            <img src={item.src} className="card-img-top mb-4" alt={item.id}  />
                            <div className="card-body text-center p-3 fs-4">
                                <p>{item.title}</p>
                                <p className='mt-5 '>{item.price}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
export default Card;
