import { createContext, useEffect, useState } from "react";
import React from 'react'
export const weddingContextProvider = createContext(null)
const ContextProvider = ({children}) => {
  const [servicesData,setservicesData] = useState([])
  const [galleryData,setgalleryData] = useState([])
  const [venuesData,setvenuesData] = useState([])
  const [loading,setloading] = useState(false)
  useEffect(()=>{
    setloading(true)
    fetch('./services.json').then((res)=> res.json()).then((data)=>setservicesData(data))
    setloading(false)
  },[])
  useEffect(()=>{
    setloading(true)
    fetch('./gallery.json').then((res)=> res.json()).then((data)=>setgalleryData(data))
    setloading(false)
  },[])
  useEffect(()=>{
    setloading(true)
    fetch('./venues.json').then((res)=> res.json()).then((data)=>setvenuesData(data))
    setloading(false)
  },[])
  const contextData = {
    servicesData,
    galleryData,
    venuesData,
    loading
  }
  return (
    <weddingContextProvider.Provider value={contextData}>
        {children}
    </weddingContextProvider.Provider>
  )
}

export default ContextProvider
