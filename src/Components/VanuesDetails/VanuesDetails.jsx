import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { weddingContextProvider } from '../../Context/ContextProvider'
import VenuesDetailsCard from './VenuesDetailsCard'

const VanuesDetails = () => {
    const { id } = useParams()
    const { venuesData } = useContext(weddingContextProvider)
    const vanuesDetailsData = venuesData.filter(data => data.id === id)
    return (
        <div className='container mx-auto'>
            {
                vanuesDetailsData.map(data =><VenuesDetailsCard key={data.id} data={data}></VenuesDetailsCard>)
            }
            <button className='btn bg-pink-600 bg-opacity-50 text-xl font-bold uppercase my-4 mx-auto block '>add to cart</button>
        </div>
    )
}

export default VanuesDetails
