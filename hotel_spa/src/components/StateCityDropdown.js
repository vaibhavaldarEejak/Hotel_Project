import React, { useEffect, useState } from 'react';
import axios from 'axios'

const StateCityDropdown = () => {
  const [data, setData] = useState([])
  const [getCountry, setGetCountry] = useState([])
  const [getState, setGetState] = useState([])
  const [selectedState,setSelectedState]=useState()
  const [cities,setCities]=useState([])

  useEffect(() => {
    axios.get('https://pkgstore.datahub.io/core/world-cities/world-cities_json/data/5b3dd46ad10990bca47b04b4739a02ba/world-cities_json.json')
      .then(res => {
        console.log(res.data)
        setData(res.data)
      })
      .catch((err) => console.log(err))
  }, [])

  const country = [...new Set(data.map(item => item.country))];
  country.sort()

  const handleCountry = (e) => {
    let states = data.filter(state => state.country === e.target.value);
    states = [...new Set(states.map(item => item.subcountry))]
    states.sort();
    setGetState(states)
  }

  const handleState=(e)=>{
    let cities=data.filter(city=>city.subcountry===e.target.value)
    console.log(cities)
    setCities(cities)
  }

  return (
    <div>
      <div>
        <select onChange={(e) => handleCountry(e)}>
          {country.map((item, id) => (
            <option key={id} value={getCountry}>{item}</option>
          ))}
        </select>
      </div>
      <div>
      <select onChange={(e) => handleState(e)}>
        <option value=''>Select State</option>
        {getState.map((item, id) => (
          <option key={id} value={selectedState}>{item}</option>
        ))}
      </select>
      </div>
      <div>
      <select>
        <option value=''>Select City</option>
        {cities.map((item) => (
          <option key={item.name} value={selectedState}>{item.name}</option>
        ))}
      </select>
      </div>
    </div>
  )
}

export default StateCityDropdown
