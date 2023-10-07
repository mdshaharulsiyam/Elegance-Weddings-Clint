import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <div className='bg-[#f2dfdf] py-10'>
            <div className='container mx-auto flex justify-center items-center gap-[2%]'>
                <div className='w-[60%]'>
                    <h3 className='text-5xl text-[#FF6969] opacity-60'>Our wedding planners will leave you breathless on your special day.</h3>
                    <span>
                        <p>Copyright Dotcreativemarket</p>
                        <Link to={'#'}>Terms of Use</Link>
                        <Link to={'#'}>Privacy Policy</Link>
                    </span>
                </div>
                <div className='w-[38%]'>

                </div>
            </div>
        </div>
    )
}

export default Footer
