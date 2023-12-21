import React from 'react';
import { NavLink } from 'react-router-dom'
import '../assets/css/style.css'

const Header = () => {
    return (
        <div className='Header'>
            <div className='container-fluid'>
                <span  className='headerHeading fw-bolder ms-3 text-uppercase text-warning'>MK</span>
                <span className='headerHeading fw-bolder text-uppercase text-dark'>Hotels</span>
                </div>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark mt-4">
                    <div className="container-fluid">
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0 text-uppercase">
                                <li className="nav-item">
                                    <NavLink className="nav-link fs-5  px-5 text-white fw-5 active" aria-current="page" to='/home'>Home</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link fs-5 px-5 text-white fw-5 " to="/rooms" >Rooms</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link fs-5 px-5 text-white fw-5 " to="/contact" >Contact</NavLink>
                                </li>
                            </ul>
                            <form className="d-flex">
                                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            </form>
                        </div>
                    </div>
                </nav>
            </div>
     
    )
}
export default Header;