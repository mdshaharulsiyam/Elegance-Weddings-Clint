import React, { useContext } from 'react'
import { weddingContextProvider } from '../../Context/ContextProvider'
import { useParams } from 'react-router-dom'
import ServiceDetail from '../../Components/ServiceDetail/ServiceDetail'

const ServicesDetails = () => {
  const {servicesData}= useContext(weddingContextProvider)
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
