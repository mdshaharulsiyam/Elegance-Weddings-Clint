import React from 'react'
import { AiOutlineArrowRight } from 'react-icons/ai';
import { Link } from 'react-router-dom';
const BannerData = ({ data }) => {
    const { description, heading, image, cardimg } = data;
    return (
        <div className='relative'>
            <img className='w-full h-screen md:h-[500px]  object-cover' src={image} alt="" />
            <div className='bg-[#CD979A] absolute w-full top-0 left-0 h-full bg-opacity-70'></div>
            <div className='container mx-auto flex md:flex-row flex-col-reverse flex-wrap md:justify-center justify-start  gap-2 items-center absolute top-0 md:top-[50%] left-[50%] -translate-x-[50%] md:-translate-y-[50%]'>
                <div data-aos="fade-up"
                    data-aos-duration="3000" className='md:w-[49%] w-full flex justify-start items-center text-center md:text-left'>
                    <span>
                        <h2 className='font-extrabold italic md:text-4xl text-2xl py-3 mx-auto md:mx-0 max-w-[350px] text-white'>{heading}</h2>
                        <p className='md:text-lg md:font-extrabold font-semibold'>{description}</p>
                        <Link to={'/venus'}><button className='btn bg-[#CD979A] my-2 mt-4 flex justify-start items-center mx-auto md:mx-0'>setup your plan <AiOutlineArrowRight></AiOutlineArrowRight></button></Link>
                    </span>
                </div>
                <div data-aos="fade-up"
                    data-aos-duration="3000" className='md:w-[49%] w-full flex md:justify-end justify-center items-center  overflow-hidden py-2'>
                    <img className='w-[60%] bg-white p-4  object-cover' src={cardimg} alt="" />

                </div>
            </div>

        </div>
    )
}

export default BannerData
