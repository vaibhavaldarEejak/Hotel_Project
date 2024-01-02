import React from 'react'
import '../assets/css/style.css'
import { Link } from 'react-router-dom'

const Contact = () => {
  return (
    <>
      <div className='bgImg_Contact mb-4 pt-5'>
        <h1 className='pt-5 align-item-center'>Contact</h1>
        <span className='fs-5'><Link to='/home' className='text-white text-decoration-none'>Home</Link >/ Contact</span>
      </div>
      <div className='container'>
        <div className='row text-center'>
          <div className='col-sm-12 col-lg-4 mt-3 p-3 me-3  transitionEffect_ContactCard '>
            <span className='d-flex flex-column'>
              <i className="fa fa-envelope pe-2 text-danger fs-4 "></i>
              <span className='text-uppercase pt-3 contactSec_Info'>Email Us</span>
            </span>
            <h5 className='mt-3'><Link to='/' className='text-decoration-none text-dark'>needhelp@company.com</Link></h5>
            <h5 className='mt-3'><Link to='/' className='text-decoration-none text-dark'>support@company.com</Link></h5>
          </div>

          <div className='col-sm-12 col-lg-3 mt-3 p-3 me-3 transitionEffect_ContactCard'>
            <span className='d-flex flex-column'>
              <i className="fa fa-phone pe-2 text-danger fs-4"></i>
              <span className='text-uppercase pt-3 contactSec_Info'>Call us</span>
            </span>
            <h5 className='mt-3'>+919999999</h5>
            <h5>+918888888</h5>
          </div>

          <div className='col-sm-12 col-lg-4 mt-3 p-3 transitionEffect_ContactCard'>
            <span className='d-flex flex-column'>
              <i className="fa fa-map-marker pe-2 text-danger fs-4"></i>
              <span className='text-uppercase pt-3 contactSec_Info'>Location</span>
            </span>
            <h5 className='mt-3'>30 Broklyn Golden Street.</h5>
            <h5>India</h5>
          </div>

          <div className='col-sm-12 col-lg-12 mt-5 mb-5'>
            <h1 className=' text-center contactSec_Info fs-1'>Drop us a Message</h1>
            <form className="row g-3 mt-4 ">
              <div className="col-12">
                <input type="text" className="form-control p-3" id="staticEmail2" placeholder='Your Name' />
              </div>
              <div className="col-6">
                <input type="email" className="form-control p-3" id="inputPassword2" placeholder="Your Email" />
              </div>
              <div className="col-6">
                <input type="text" className="form-control p-3" id="inputPassword2" placeholder="Your Phone" />
              </div>
              <div className="form-floating">
                <textarea className="form-control" placeholder="Write Message" id="floatingTextarea2"></textarea>
                <label htmlFor="floatingTextarea2">Write Message</label>
              </div>
              <div className="col text-center">
                <Link to='/' type="submit" className="btn text-dark mb-3 p-3 fw-bolder  border border-3 transitionEffect_ContactMessageBtn">Send A Message</Link>
              </div>
            </form>
          </div>

        </div>
      </div>
    </>
  )
}

export default Contact
