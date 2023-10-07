import React from 'react'
import { AiOutlineArrowRight } from 'react-icons/ai';
import { Link } from 'react-router-dom';
const BannerData = ({ data }) => {
    const { description, heading, image, cardimg } = data;
    return (
        <div className='relative'>
            <img className='w-full h-[500px] object-cover' src={image} alt="" />
            <div className='bg-[#CD979A] absolute w-full top-0 left-0 h-full bg-opacity-70'></div>
                <div className='container mx-auto flex flex-wrap justify-center gap-[2%] items-center absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]'>
                    <div data-aos="fade-down-right" className='w-[49%] h-96 flex justify-start items-center'>
                    <span>
                    <h2 className='font-extrabold italic text-4xl py-3 max-w-[350px] text-white'>{heading}</h2>
                     <p className='text-lg font-extrabold'>{description}</p>
                     <Link to={'/venus'}><button className='btn bg-[#CD979A] my-2 mt-4 flex justify-start items-center'>setup your plan <AiOutlineArrowRight></AiOutlineArrowRight></button></Link>
                    </span>
                    </div>
                    <div data-aos="fade-up-left" className='w-[49%] flex justify-end items-center  h-96  overflow-hidden'>
                    <img className='w-[60%] bg-white p-4  object-cover' src={cardimg} alt="" />

                    </div>
                </div>
            
        </div>
    )
}

export default BannerData
