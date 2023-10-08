import React from 'react'
import { GiLoveMystery } from 'react-icons/gi';
import { AiFillStar } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';
const GalleryDataCard = ({data}) => {
    const {id,place,placeTitle,image,ratings,brideName,groomName,description}=data;
    const navigate = useNavigate()
    const handelbtn =()=>{
        navigate('/')
    }
  return (
    <div className='my-11'>
      
        <h3 className='text-2xl font-bold pt-2 flex justify-center items-center my-4  gap-2 text-[#FF6969]'>{groomName}<GiLoveMystery className='mt-2'></GiLoveMystery>{brideName}</h3>
       <img className='w-full' src={image} alt="" />
       <p className='text-lg font-semibold text-pink-500 italic py-6'>place : {place}</p>
        <h3 className='text-[#FC8181] text-xl font-bold'>{placeTitle}</h3>
       <p className='flex justify-start items-center gap-2 text-lg font-bold py-3'>rating {ratings} <AiFillStar></AiFillStar></p>
       <p className='font-semibold text-base tracking-[1px]'>{description}</p>
       <button onClick={handelbtn} className='btn bg-pink-600 my-2 text-white'>back to home</button>
    </div>
  )
}

export default GalleryDataCard
