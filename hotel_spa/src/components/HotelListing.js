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
                            <div className="card cardImg">
                                <div className="row g-0">
                                    <div className="col-md-3">
                                        <img src={item.src}  className="img-fluid rounded-start" alt="img" />
                                    </div>
                                    <div className="col-md-8 ">
                                        <div className="card-body ">
                                            <h5 className="card-title fs-4">{item.name}</h5>
                                            <p className="card-text">{item.location}</p>
                                            <Link to='/booking_engine' className='btn bg-secondary'>Book Now</Link>
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
