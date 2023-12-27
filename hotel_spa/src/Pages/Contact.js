import React from 'react'
import '../assets/css/style.css'
import {Link} from 'react-router-dom'

const Contact = () => {
  return (
    <div className='bgImg_Contact mb-4'>
       <h1 className='pt-5'>Contact</h1>
       <span><Link to='' className='text-white text-decoration-none'>Home</Link >/ Contact</span>
    </div>
  )
}

export default Contact
