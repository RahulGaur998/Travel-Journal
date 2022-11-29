import React from 'react'
import LocationLogo from '../assets/Fill 219.png'
import './IndividualContent.css'

const IndividualContent = ({Data}) => {
  return (
    <div className='Content-Card'>
        <img src={Data.imageUrl} className='ContentImg'/>
        <div className='Contents'>
            <div className='Content-location'>
                <img src={LocationLogo} className='location-logo'/>
                <span className='location'>{Data.location}</span>
                <a href={Data.googleMapsUrl}>View on Google Maps</a>
            </div>
            <h1 className='Exact-location'>{Data.title}</h1>
            <h6 className='date'>{Data.date}</h6>
            <p>{Data.description}</p>
        </div>
    </div>
  )
}

export default IndividualContent
