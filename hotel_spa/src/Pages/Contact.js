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
        <div className='row'>
          <div className='col-sm-12 col-lg-6 mt-5 mb-5'>
            <p className='text-uppercase fs-4'>Contact with us</p>
            <h1 className='contactSendMessage_heading'>Send us a Message</h1>
            <form className="row g-3 mt-4 ">
              <div className="col-6">
                <input type="text" className="form-control p-3" id="staticEmail2" placeholder='Your Name' />
              </div>
              <div className="col-6">
                <input type="email" className="form-control p-3" id="inputPassword2" placeholder="Email Address" />
              </div>
              <div className="col-6">
                <input type="text" className="form-control p-3" id="inputPassword2" placeholder="Your Phone" />
              </div>
              <div className="col-6">
                <input type="text" className="form-control p-3" id="inputPassword2" placeholder="Subject" />
              </div>
              <div className="form-floating">
                <textarea className="form-control h-100" placeholder="Write Message" id="floatingTextarea2" ></textarea>
                <label htmlFor="floatingTextarea2">Write Message</label>
              </div>
              <div className="col">
                <button type="submit" className="btn  mb-3 p-3 contactSection text-white fw-bolder">Send A Message</button>
              </div>
            </form>
          </div>
          <div className='col-lg-6 mt-5'>
            <div>
              <h1 className='col-lg-12 p-4 contactSection text-white ms-3 pe-5 '>Contact</h1>
            </div>
            <div className='col-lg-12 mt-3 p-3 ms-3 border border'>
              <span>
                <i className="fa fa-map-marker pe-2 text-danger fs-4"></i>
                <span className='text-uppercase'>Address</span>
              </span>
              <h5 className='mt-3'>30 Broklyn Golden Street.</h5>
              <h5>India</h5>
            </div>
            <div className='col-lg-12 mt-3 p-3 ms-3 border '>
              <span>
                <i className="fa fa-phone pe-2 text-danger fs-4"></i>
                <span className='text-uppercase'>Phone</span>
              </span>
              <h5 className='mt-3'>+919999999</h5>
              <h5>+918888888</h5>
            </div>
            <div className='col-lg-12 mt-3 p-3 ms-3 border border'>
              <span>
                <i className="fa fa-envelope pe-2 text-danger fs-4"></i>
                <span className='text-uppercase'>Email</span>
              </span>
              <h5 className='mt-3'><Link to='' className='text-decoration-none text-dark'>needhelp@company.com</Link></h5>
              <h5 className='mt-3'><Link to='' className='text-decoration-none text-dark'>support@company.com</Link></h5>
            </div>

            <div className='col-lg-12 mt-3 p-3 ms-3 border border-top-0'>
              <span className=''>
                <Link to='https://www.facebook.com/' className=' footer_Icon'><i className="fa fa-facebook bg-primary text-white p-2 mt-2 "></i></Link>
                <Link to='https://www.instagram.com/'><i className="fa fa-instagram bg-danger text-white p-2 mt-2  ms-4"></i></Link>
                <Link to='https://twitter.com/i/flow/login'><i className="fa fa-twitter bg-info text-white p-2 mt-2  ms-4"></i></Link>
                <Link to='https://www.linkedin.com/login'><i className="fa fa-linkedin bg-primary text-white p-2 mt-2  ms-4"></i></Link>
              </span>
            </div>
          </div>

        </div>
      </div>
    </>
  )
}

export default Contact
