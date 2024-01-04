import React, { useEffect, useState } from 'react'

import hotelRooms1 from '../assets/images/HotelRooms1.jpg'

import { Link } from 'react-router-dom'

const HotelCardAbout = () => {
    const hotelsImg = [
        { src: hotelRooms1 }
    ]
    return (
        <div>
            <div>
                <div className='container mt-5 mb-5'>
                    <div className='row mt-5 align-items-center'>
                        {hotelsImg.map((item, id) => (
                            <div className='col-lg-6' key={id} >
                                <div className="card mb-3 border border-2 mt-3 mb-5 justify-content-center" key={id}>
                                    <img src={item.src} className="card-img-top" alt='img' />
                                </div>
                            </div>
                        ))}
                        <div className='col-lg-6 ps-5 fs-5'>
                            <p>Bestowing excellent hospitality to its every category of guests, dee Alara Prestige Inn, Resort reflects the culture and ethos of its location. With the perfect fusion of contemporary decor in the sumptuous interiors of the resort, the resort has set the bar of services much higher than the expectations of its guests. The concept of intuitive anticipatory service makes the guest experience unalloyed. The resort welcomes and offers hospitality to guests coming from all around the world. We are focussed on delivering high quality, the best value, and superior customer service for an ultimate and intimate travelling experience.
                              </p>
                        </div>
                    </div>
                    <Link to='/booking_engine' type='btn' className='btn border border- rounded-pill p-3 w-25 transitionEffect_BookBtn fw-bolder'>Book Now </Link>
                </div>
            </div>
        </div>
    )
}

export default HotelCardAbout;
