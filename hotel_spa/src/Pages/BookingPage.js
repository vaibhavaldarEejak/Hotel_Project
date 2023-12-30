import React from 'react'
import {Link} from 'react-router-dom'

const BookingPage = () => {
  return (
    <div>
      <div className='container-fluid p-4 formClass'>
        <div className='row ms-5'>
          <form className="row mt-3 mb-3">
            <div className="col-lg-3 formDisplay">
              <label>Check In</label>
              <input type="date" className="form-control formInput_Width" />
            </div>
            <div className="col-lg-3  formDisplay">
              <label>Check Out</label>
              <input type="date" className="form-control formInput_Width" id="" placeholder="" />
            </div>
            <div className="col-lg-3  formDisplay">
              <label>Rooms</label>
              <select className='form-control formInput_Width'>
                <option value='royalRoom'>Royal Room</option>
                <option value='Delux Room'>Delux Room</option>
                <option value='Double Room'>Double Room</option>
                <option value='Single Room'>Single Room</option>
              </select>
            </div>
            <div className="col-lg-2 ms-2">
              <Link type='btn' className="btn btn-warning  w-75 text-uppercase mt-1">Search</Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default BookingPage
