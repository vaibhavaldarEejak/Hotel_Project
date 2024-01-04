import React from 'react'
import { Link } from 'react-router-dom'
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import StateCityDropdown from '../components/StateCityDropdown';

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


const LoginPage = () => {
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
        <>
            <div className='container mt-5 '>
                <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
                    <Form className='w-50 mx-auto loginForm p-5'>
                        <h4 className='loginFormHeading'>Create a Account</h4>
                        <div className="form-group">
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
                        <div className="form-group">
                            <StateCityDropdown />
                        </div>
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
        </>
    )
}

export default LoginPage;
