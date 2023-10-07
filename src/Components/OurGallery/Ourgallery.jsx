import React, { useContext } from 'react'
import { weddingContextProvider } from '../../Context/ContextProvider'
import HompageGallerySection from './HompageGallerySection'
import { Link } from 'react-router-dom'

const Ourgallery = () => {
    const {galleryData}=useContext(weddingContextProvider)
    
  return (
    <div className='text-center mx-auto container py-12 '>
        <h2 className='py-10 text-5xl font-bold text-[#FF6969]'>OUR GALLERY <br /><span className='italic font-normal'>Photos</span></h2>
      
      <div className='flex justify-start items-center gap-[1%] flex-wrap'>
        {
            galleryData.slice(0,8).map(data=> <HompageGallerySection key={data.id} data={data}></HompageGallerySection>)
        }
      </div>
      {
       ( galleryData.length>8) && <Link to={'/gallery'}><button className='py-2 px-6 mt-8 bg-[#FF6969] text-white text-lg font-semibold rounded-md active:scale-90'>see more...</button> </Link>
      }
    </div>
  )
}

export default Ourgallery
