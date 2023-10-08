import React, { useContext, useEffect } from 'react'
import { weddingContextProvider } from '../Context/ContextProvider'
import { Navigate, useLocation, useNavigate } from 'react-router-dom'

const PrivetRoute = ({children}) => {
    const localtion = useLocation()
    localtion.state = '/gallerydetails/S4nth0meChVrch'
    console.log(localtion)
    const navigate = useNavigate()
    const {currentUser,loading} = useContext(weddingContextProvider)
    if (loading) {
        return <span className="loading text-center my-40 text-6xl loading-spinner text-error"></span>
    }
    if (!currentUser) {

       useEffect(()=>{
        navigate('/login')
       },[])
    }else{
        return (
            <div>
                {children}
            </div>
          )
    }
  
}

export default PrivetRoute

