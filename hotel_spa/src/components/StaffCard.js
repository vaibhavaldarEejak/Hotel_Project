import React,{useEffect, useState} from 'react'
import axios from 'axios';

function StaffCard() {
     const [staffImg,setStaffImg]=useState([])

     useEffect(()=>{
        axios.get(' http://localhost:4000/staffImgData')
        .then(res=>{
            // console.log(res)
            setStaffImg(res.data)
         })
        
        .catch(err=>console.log(err))
     },[])

    return (
        <div>
            <div className='container mt-5 mb-5'>
                <div className='row mt-5 d-flex-wrap'>
                    {staffImg.map((item, id) => (
                        <div className='col-lg-4' key={id} >
                            <div className="card mb-3 border border-2 mt-3 mb-5 justify-content-center" key={id}>
                                <img src={item.src} className="card-img-top" alt='img'/>
                            </div>
                        </div>
                    ))}

                </div>
            </div>
        </div>
    )
}

export default StaffCard;
