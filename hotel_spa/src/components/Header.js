import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom'
// import { Formik, Field, Form, ErrorMessage } from 'formik';
// import * as Yup from 'yup';
import '../assets/css/style.css';

// const validationSchema = Yup.object({
//     firstName: Yup.string().required('First Name is required'),
//     lastName: Yup.string().required('Last Name is required'),
//     email: Yup.string().email('Invalid email format').required('Email is required'),
//     password: Yup.string().required('Password is required'),
// });

const Header = () => {


    //     const initialValues = {
    //         firstName: '',
    //         lastName: '',
    //         email: '',
    //         password: '',
    //     };

    //     const handleSubmit = (values) => {
    //         // Form submission logic goes here
    //         console.log('Form submitted successfully!', values);
    //     };


    return (
        <div className='Header'>
            {/* <div className='container-fluid'>
                <span className='headerHeading fw-bolder ms-3 text-uppercase text-warning'>MK</span>
                <span className='headerHeading fw-bolder text-uppercase text-dark'>Hotels</span>
            </div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 text-uppercase">
                            <li className="nav-item">
                                <Link className="nav-link  px-5 text-white fw-5 active" aria-current="page" to='/home'>Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link   px-5 text-white fw-5 " aria-current="page" to='/aboutus'>About</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link  px-5 text-white fw-5 " to="/rooms" >Rooms</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link  px-5 text-white fw-5 " to="/contact" >Contact</Link>
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
                                            <h5 className="modal-title" id="exampleModalLabel">Login Form</h5>
                                            <button type="button" className="close bg-secondary text-white" data-dismiss="modal" aria-label="Close">
                                                <span aria-hidden="true">&times;</span>
                                            </button>
                                        </div>
                                        <div className="modal-body">
                                            <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
                                                <Form>
                                                    <div className="form-group h-50">
                                                        <label htmlFor="firstName">First Name</label>
                                                        <Field
                                                            type="text"
                                                            className="form-control"
                                                            id="firstName"
                                                            name="firstName"
                                                            placeholder="Enter Your First Name" />
                                                        <ErrorMessage name="firstName" component="div" className='text-danger' />

                                                    </div>
                                                    <div className="form-group h-50">
                                                        <label htmlFor="lastName">Last Name</label>
                                                        <Field type="text"
                                                            className="form-control"
                                                            id="lastName"
                                                            name='lastName'
                                                            placeholder="Enter Your Last Name" />
                                                        <ErrorMessage name="lastName" component="div" className='text-danger' />
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
                                                        <label htmlFor="email">Email</label>
                                                        <Field
                                                            type="email"
                                                            className="form-control"
                                                            id="email"
                                                            name="email"
                                                            placeholder="Enter your Email" />
                                                        <ErrorMessage name="email" component="div" className='text-danger' />
                                                    </div>
                                                    <div className="form-group">
                                                        <label htmlFor="password">Password</label>
                                                        <Field type="password"
                                                            className="form-control"
                                                            id="password"
                                                            name='password'
                                                            placeholder="Enter your password" />
                                                        <ErrorMessage name="password" component="div" className='text-danger' />
                                                    </div>
                                                    <div className="modal-footer">
                                                        <button type="submit" className="btn btn-success text-center">Register</button>
                                                    </div>
                                                </Form>
                                            </Formik>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </form>
                    </div>
                </div>
            </nav> */}



            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">Navbar</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Link</a>
                            </li>
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Dropdown
                                </a>
                                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><a class="dropdown-item" href="#">Action</a></li>
                                    <li><a class="dropdown-item" href="#">Another action</a></li>
                                    <li><hr class="dropdown-divider" /></li>
                                    <li><a class="dropdown-item" href="#">Something else here</a></li>
                                </ul>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
                            </li>
                        </ul>
                        <form class="d-flex">
                            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button class="btn btn-outline-success" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>
        </div>

    )
}
export default Header;