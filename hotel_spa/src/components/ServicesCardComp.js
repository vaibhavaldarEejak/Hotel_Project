import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ServicesCardComp = () => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
    };


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
            <div className='container mt-5'>
                <div className='row mt-5 d-flex-wrap'>
                    <h2 className='text-center aboutus_HeadingHotel'>Our Services</h2>
                    <Slider {...settings}>
                        {serviceCard.map((item, id) => (
                            <div className='col-lg-3 p-3' key={id}>
                                <div className="card mb-3 mt-5 cardImg">
                                    <img src={item.image} className="card-img-to p-5 g" alt={item.id} height="200" />
                                    <div className="card-body text-center aboutus_HeadingHotel fw-bold fs-4 ">
                                        <p className='card-text'>{item.services}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>


        </>
    )
}

export default ServicesCardComp;
