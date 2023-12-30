import React from 'react'
import {Link} from 'react-router-dom'

const AboutUs = () => {
  return (
    <div>
       <div className='bgImg_Contact mb-4 pt-5'>
        <h1 className='pt-5 align-item-center'>About</h1>
        <span className='fs-5'><Link to='/home' className='text-white text-decoration-none'>Home</Link >/ About</span>
      </div>
    </div>
  )
}

export default AboutUs
