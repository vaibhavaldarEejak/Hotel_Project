import React from 'react';
import { Link } from 'react-router-dom'
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import StateCityDropdown from './StateCityDropdown';

import '../assets/css/style.css';



const validationSchema = Yup.object({
    firstName: Yup.string().required('First Name is required'),
    lastName: Yup.string().required('Last Name is required'),
    email: Yup.string().email('Invalid email format').required('Email is required'),
    password: Yup.string().required('Password is required'),
    confirm_password: Yup
        .string()
        .oneOf([Yup.ref('password'), null], 'Passwords must match')
        .required('Confirm Password is required'),
});

const Header = () => {

    const initialValues = {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirm_password: ''
    };

    const handleSubmit = (values) => {
        // Form submission logic goes here
        console.log('Form submitted successfully!', values);
    };

    return (
        <div className='Header'>
            <nav className="navbar navbar-expand-lg navbar-dark ">
                <div className="container-fluid">
                    <Link to='/home' className="navbar-brand text-dark fw-bolder fs-1 ms-5" >De Alara</Link>
                    <button className="navbar-toggler bg-primary" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 text-uppercase ">
                            <li className="nav-item">
                                <Link className="nav-link  px-5 text-dark fw-bolder active" aria-current="page" to='/home'>Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link px-5 text-dark fw-bolder   " aria-current="page" to='/aboutus'>About</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link px-5 text-dark fw-bolder   " to="/rooms" >Rooms</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link  px-5 text-dark fw-bolder  " to="/contact" >Contact</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link px-5 text-dark  border border-rounded-5 fw-bolder text-uppercase transitionEffect_headerBookbtn " to="/booking_engine" >Book to Stay</Link>
                            </li>
                        </ul>

                        {/* <form className="d-flex"> */}
                        <span>
                            <i className="fa fa-user-circle-o text-danger fs-5 ps-5"></i>
                            <Link to='/' className='text-decoration-none text-dark me-5' data-toggle="modal" data-target="#myModal">
                                Sign In or Register
                            </Link>
                        </span>
                        <div className="modal fade" id="myModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div className="modal-dialog" role="document">
                                <div className="modal-content p-3">
                                    <div className="modal-header p-3">
                                        <h4 className="modal-title" id="exampleModalLabel">Create a Account</h4>
                                        <button type="button" className="close bg-secondary text-white" data-dismiss="modal" aria-label="Close">
                                            <span aria-hidden="true">&times;</span>
                                        </button>
                                    </div>
                                    <div className="modal-body pt-3">
                                        <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
                                            <Form>
                                                <div className="form-group h-50">
                                                    <label htmlFor="firstName" className='text-dark fw-bolder'>First Name</label>
                                                    <Field
                                                        type="text"
                                                        className="form-control"
                                                        id="firstName"
                                                        name="firstName"
                                                        placeholder="First Name" />
                                                    <ErrorMessage name="firstName" component="div" className='text-danger' />

                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="lastName" className='text-dark fw-bolder'>Last Name</label>
                                                    <Field type="text"
                                                        className="form-control"
                                                        id="lastName"
                                                        name='lastName'
                                                        placeholder="Last Name" />
                                                    <ErrorMessage name="lastName" component="div" className='text-danger' />
                                                </div>
                                                <StateCityDropdown />

                                                <div className="form-group">
                                                    <label htmlFor="email" className='text-dark fw-bolder'>Email</label>
                                                    <Field
                                                        type="email"
                                                        className="form-control"
                                                        id="email"
                                                        name="email"
                                                        placeholder="Email" />
                                                    <ErrorMessage name="email" component="div" className='text-danger' />
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="password" className='text-dark fw-bolder'>Password</label>
                                                    <Field type="password"
                                                        className="form-control"
                                                        id="password"
                                                        name='password'
                                                        placeholder="password" />
                                                    <ErrorMessage name="password" component="div" className='text-danger' />
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="confirm_password" className='text-dark fw-bolder'>Confirm Password</label>
                                                    <Field type="password"
                                                        className="form-control"
                                                        id="confirm_password"
                                                        name='confirm_password'
                                                        placeholder="confirm password" />
                                                    <ErrorMessage name="confirm_password" component="div" className='text-danger' />
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
                    </div>
                </div>
            </nav>
        </div>

    )
}
export default Header;