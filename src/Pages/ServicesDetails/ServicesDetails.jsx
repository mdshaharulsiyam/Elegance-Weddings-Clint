import React, { useContext, useEffect, useState } from 'react'
import { weddingContextProvider } from '../../Context/ContextProvider'
import { useParams } from 'react-router-dom'
import ServiceDetail from '../../Components/ServiceDetail/ServiceDetail'

const ServicesDetails = () => {  
  const [servicesData, setservicesData] = useState([])
  useEffect(() => {
    fetch('../services.json').then((res) => res.json()).then((data) => setservicesData(data))

  }, [])
  const {id}=useParams()
  const service = servicesData.filter(data=> data.id === id)
  return (
    <div className='container mx-auto'>
      {
        service.map(data => <ServiceDetail key={data.id} data={data}></ServiceDetail>)
      }
    </div>
  )
}

export default ServicesDetails
