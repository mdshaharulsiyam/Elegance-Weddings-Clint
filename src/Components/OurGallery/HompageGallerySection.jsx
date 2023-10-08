import React from 'react'
import './HompageGallerySection.css'
import { GiLoveMystery } from 'react-icons/gi';
import { AiFillStar } from 'react-icons/ai';
import { Link } from 'react-router-dom';
const HompageGallerySection = ({data}) => {
const {image,id,brideName,groomName,place,ratings,description}=data;
  return (
    <div data-aos="flip-right" id='galleryCard' className='w-[24%] my-2 text-center box-border p-3 bg-white rounded-lg cursor-pointer '>
      <img id='galleryCardImage' className='object-cover w-full h-52 rounded-lg inline-block mx-auto' src={image} alt="" />
      <h3 className='text-lg font-bold pt-2 flex justify-center items-center gap-2 text-[#FF6969]'>{groomName}<GiLoveMystery className='mt-2'></GiLoveMystery>{brideName}</h3>
      <div className='content'>
      <h3 className='text-lg font-bold pt-1'> place : {place}</h3>
      <p>{description.slice(0,90)}...</p>
      <p className='flex justify-center items-center gap-2 text-lg font-bold'>{ratings} <AiFillStar></AiFillStar></p>
      <Link to={`/gallerydetails/${id}`}><button className='py-2 px-6 bg-[#FF6969] text-white text-lg font-semibold rounded-md active:scale-90'>know more...</button> </Link>
      </div>
    </div>
  )
}

export default HompageGallerySection
