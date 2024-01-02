import React from 'react'

const MapComponent = () => {
    const hotelLatitude = 37.123456;
    const hotelLongitude = -122.654321;
    return (
        <div>
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3818.5457928242614!2d73.74113531436138!3d15.547606889309777!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbffb3a9b5bbd0b%3A0xc860d9ed98c890b2!2sBaga%20Beach!5e0!3m2!1sen!2sin!4v1637309850935!5m2!1sen!2sin"
                height="250"
                loading="lazy"
            ></iframe>
        </div>
    )
}

export default MapComponent
