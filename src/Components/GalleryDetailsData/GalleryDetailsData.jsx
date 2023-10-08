import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import GalleryDataCard from './GalleryDataCard'

const GalleryDetailsData = () => {
    const {id}= useParams()
   
    const [gallerySectionData,setgallerySectionData]=useState([])
    useEffect(() => {
      fetch('../gallery.json').then((res) => res.json()).then((data) => setgallerySectionData(data))
  
    }, [])
        const singledata = gallerySectionData.filter(data=> data.id === id );

  return (
    <div className='container mx-auto'>
      {
        singledata.map(data=> <GalleryDataCard key={data.id} data={data}></GalleryDataCard>)
      }
    </div>
  )
}

export default GalleryDetailsData
