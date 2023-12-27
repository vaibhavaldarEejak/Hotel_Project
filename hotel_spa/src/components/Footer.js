import React from 'react'
import { Link } from 'react-router-dom';

function Footer() {

  return (
    <div className='container-fluid'>
      <div className='row'>
        <div className=' bg-dark col-sm-12 col-lg-7'>
          <div className=' text-dark text-white'>
            <div className='row  justify-content-center'>
              <div className='col-lg-5  p-4'>
                <h6>RESERVATION</h6>
                <ul className='list-unstyled footerlist'>
                  <li><Link to='/' className='text-secondary fw-2 text-decoration-none'>Modify/Cancel</Link></li>
                  <li><Link to='/' className='text-secondary fw-2 text-decoration-none'>Retrive Hotel Bill</Link></li>
                </ul>
              </div>

              <div className='col-lg-5  p-4'>
                <h6>Customer Service</h6>
                <ul className='list-unstyled footerlist'>
                  <li><Link to='/' className='text-secondary fw-2 text-decoration-none '>Customer Service</Link></li>
                  <li><Link to='/' className='text-secondary fw-2 text-decoration-none '>FAQs</Link></li>
                  <li><Link to='/contact' className='text-secondary fw-2 text-decoration-none '>Contact Us</Link></li>
                </ul>
              </div>
            </div>
          </div>
          <div className='row  justify-content-center'>
            <div className='col-lg-5 footer_coroprateSite p-4'>
              <h6 className='text-white'>CORPORATE SITE</h6>
              <ul className='list-unstyled footerlist'>
                <li><Link to='/aboutus' className='text-secondary fw-2 text-decoration-none'>About Us</Link></li>
                <li><Link to='/home' className='text-secondary fw-2 text-decoration-none'>Careers</Link></li>
                <li><Link to='/home' className='text-secondary fw-2 text-decoration-none'>Investor Relations</Link></li>
                <li><Link to='/home' className='text-secondary fw-2 text-decoration-none'>Corporate Responsibility</Link></li>

              </ul>
            </div>

            <div className='col-lg-5 p-4'>
              <h6 className='text-white'>EXPLORE MORE</h6>
              <ul className='list-unstyled footerlist'>
                <li><Link to='/home' className='text-secondary fw-2 text-decoration-none '>Travel Advisor</Link></li>
                <li><Link to='/home' className='text-secondary fw-2 text-decoration-none '>Corporate Travel</Link></li>
                <li><Link to='/home' className='text-secondary fw-2 text-decoration-none '>Residenes</Link></li>
              </ul>
            </div>
          </div>
        </div>

        <div className='bg-dark col-sm-12 col-lg-5 text-white'>
          <p className='pt-4'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit..</p>
          <h4 className='mt-5 '>CONNECT WITH XYZ HOTEL</h4>
          <span className='offset-2'>
            <Link to='https://www.facebook.com/' className=' footer_Icon'><i className="fa fa-facebook bg-primary text-white p-2 mt-2 "></i></Link>
            <Link to='https://www.instagram.com/'><i className="fa fa-instagram bg-danger text-white p-2 mt-2  ms-4"></i></Link>
            <Link to='https://twitter.com/i/flow/login'><i className="fa fa-twitter bg-info text-white p-2 mt-2  ms-4"></i></Link>
            <Link to='https://www.linkedin.com/login'><i className="fa fa-linkedin bg-primary text-white p-2 mt-2  ms-4"></i></Link>
          </span>
        </div>

        <div className='bg-dark bg-gradient text-white text-center pt-3'>
          <p>&copy; 2020 Hotels Corporation</p>
        </div>
      </div>
    </div>
  )
}

export default Footer;
