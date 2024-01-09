import React from 'react';
import { Link } from 'react-router-dom'
import deAlaraLogo from '../assets/images/deAlaraLogo.png'
import '../assets/css/style.css';

const Header = () => {
    return (
        <div className='Header'>
    
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container">
                    <Link to='/home' className="navbar-brand" ><img src={deAlaraLogo} alt='logo' width='100' /></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse " id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link px-3 fw-bold text-dark" aria-current="page" to="/home">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link px-3 fw-bold text-dark" aria-current="page" to="/aboutus">About</Link>
                            </li>

                            <li className="nav-item dropdown">
                                <Link className="nav-link dropdown-toggle px-3 fw-bold text-dark dropbtn" to="/hotels" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Hotels
                                </Link>
                                <ul className="dropdown-menu dropdown-content" aria-labelledby="navbarDropdown">
                                    <li><Link to='/dealara_Baga' className="dropdown-item dropDwnItm">De alara,Baga</Link></li>
                                    <li><Link to='/dealara_Calangute' className="dropdown-item dropDwnItm">De alara,Calangute</Link></li>
                                    <li><Link to='/hotels' className="dropdown-item dropDwnItm">De alara,Kolhapur</Link></li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link px-3  fw-bold text-dark" to="/contact" >Contact Us</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link px-3 text-dark  rounded-pill btn btn-outline-secondary fw-bolder text-uppercase transitionEffect_headerBookbtn " to="/booking_engine" >Book to Stay</Link>
                            </li>
                        </ul>
                        <span>
                            <i className="fa fa-user-circle-o fs-5 ps-5 "></i>
                            <Link to='/login' className='text-decoration-none text-dark ms-2' data-toggle="modal" data-target="#myModal">
                                Register
                            </Link>
                        </span>
                    </div>
                </div>
            </nav>
        </div>

    )
}
export default Header;