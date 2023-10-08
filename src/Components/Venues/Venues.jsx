import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import './VenuesCard.css'
import { weddingContextProvider } from '../../Context/ContextProvider'
import VenuesCard from './VenuesCard';

const Venues = () => {
  const [venuesData, setvenuesData] = useState([])
  useEffect(() => {
    fetch('./venues.json').then((res) => res.json()).then((data) => setvenuesData(data))
  }, [])
    return (
        <div className='container mx-auto text-center'>
          <h2 id='VenuessectionTitle' className='text-5xl font-semibold italic text-[#FF6969] py-10'>venues</h2>
          <div className='flex flex-wrap justify-center items-center gap-7 py-10'>
            {
             venuesData.slice(0,3).map(venue=> <VenuesCard key={venue.id} venue={venue}></VenuesCard>)
            }
          </div>
          {
       ( venuesData.length>3) && <Link to={'/venues'}><button className='py-2 px-6 mt-8 bg-[#FF6969] text-white text-lg font-semibold rounded-md active:scale-90'>see more...</button></Link>
      }
        </div>
      )
}

export default Venues
