import { createContext, useEffect, useState } from "react";
import React from 'react'
export const weddingContextProvider = createContext(null)
const ContextProvider = ({children}) => {
  const [servicesData,setservicesData] = useState([])
  useEffect(()=>{
    fetch('./services.json').then((res)=> res.json()).then((data)=>setservicesData(data))
  },[])
  const contextData = {
    servicesData
  }
  return (
    <weddingContextProvider.Provider value={contextData}>
        {children}
    </weddingContextProvider.Provider>
  )
}

export default ContextProvider
