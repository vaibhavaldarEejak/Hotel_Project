import React,{useState,useEffect} from 'react'
import axios from 'axios'

const Card = () => {
    const [roomImg,setRoomsImg]=useState([]);

    useEffect(()=>{
        axios.get(' http://localhost:4000/roomsImgData')
        .then(res=>{
            // console.log(res)
            setRoomsImg(res.data)
         })   
        .catch(err=>console.log(err))
     },[])

    return (
        <div className='container mt-5 '>
            <div className='row mt-5 d-flex-wrap'>
                {roomImg.map((item, id) => (
                    <div className='col-lg-4' key={id}>
                        <div className="card mb-3 mt-3 p-2 border  border-1 cardImg mb-5 mx-auto">
                            <img src={item.src} className="card-img-top mb-4" alt='img' />
                            <div className="card-body text-center p-3 fs-4">
                                <p>{item.title}</p>
                                <p className='mt-5 '>{item.price}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
export default Card;
