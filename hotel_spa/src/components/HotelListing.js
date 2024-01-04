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
            {/* <div className='container mt-5  '>
                <div className='row mt-5'>
                    <div className='col-lg-6'>
                    <table className='table table-border cardImg' >
                        <thead >
                        </thead>
                         <tbody className=' transitionEffect_HotelList'>
                            {hotelList.map((item,id)=>(
                                <tr key={id} className="p-2">
                                    <td className='fs-4'>{item.name}</td>
                                    <td className=''><img src={item.src} alt='' width="300"/></td>
                                </tr>
                            ))}
                         </tbody>
                    </table>
                    </div>
                </div>
            </div> */}



            <div className='container'>
                <div className='row'>
                    {hotelList.map((item, id) => (
                        <div className='col-lg-12 mt-5' key={id}>
                            <div className="card">
                                <div className="row g-0">
                                    <div className="col-md-3">
                                        <img src={item.src}  className="img-fluid rounded-start" alt="img" />
                                    </div>
                                    <div className="col-md-8">
                                        <div className="card-body">
                                            <h5 className="card-title fs-4">{item.name}</h5>
                                            <p className="card-text">{item.location}</p>
                                            <Link to='/booking_engine' className='btn bg-primary'>Book Now</Link>
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
