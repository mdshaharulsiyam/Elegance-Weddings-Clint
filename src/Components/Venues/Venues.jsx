import React, { useContext } from 'react'
import VenuesCard from './VenuesCard'
import { Link } from 'react-router-dom'
import { weddingContextProvider } from '../../Context/ContextProvider'

const Venues = () => {
    const {venuesData}=useContext(weddingContextProvider)
    return (
        <div className='container mx-auto text-center'>
          <h2 id='VenuessectionTitle' className='text-5xl font-semibold italic text-[#FF6969] py-10'>venues</h2>
          <div className='flex flex-wrap justify-center items-center gap-7 py-10'>
            {
                venuesData.slice(0,3).map(venue=> <VenuesCard key={venue.id} venue={venue}></VenuesCard>)
            }
          </div>
          {
       ( venuesData.length>3) && <Link><button className='py-2 px-6 mt-8 bg-[#FF6969] text-white text-lg font-semibold rounded-md active:scale-90'>see more...</button></Link>
      }
        </div>
      )
}

export default Venues
