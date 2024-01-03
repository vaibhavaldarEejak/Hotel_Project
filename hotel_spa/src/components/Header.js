import React from 'react';
import { Link } from 'react-router-dom'


import deAlaraLogo from '../assets/images/deAlaraLogo.png'
import '../assets/css/style.css';

const Header = () => {
    return (
        <div className='Header'>
            <nav className="container-fluid navbar navbar-expand-lg navbar-dark ">
                <div className="container-fluid ">
                    <Link to='/home' className="navbar-brand  ms-5" ><img src={deAlaraLogo} alt='logo' width='100' /></Link>
                    <button className="navbar-toggler bg-primary" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mx-auto mb-2 mb-lg-0 text-uppercase ">
                            <li className="nav-item">
                                <Link className="nav-link  px-5 text-dark fw-bolder active" aria-current="page" to='/home'>Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link px-5 text-dark fw-bold   " aria-current="page" to='/aboutus'>About</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link px-5 text-dark fw-bold  " to="/rooms" >Rooms</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link  px-5 text-dark fw-bold  " to="/contact" >Contact Us</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link px-5 border border rounded-pill text-dark fw-bolder text-uppercase transitionEffect_headerBookbtn  " to="/booking_engine" >Book to Stay</Link>
                            </li>
                        </ul>

                        {/* <form className="d-flex"> */}
                        <span>
                            <i className="fa fa-user-circle-o text-danger fs-5 ps-5"></i>
                            <Link to='/login' className='text-decoration-none text-dark fw-bolder ms-2' data-toggle="modal" data-target="#myModal">
                                Sign In or Register
                            </Link>
                        </span>
                    </div>
                </div>
            </nav>
        </div>

    )
}
export default Header;