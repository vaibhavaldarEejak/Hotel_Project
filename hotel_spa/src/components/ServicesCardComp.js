import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ServicesCardComp = () => {
    const [serviceCard, setServiceCard] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:4000/servicesCard')
            .then(res => {
                // console.log(res)
                setServiceCard(res.data)
            })
            .catch(err => console.log(err))
    })

    return (
        <>
            <div className='container mt-5 '>
                <div className='row mt-5 d-flex-wrap'>
                    <h2 className='text-center aboutus_HeadingHotel'>Our Sevrices</h2>
                    {serviceCard.map((item, id) => (
                        <div className='col-lg-3' key={id}>
                            <div className="card mb-3 mt-3  border border-1">
                                <img src={item.image} className="card-img-to p-5" alt={item.id} height="200" />
                                <div className="card-body text-center fw-bold fs-4">
                                    <p>{item.services}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default ServicesCardComp
