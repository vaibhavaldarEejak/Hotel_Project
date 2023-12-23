import React from 'react'

function StaffCard() {
    const staffImgData = [
        { src: 'https://media.istockphoto.com/id/1319014901/photo/receptionist-in-a-hotel-lobby-holding-a-clipboard.jpg?s=612x612&w=0&k=20&c=xVcZukZvsYS9USlsY1_TFTmpkmDZ1ZG2uoOD0zRJBbY=', },
        { src: 'https://watermark.lovepik.com/photo/50170/4746_lovepik-professional-service-staff-of-luxury-hotels-photo-image_wh1200.jpg', },
        { src: 'https://watermark.lovepik.com/photo/50751/2160.jpg_wh1200.jpg', },

    ];
    return (
        <div>
            <div className='container mt-5 mb-5'>
                <div className='row mt-5 d-flex-wrap'>
                    {staffImgData.map((item, id) => (
                        <div className='col-lg-4'>
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
