import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { weddingContextProvider } from '../../Context/ContextProvider'
import VenuesDetailsCard from './VenuesDetailsCard'

const VanuesDetails = () => {
    const { id } = useParams()
    const [venuesData, setvenuesData] = useState([])
    useEffect(() => {
      fetch('../venues.json').then((res) => res.json()).then((data) => setvenuesData(data))
    }, [])
    const vanuesDetailsData = venuesData.filter(data => data.id === id)
    return (
        <div className='container mx-auto'>
            {
                vanuesDetailsData.map(data =><VenuesDetailsCard key={data.id} data={data}></VenuesDetailsCard>)
            }
            
        </div>
    )
}

export default VanuesDetails
