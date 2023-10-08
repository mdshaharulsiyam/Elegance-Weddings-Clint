import React, { useContext, useEffect } from 'react'
import { weddingContextProvider } from '../Context/ContextProvider'
import { Navigate, useLocation, useNavigate } from 'react-router-dom'

const PrivetRoute = ({children}) => {
    const localtion = useLocation()
    console.log(localtion)
    const {currentUser,loading} = useContext(weddingContextProvider)
    if (loading) {
        return <span className="loading text-center my-40 text-6xl loading-spinner text-error"></span>
    }
    if (!currentUser) {
        return <Navigate state={`${localtion.pathname}`} to={'/login'}></Navigate>
    }else{
        return (
            <div>
                {children}
            </div>
          )
    }
  
}

export default PrivetRoute

