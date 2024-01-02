import React, { useEffect, useState } from 'react'
import axios from 'axios';

const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        axios.get(' http://localhost:4000/hotelsServices')
            .then(res => {
                // console.log(res)
                setServices(res.data)
            })
            .catch(err => console.log(err))
    })
    return (
        <div>
            <table className='table table-hover'>
                <thead>
                    <tr className='p-2'>
                        <th className='border border-0 fw-light fs-2'>Our Services</th>
                    </tr>
                </thead>
                <tbody>
                    {services.map((item, id) => (
                        <tr key={id}>
                            <td className='p-3 fw-bold fs-6'>{item.services}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default Services;
