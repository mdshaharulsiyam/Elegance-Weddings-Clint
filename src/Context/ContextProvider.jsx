import { createContext, useEffect, useState } from "react";
import React from 'react'
export const weddingContextProvider = createContext(null)
const ContextProvider = ({children}) => {
  const [servicesData,setservicesData] = useState([])
  const [galleryData,setgalleryData] = useState([])
  const [venuesData,setvenuesData] = useState([])
  useEffect(()=>{
    fetch('./services.json').then((res)=> res.json()).then((data)=>setservicesData(data))
  },[])
  useEffect(()=>{
    fetch('./gallery.json').then((res)=> res.json()).then((data)=>setgalleryData(data))
  },[])
  useEffect(()=>{
    fetch('./venues.json').then((res)=> res.json()).then((data)=>setvenuesData(data))
  },[])
  const contextData = {
    servicesData,
    galleryData,
    venuesData
  }
  return (
    <weddingContextProvider.Provider value={contextData}>
        {children}
    </weddingContextProvider.Provider>
  )
}

export default ContextProvider
