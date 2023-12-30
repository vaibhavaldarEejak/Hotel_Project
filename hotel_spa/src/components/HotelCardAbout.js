import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Services from './Services';
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
                    <div className='row mt-5'>
                        {hotelImg.map((item, id) => (
                            <div className='col-lg-7' key={id} >
                                <div className="card mb-3 border border-2 mt-3 mb-5 justify-content-center" key={id}>
                                    <img src={item.src} className="card-img-top" alt='img' />
                                </div>
                            </div>
                        ))}
                        <div className='col-lg-4 ms-3'>
                            <Services />
                        </div>
                    </div>
                        <Link to='/booking_engine' type='btn' className='btn btn-primary rounded-5 p-2'>Book Now </Link>
                </div>
            </div>
        </div>
    )
}

export default HotelCardAbout
