import React from 'react'
import { Link } from 'react-router-dom';
// import MapComponent from './MapComponent';




function Footer() {

  return (
    <>
      <img src='https://deefellowresorts.com/assets/img/footer-bg1.png' className='footerImg' />
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

                <div className='col-lg-5 p-4'>
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
                <ul className='list-unstyled '>
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
            <div className='row justify-content-start'>
              <div className='col-lg-12'>
                <h3 className='mt-3 location_ContactFooter_Heading'>Location</h3>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3818.5457928242614!2d73.74113531436138!3d15.547606889309777!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbffb3a9b5bbd0b%3A0xc860d9ed98c890b2!2sBaga%20Beach!5e0!3m2!1sen!2sin!4v1637309850935!5m2!1sen!2sin"
                  height="250"
                  width='400'
                // loading="lazy"
                ></iframe>
              </div>
            </div>
            <div className='row mt-4'>
              <h3 className='location_ContactFooter_Heading'>Contact Info</h3>
              <span className='d-flex flex-row p-2'>
                <i className="fa fa-map-marker me-2 mt-1 text-info"></i>
                <Link to='/' className='text-decoration-none text-white fw-2'>de alara Hotel,Baga Beach Goa</Link>
                </span>
              <span className='d-flex flex-row p-2'>
                <i className="fa fa-envelope me-2 mt-1 text-info"></i>
                <Link to='/' className='text-decoration-none text-white fw-2'>needhelp@company.com</Link>
                </span>
                
                <span className='d-flex flex-row p-2'>
                <i className="fa fa-phone  me-2 mt-1 text-info"></i>
                <Link to='/' className='text-decoration-none text-white fw-2'>+919999999</Link>
                </span>
            </div>

          </div>

          <div className='bg-dark bg-gradient text-white pt-3 pb-3 d-flex'>
            <span className='offset-3 mt-3'>&copy; 2023 Hotels Corporation</span>
            <span className='fs-4 offset-4'>
              <Link to='https://www.facebook.com/' className='footer_Icon'><i className="fa fa-facebook  p-2 mt-2 footerIconHover "></i></Link>
              <Link to='https://www.instagram.com/'><i className="fa fa-instagram text-danger p-2 mt-2  ms-4 footerIconHover"></i></Link>
              <Link to='https://twitter.com/i/flow/login'><i className="fa fa-twitter text-info p-2 mt-2  ms-4 footerIconHover"></i></Link>
              <Link to='https://www.linkedin.com/login'><i className="fa fa-linkedin  p-2 mt-2  ms-4 footerIconHover"></i></Link>
            </span>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer;
