import React from 'react'
import { Link } from 'react-router-dom'

const BookingPage = () => {
    return (
        <div>
            <div className='bgImg_BookingPage'>
                <h1 className='text-start ms-5 allImgBg_Heading'>de Alara hotel </h1>
                <h3 className='text-start ms-5'>Location-Goa,</h3>
            </div>
            <div className='container p-4 formClass mt-5'>
                <h6 className='headingBg_bookingPage p-3 fw-bolder text-dark'>Serach for Availabilty</h6>
                <div className='row'>
                    <form className="row mt-4 mb-3 ">
                        <div className="col-lg-3 formDisplay">
                            <label>Check In</label>
                            <input type="date" className="form-control formInput_Width border border-5" />
                        </div>
                        <div className="col-lg-3  formDisplay">
                            <label>Check Out</label>
                            <input type="date" className="form-control formInput_Width border border-5" id="" placeholder="" />
                        </div>
                        <div className="col-lg-3  formDisplay">
                            <label>Rooms</label>
                            <select className='form-control p-2 border border-5 formInput_Width '>
                                <option value=''>-- Select Room --</option>
                                <option value='royalRoom'>Royal Room</option>
                                <option value='Delux Room'>Delux Room</option>
                                <option value='Double Room'>Double Room</option>
                                <option value='Single Room'>Single Room</option>
                            </select>
                        </div>
                        <div className="col-lg-3 ">
                            <Link type='btn' className="btn headingBg_bookingPage  text-uppercase mt-1 w-75 p-2 text-dark fw-bolder">Search</Link>
                        </div>
                    </form>
                </div>
                <div className='mt-2 '>
                    <div className=" accordion-flush" id="accordionFlushExample">
                        <div className="accordion-item mt-5 ">
                            <h2 className="accordion-header" id="flush-headingOne">
                                <button className="accordion-button collapsed  fw-bolder " type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                    Hotels Rooms
                                </button>
                            </h2>
                            <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                                <div className="accordion-body">rooms</div>
                            </div>
                        </div>
                        <div className="accordion-item mt-3 ">
                            <h2 className="accordion-header" id="flush-headingTwo">
                                <button className="accordion-button collapsed  fw-bolder" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                                    Cancelation Policy
                                </button>
                            </h2>
                            <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                                <div className="accordion-body">
                                    <ul className='fw-bolder'>
                                        <li>Non Refundable</li>
                                    </ul></div>
                            </div>
                        </div>
                        <div className="accordion-item mt-3">
                            <h2 className="accordion-header" id="flush-headingThree">
                                <button className="accordion-button collapsed fw-bolder" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                                     Check In/Out Policy
                                </button>
                            </h2>
                            <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                                <div className="accordion-body">
                                    <ul className='fw-bolder list-unstyled'>
                                        <li>Check In Time:</li>
                                        <li>Check Out Time:</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BookingPage
