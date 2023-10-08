import React, { useContext, useEffect, useState } from 'react'
import { weddingContextProvider } from '../../Context/ContextProvider'
import { useParams } from 'react-router-dom'
import GalleryDataCard from './GalleryDataCard'

const GalleryDetailsData = () => {
    const [data,setData]=useState([])
    const {galleryData}=useContext(weddingContextProvider)
    const {id}= useParams()
   
    useEffect(()=>{
        const singledata = galleryData.filter(data=> data.id === id );
        setData(singledata)
    },[galleryData,id])
  return (
    <div className='container mx-auto'>
      {
        data.map(data=> <GalleryDataCard key={data.id} data={data}></GalleryDataCard>)
      }
    </div>
  )
}

export default GalleryDetailsData
