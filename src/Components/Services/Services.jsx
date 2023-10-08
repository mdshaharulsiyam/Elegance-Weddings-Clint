import React, { useContext, useEffect, useState } from 'react'
import { weddingContextProvider } from '../../Context/ContextProvider'
import ServiceCard from './ServiceCard'

const Services = () => {
  const [servicesData, setservicesData] = useState([])
  useEffect(() => {
    fetch('./services.json').then((res) => res.json()).then((data) => setservicesData(data))

  }, [])
  return (
    <div className='container mx-auto text-center'>
      <h2 id='servicesectionTitle' className='text-5xl font-semibold italic text-[#FF6969] py-10'>our services</h2>
      <div className='flex flex-wrap justify-center items-center gap-7 py-10'>
        {
            servicesData.map(service=> <ServiceCard key={service.id} service={service}></ServiceCard>)
        }
      </div>
    </div>
  )
}

export default Services
