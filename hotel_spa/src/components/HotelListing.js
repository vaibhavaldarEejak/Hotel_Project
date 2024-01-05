import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const HotelListing = () => {
    const [hotelList, setHotelList] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:4000/HotelListing')
            .then((res) => {
                console.log(res.data)
                setHotelList(res.data)
            }
            )
    }, [])

    return (
        <>
            <div className='container'>
                <div className='row '>
                    {hotelList.map((item, id) => (
                        <div className='col-lg-12 mt-5' key={id}>
                            <div className="card cardImg border">
                                <div className="row g-0">
                                    <div className="col-md-4">
                                        <img src={item.src}  className="img-fluid rounded-start" alt="img" />
                                    </div>
                                    <div className="col-md-7">
                                        <div className="card-body">
                                            <Link to='/hotels' className='text-decoration-none fs-3'>{item.name}</Link>
                                            <p className="card-text">{item.location}</p>
                                        <img src={item.rating}  className="img-fluid rounded-start" alt="img" width='70'/>
                                           <div className=' mt-3 border border-0'>
                                            <Link to='/booking_engine' className='btn btn-outline-secondary'>Book Now</Link>
                                           </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default HotelListing;
