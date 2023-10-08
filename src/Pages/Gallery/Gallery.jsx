import React, { useContext, useEffect, useState } from 'react'
import { weddingContextProvider } from '../../Context/ContextProvider'
import { Link } from 'react-router-dom'
import HompageGallerySection from '../../Components/OurGallery/HompageGallerySection'
const Gallery = () => {
  document.title = "Gallery-Elegance Weddings"
  const [showdata,setShodata]=useState(8)
  const [gallerySectionData,setgallerySectionData]=useState([])
  useEffect(() => {
    fetch('./gallery.json').then((res) => res.json()).then((data) => setgallerySectionData(data))

  }, [])
  const handelShowmore =()=>{
    setShodata(gallerySectionData.length)
  }
  return (
    <div>
    <div className='text-center mx-auto container py-12 '>
        <h2 className='py-10 text-5xl font-bold text-[#FF6969]'>OUR GALLERY <br /><span className='italic font-normal'>Photos</span></h2>
      
      <div className='flex justify-start items-center gap-[1%] flex-wrap'>
        {
            gallerySectionData.slice(0,showdata).map(data=> <HompageGallerySection key={data.id} data={data}></HompageGallerySection>)
        }
      </div>
      {
       ( gallerySectionData.length>8) && <button onClick={handelShowmore} className='py-2 px-6 mt-8 bg-[#FF6969] text-white text-lg font-semibold rounded-md active:scale-90'>see more...</button>
      }
    </div>
    </div>
  )
}

export default Gallery
