import { createContext } from "react";
import React from 'react'
const weddingContextProvider = createContext(null)

const ContextProvider = ({children}) => {
  return (
    <weddingContextProvider.Provider>
        {children}
    </weddingContextProvider.Provider>
  )
}

export default ContextProvider
