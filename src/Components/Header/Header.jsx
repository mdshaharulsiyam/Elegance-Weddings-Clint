import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import './Header.css'
const Header = () => {
    const navlinks = <>
    <NavLink id='mainmenus' className={'px-4 active:scale-90 font-semibold text-base py-2  mx-2'} to={'/'}>Home</NavLink>
    <NavLink id='mainmenus' className={'px-4 active:scale-90 font-semibold text-base py-2 mx-2'} to={'/about'}>about</NavLink>
    <NavLink id='mainmenus' className={'px-4 active:scale-90 font-semibold text-base py-2 mx-2'} to={'/gallery'}>gallery</NavLink>
    </>
    return (
        <div className='container mx-auto text-[#FF6969]'>
            <div className="navbar bord">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navlinks}
                        </ul>
                    </div>
                    <Link className=" font-extrabold  normal-case text-2xl" to={'/'}> Elegance Wedding’s </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                    {navlinks}
                    </ul>
                </div>
                <div className="navbar-end">
                <ul tabIndex={0} className="menu menu-sm dropdown-content rounded-box">
                <NavLink id='mainmenus' className={'font-extrabold px-4 bg-[#e1c0c0] rounded-lg active:scale-90 text-base py-2 mx-2'} to={'/login'}>login</NavLink>
                </ul>
                </div>
            </div>
        </div>
    )
}

export default Header
