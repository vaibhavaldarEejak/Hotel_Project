import React, { useEffect, useState } from 'react'
import axios from 'axios';
import {Link} from 'react-router-dom'

const HotelCardAbout = () => {
    const [hotelImg,setHotelImg]=useState([]);

    useEffect(()=>{
        axios.get(' http://localhost:4000/hotelsImg')
        .then(res=>{
            // console.log(res)
            setHotelImg(res.data)
         })
        .catch(err=>console.log(err))
    },[])
    return (
        <div>
            <div>
                <div className='container mt-5 mb-5'>
                    <div className='row mt-5 align-items-center'>
                        {hotelImg.map((item, id) => (
                            <div className='col-lg-6' key={id} >
                                <div className="card mb-3 border border-2 mt-3 mb-5 justify-content-center" key={id}>
                                    <img src={item.src} className="card-img-top" alt='img' />
                                </div>
                            </div>
                        ))}
                        <div className='col-lg-6'>
                           <p>dee Fellows Riverside Resortis a luxury resort with a stylish elegance  here contemporary style, new age amenities, and essential services combine to give travellers a harmonious experience. Our resort has all the services that are needed, and all the essentials are in place. Innovation in services served at the resort and benchmarked products soaked in the essence of its location forms the basis of our commitment to responsible luxury that creates the milestones of our resort’s value proposition.</p>
                        </div>
                    </div>
                        <Link to='/booking_engine' type='btn' className='btn border border- rounded-pill p-3 w-25 transitionEffect_BookBtn fw-bolder'>Book Now </Link>
                </div>
            </div>
        </div>
    )
}

export default HotelCardAbout;
