import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom'

import '../assets/css/style.css';


const Header = () => {
    const [email, setEmail] = useState('');
    const [isValidEmail, setIsValidEmail] = useState(true);

    const handleEmailChange = (event) => {
        const newEmail = event.target.value;
        setEmail(newEmail);
        setIsValidEmail(validateEmail(newEmail));
    };

    const validateEmail = (email) => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    };

    const handleSubmit = (event) => {
        event.preventDefault();


        if (isValidEmail) {
            console.log('Form submitted with email:', email);
        } else {
            console.log('Invalid email. Please correct the form.');
        }
    };

    return (
        <div className='Header'>
            <div className='container-fluid'>
                <span className='headerHeading fw-bolder ms-3 text-uppercase text-warning'>MK</span>
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
                                <NavLink className="nav-link fs-5  px-5 text-white fw-5 active" aria-current="page" to='/aboutus'>About</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link fs-5 px-5 text-white fw-5 " to="/rooms" >Rooms</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link fs-5 px-5 text-white fw-5 " to="/contact" >Contact</NavLink>
                            </li>
                        </ul>

                        <form className="d-flex">
                            <span>
                                <i className="fa fa-user-circle-o text-white fs-5"></i>
                                <Link to='/' className='text-decoration-none text-white ms-2' data-toggle="modal" data-target="#myModal">
                                    Sign In or Register
                                </Link>
                            </span>
                            <div className="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div className="modal-dialog" role="document">
                                    <div className="modal-content">
                                        <div className="modal-header">
                                            <h5 className="modal-title" id="exampleModalLabel">Form</h5>
                                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                                <span aria-hidden="true">&times;</span>
                                            </button>
                                        </div>
                                        <div className="modal-body">
                                            <form onSubmit={handleSubmit}>
                                                <div className="form-group h-50">
                                                    <label htmlFor="">First Name</label>
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        id="exampleFormControlInput1"

                                                        placeholder="Enter Your First Name" />
                                                    
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="">Last Name</label>
                                                    <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Enter Your Last Name" />
                                                </div>

                                                <div className="form-group">
                                                    <label htmlFor="">City</label>
                                                    <select className="form-control" id="exampleFormControlInput1" >
                                                        <option value='Pune'>Pune</option>
                                                        <option value='Mumbai'>Mumbai</option>
                                                        <option value='Nashik'>Nashik</option>
                                                        <option value='Gujrat'>Gujrat</option>
                                                        <option value='Surat'>Surat</option>
                                                    </select>
                                                </div>

                                                <div className="form-group">
                                                    <label htmlFor="">Email</label>
                                                    <input
                                                        type="email"
                                                        className="form-control"
                                                        id="exampleFormControlInput1"
                                                        value={email}
                                                        onChange={handleEmailChange}
                                                        placeholder="Enter your Email" />
                                                        {isValidEmail ? null : <p style={{ color: 'red' }}>Invalid email address</p>}
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="">Password</label>
                                                    <input type="password" className="form-control" id="exampleFormControlInput1" placeholder="Enter your password" />
                                                </div>
                                            </form>
                                        </div>
                                        <div className="modal-footer">
                                            <button type="submit" className="btn btn-primary">Register</button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </form>
                    </div>
                </div>
            </nav>
        </div>

    )
}
export default Header;