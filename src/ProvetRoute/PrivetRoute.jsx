import React, { useContext } from 'react'
import { weddingContextProvider } from '../Context/ContextProvider'
import { useNavigate } from 'react-router-dom'

const PrivetRoute = ({children}) => {
    const navigate = useNavigate()
    const {currentUser,loading} = useContext(weddingContextProvider)
    if (loading) {
        return <span className="loading text-center my-40 text-6xl loading-spinner text-error"></span>
    }
    if (!currentUser) {
        navigate('/')
    }else{
        return (
            <div>
                {children}
            </div>
          )
    }
  
}

export default PrivetRoute

