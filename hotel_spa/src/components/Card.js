import React from 'react'
import roomdeal from '../assets/room-deal.jpg'


const Card = () => {
    const roomsImgData = [
        { src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWTcmaOMqpKTSOa7LhQIEFsgwuRYnMAOGwgpu9-Vse-A&s', title: 'DELUX ROOM', price: "89$ / Night" },
        { src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWTcmaOMqpKTSOa7LhQIEFsgwuRYnMAOGwgpu9-Vse-A&s', title: 'DELUX ROOM', price: "89$ / Night" },
        { src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWTcmaOMqpKTSOa7LhQIEFsgwuRYnMAOGwgpu9-Vse-A&s', title: 'DELUX ROOM', price: "89$ / Night" },
        { src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlTrcD0wSkgW7J_0ZIRgV6YsUIFfACQA6BZjMNrmAzDQ&s', title: 'DELUX ROOM', price: "89$ / Night" },
        { src: 'https://www.hotelscombined.com.sg/kimg/e9/80/b76d41f0-617aa2cd-15.jpeg', title: 'DELUX ROOM', price: "89$ / Night" },
        { src: 'https://www.hotelscombined.com.sg/kimg/e9/80/b76d41f0-617aa2cd-15.jpeg', title: 'DELUX ROOM', price: "89$ / Night" },
    ];

   
    return (
        <div className='container-fluid mt-5'>
            <div className='row mt-5 d-flex-wrap'>
                {roomsImgData.map((item, id) => (
                    <div className='col-lg-4'>
                        <div className="card mb-3 mt-3  border border-2 cardImg mb-5 mx-auto" key={id}>
                            <img src={item.src} className="card-img-top mb-4" alt='img'  />
                            <div className="card-body text-center">
                                <h3 >{item.title}</h3>
                                <h3 className='mt-5'>{item.price}</h3>
                            </div>
                        </div>
                    </div>
                ))}

            </div>
        </div>
    )
}

export default Card;
