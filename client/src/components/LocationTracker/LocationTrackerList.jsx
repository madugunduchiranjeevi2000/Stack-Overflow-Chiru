import React, { useState, useEffect } from 'react'
import './LocationTracker.css'
import './LocationTrackerList.css'
const LocationTrackerList = () => {

  const [data, setData] = useState({})

  const getCurrentLocation = (position) => {
      let {latitude, longitude} = position.coords;

      fetch(`https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=a2324641ef16447282c0287d1795301e`)
      .then(response => response.json()).then(result => {
          let allDetails = result.results[0].components;
          let {city, state, postcode, country} = allDetails;
          setData({city,state, postcode, country})
      })
  };

  useEffect(() => {
      navigator.geolocation.getCurrentPosition(getCurrentLocation);
  }, []);


return (
    <div className='locatiion-h1'>
          <h5>{data.city}, </h5>
          <h5>{data.state}, </h5>
          <h5>{data.country} </h5>
    </div>
)
}

export default LocationTrackerList
