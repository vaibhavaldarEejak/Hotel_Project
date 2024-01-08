import React from 'react'
import Card from '../../components/Card';
import Services from '../../components/Services';

const DeAlaraBaga = () => {
  return (
    <>
       <div className='container'>
        <h3 className='text-center'>De Alara Baga,Goa</h3>
        <div className='row'>
            <div className='col-lg-12'>
              <Card />
            </div>
            <div className='col-lg-8'>
              <Services />
            </div>
        </div>

       </div>
        
    </>
  )
}

export default DeAlaraBaga;
