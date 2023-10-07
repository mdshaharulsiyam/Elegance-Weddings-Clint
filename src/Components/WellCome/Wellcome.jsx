import React from 'react'
import { Link } from 'react-router-dom'
import { BsArrowRight } from 'react-icons/bs';
const Wellcome = () => {
    return (
        <div className='mx-auto container flex flex-wrap justify-center items-center gap-[2%] py-8 my-10'>
            <div data-aos="zoom-in-right" className='w-[49%]'>
                <img src="./wellcomeimg.jpg" alt="" />
            </div>
            <div className='w-[49%] border-l-2 border-[#FF6969] p-2'>
                <h2 data-aos="zoom-out" className='text-[#FF6969] text-3xl font-semibold py-5 pt-0'>WELCOME <br /> <span className='font-normal italic'> to Our Site</span></h2>
                <p data-aos="fade-left"
                    data-aos-anchor="#example-anchor"
                    data-aos-offset="500"
                    data-aos-duration="500" className='font-bold opacity-80 py-2 tracking-[1.5px]'>Elegance Wedding’s mission is to deliver a heartfelt planning experience so you have a heart filled wedding day.</p>
                <p data-aos="fade-up"
                    data-aos-anchor-placement="center-bottom" className='font-bold opacity-80 py-2 tracking-[1.5px]'>You can count on us to be calm, loving, hands-on and, most importantly, professional throughout your entire planning process.</p>
                <Link data-aos="flip-right" to={'/about'}><button className='active:scale-90 hover:text-black transition-all flex justify-start items-center  rounded px-8 py-3 bg-[#FF6969] font-extrabold text-base text-white'>About us <BsArrowRight className='ml-3 mt-1'></BsArrowRight> </button></Link>
            </div>
        </div>
    )
}

export default Wellcome
