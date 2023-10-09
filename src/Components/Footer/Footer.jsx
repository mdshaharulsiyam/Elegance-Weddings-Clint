import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <div className='bg-[#f2dfdf] py-10 mt-10'>
            <div className='container mx-auto flex justify-center md:flex-row flex-col items-center gap-[2%]'>
                <div className='md:w-[60%] w-full px-2 md:px-0 my-4 md:my-0'>
                    <h3 className='md:text-5xl text-3xl text-[#FF6969] opacity-80 italic'>Our wedding planners will leave you breathless on your special day.</h3>
                    <span className='flex justify-between items-center font-semibold pt-8 opacity-80'>
                        <p>Copyright Dotcreativemarket</p>
                        <Link to={'#'}>Terms of Use</Link>
                        <Link to={'#'}>Privacy Policy</Link>
                    </span>
                </div>
                <div className='md:w-[38%] w-full flex md:justify-end justify-start'>
                   <div>
                   <h4 className='uppercase text-base font-semibold'>Site map</h4>
                    <div>
                        <Link id='mainmenus' className={'font-semibold text-base   mr-2'} to={'/'}>Home</Link>
                        <Link id='mainmenus' className={'font-semibold text-base  mx-2'} to={'/about'}>about</Link>
                        <Link id='mainmenus' className={' font-semibold text-base  mx-2'} to={'/gallery'}>gallery</Link>
                        <Link id='mainmenus' className={'px-4 active:scale-90 font-semibold text-base py-2 mx-2'} to={'/contact'}>Contact Us</Link>
                    </div>
                    <div className='py-2 mt-4'>
                        <h4 className='uppercase py-2'>newsletter</h4>
                        <input type="text" placeholder="enter you email address" className="input input-bordered input-error w-full max-w-xs" /> <button className='uppercase text-lg bg-[#FF6969] active:scale-90 rounded-lg  text-white mt-3 p-2 px-5 '>subscribe</button>
                    </div>
                   </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
