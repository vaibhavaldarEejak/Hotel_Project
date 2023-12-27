import React from 'react';
import { Link } from 'react-router-dom'
import Card from '../components/Card';
import roomdeal from '../assets/room-deal.jpg';
import StaffCard from '../components/StaffCard';

const Home = () => {
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
      <div>
        <div className='mb-2 '>
          <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
              <div className="carousel-item active" data-bs-interval="2000">
                <img src='https://static.cube-concept.gr/files/projects/commercial/mk-hotel-collection-offices/01view-2-sky-mesa.jpg' className="d-block w-100" alt="" height='600' />
              </div>
              <div className="carousel-item" data-bs-interval="2000">
                <img src='https://gaviaspreview.com/wp/boliin/wp-content/uploads/2023/01/slider-2.jpg' className="d-block w-100" alt="" height='600'  />
              </div>
              <div className="carousel-item" data-bs-interval="2000">
                <img src='https://gaviaspreview.com/wp/boliin/wp-content/uploads/2023/02/slider-1.jpg' className="d-block w-100" alt="" height='600'  />
              </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
        <h1 className='text-uppercase text-dark fw-bolder text-center mt-4 ourRoomHeading'>Our Rooms</h1>
      </div>
      <div className='text-center mt-4'>
        <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, reprehenderit!</h4>
      </div>
      <Card />
      <img className='w-100 h-25 mt-5' src={roomdeal} alt='roomdealImg' />
      <div>
        <h1 className='text-uppercase text-dark fw-bolder text-center mt-4 ourRoomHeading'>Our Staff</h1>
      </div>
      <div className='text-center mt-4'>
        <p className='fs-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, reprehenderit!</p>
      </div>
      <StaffCard />
    </div>


  )
}

export default Home;
