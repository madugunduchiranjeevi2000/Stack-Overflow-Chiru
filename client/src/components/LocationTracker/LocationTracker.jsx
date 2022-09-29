import React from 'react'
import LeftSidebar from '../LeftSidebar/LeftSidebar'
import LocationTrackerList from './LocationTrackerList'
import './LocationTracker.css'


const LocationTracker = () => {
    return (
       
<div className='home-container-1'>
            <LeftSidebar />
            <div className='home-container-2'>
               <h1 className='location-h1'>GPS Location</h1>
               <p className='location-p'>The global positioning system (GPS) is a network of satellites and receiving devices used to determine the location of something on Earth.</p>
                <p className='location-p'>Some GPS receivers are so accurate they can establish their location within 1 centimeter (0.4 inches). GPS receivers provide location in latitude, longitude, and altitude.</p>
                <LocationTrackerList />
            </div>
        </div>

    )
}

export default LocationTracker
