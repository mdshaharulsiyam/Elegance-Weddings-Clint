import React, { useEffect, useState } from 'react'
import VenuesCard from '../../Components/Venues/VenuesCard'

const Venuespage = () => {
    const [venuesData, setvenuesData] = useState([])
    const [shodata,setShowdata]=useState(6)
    useEffect(() => {
      fetch('./venues.json').then((res) => res.json()).then((data) => setvenuesData(data))
    }, [])
    const handelShowdata = (e)=>{
        setShowdata(venuesData.length)

    }
  return (
    <div className='container mx-auto text-center'>
    <h2 id='VenuessectionTitle' className='text-5xl font-semibold italic text-[#FF6969] py-10'>venues</h2>
    <div className='flex flex-wrap justify-center items-center gap-7 py-10'>
      {
       venuesData.slice(0,shodata).map(venue=> <VenuesCard key={venue.id} venue={venue}></VenuesCard>)
      }
    </div>
    {
 ( venuesData.length>6) && <button onClick={handelShowdata} className='py-2 px-6 mt-8 bg-[#FF6969] text-white text-lg font-semibold rounded-md active:scale-90'>see more...</button>
}
  </div>
  )
}

export default Venuespage
