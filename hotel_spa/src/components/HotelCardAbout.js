import React, { useEffect, useState } from 'react'

import hotelRooms1 from '../assets/images/HotelRooms1.jpg'
import hotelRooms4 from '../assets/images/HotelRooms4.jpg'


import { Link } from 'react-router-dom'

const HotelCardAbout = () => {
    const hotelsImg = [
        { src: hotelRooms1, roomInfo:"Bestowing excellent hospitality to its every category of guests, dee Alara Prestige Inn, Resort reflects the culture and ethos of its location. With the perfect fusion of contemporary decor in the sumptuous interiors of the resort, the resort has set the bar of services much higher than the expectations of its guests. The concept of intuitive anticipatory service makes the guest experience unalloyed. The resort welcomes and offers hospitality to guests coming from all around the world. We are focussed on delivering high quality, the best value, and superior customer service for an ultimate and intimate travelling experience." },
        { src: hotelRooms4, roomInfo:"Bestowing excellent hospitality to its every category of guests, dee Alara Prestige Inn, Resort reflects the culture and ethos of its location. With the perfect fusion of contemporary decor in the sumptuous interiors of the resort, the resort has set the bar of services much higher than the expectations of its guests. The concept of intuitive anticipatory service makes the guest experience unalloyed. The resort welcomes and offers hospitality to guests coming from all around the world. We are focussed on delivering high quality, the best value, and superior customer service for an ultimate and intimate travelling experience." },

    ]
    return (
        <div>
        
                <div className='container mt-5 mb-5'>
                    <div className='row '>
                    {hotelsImg.map((item, id) => (
                        <div className='col-lg-12 mt-5' key={id}>
                            <div className="card border border-0">
                                <div className="row g-0">
                                    <div className="col-md-6">
                                        <img src={item.src}  className="img-fluid rounded-start" alt="img" />
                                    </div>
                                    <div className="col-md-6 ">
                                        <div className="card-body ">
                                            <p className="card-text">{item.roomInfo}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                    <Link to='/booking_engine' type='btn' className='btn border border- rounded-pill p-3 w-25 transitionEffect_BookBtn fw-bolder mt-5'>Book Now </Link>
                </div>
        </div>
    )
}

export default HotelCardAbout;
