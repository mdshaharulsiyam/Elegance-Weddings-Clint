import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <div className='bg-[#f2dfdf] py-10 mt-10'>
            <div className='container mx-auto flex justify-center items-center gap-[2%]'>
                <div className='w-[60%]'>
                    <h3 className='text-5xl text-[#FF6969] opacity-80 italic'>Our wedding planners will leave you breathless on your special day.</h3>
                    <span className='flex justify-between items-center font-semibold pt-8 opacity-80'>
                        <p>Copyright Dotcreativemarket</p>
                        <Link to={'#'}>Terms of Use</Link>
                        <Link to={'#'}>Privacy Policy</Link>
                    </span>
                </div>
                <div className='w-[38%] flex justify-end'>
                   <div>
                   <h4 className='uppercase text-base font-semibold'>Sitemap</h4>
                    <div>
                        <Link id='mainmenus' className={'font-semibold text-base   mr-2'} to={'/'}>Home</Link>
                        <Link id='mainmenus' className={'font-semibold text-base  mx-2'} to={'/about'}>about</Link>
                        <Link id='mainmenus' className={' font-semibold text-base  mx-2'} to={'/gallery'}>gallery</Link>
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
