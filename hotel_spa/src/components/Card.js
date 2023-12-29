import React from 'react'
import roomdeal from '../assets/room-deal.jpg'


const Card = () => {
    const roomsImgData = [
        { src: 'https://images.unsplash.com/photo-1584132967334-10e028bd69f7?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aG90ZWxzfGVufDB8fDB8fHww', title: 'DELUX ROOM', price: "89$ / Night" },
        { src: 'https://images.unsplash.com/photo-1584132967334-10e028bd69f7?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aG90ZWxzfGVufDB8fDB8fHww', title: 'DELUX ROOM', price: "89$ / Night" },
        { src: 'https://images.unsplash.com/photo-1618773928121-c32242e63f39?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aG90ZWwlMjByb29tfGVufDB8fDB8fHww', title: 'DELUX ROOM', price: "89$ / Night" },
        { src: 'https://images.unsplash.com/photo-1618773928121-c32242e63f39?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aG90ZWwlMjByb29tfGVufDB8fDB8fHww', title: 'DELUX ROOM', price: "89$ / Night" },
        { src: 'https://images.unsplash.com/photo-1584132967334-10e028bd69f7?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aG90ZWxzfGVufDB8fDB8fHww', title: 'DELUX ROOM', price: "89$ / Night" },
        { src: 'https://images.unsplash.com/photo-1584132967334-10e028bd69f7?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aG90ZWxzfGVufDB8fDB8fHww', title: 'DELUX ROOM', price: "89$ / Night" },
    ];

    return (
        <div className='container-fluid mt-5'>
            <div className='row mt-5 d-flex-wrap'>
                {roomsImgData.map((item, id) => (
                    <div className='col-lg-4'>
                        <div className="card mb-3 mt-3  border border-2 cardImg mb-5 mx-auto" key={id}>
                            <img src={item.src} className="card-img-top mb-4" alt='img' key={id} />
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
