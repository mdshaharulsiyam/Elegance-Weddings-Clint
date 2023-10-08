import React from 'react'

const ServiceDetail = ({data}) => {
    const {id,category,name,description,image}=data;
  return (
    <div className='my-11'>
      <img className='w-full' src={image} alt="" />
      <div className='flex justify-start gap-4 items-center my-4'><p className='px-4 py-2 rounded-lg bg-[#FC8181] bg-opacity-70 text-lg font-semibold'>{category}</p> <h3 className='text-[#FC8181] text-xl font-bold '>{name}</h3></div>
      <p className='font-semibold text-base tracking-[1px]'>{description}</p>
    </div>
  )
}

export default ServiceDetail
