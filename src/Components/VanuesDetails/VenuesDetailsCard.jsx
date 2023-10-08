import React from 'react'
import { AiFillStar } from 'react-icons/ai';

const VenuesDetailsCard = ({ data }) => {
    const { id, place, placeTitle, image, ratings, reviews, description, venuePolicies } = data;
    const { advance, cancellation, alcohol, averagePriceRoom, averagePriceFood } = venuePolicies;
    return (
        <div className='my-10'>
            <img className='w-full object-cover' src={image} alt="" />
            <div className='flex justify-start items-center gap-3 text-pink-600 font-bold italic text-xl my-5'><h3>{placeTitle}</h3> <p className='px-2 py-1 bg-pink-600 text-black rounded-lg bg-opacity-50'>{place}</p></div>
            <div className='flex justify-center gap-[2%] items-center'>
                <div className='w-[49%]'>
                <span className='font-extrabold text-xl text-red-600'>Venue Policies</span>
                   <ul className='list-disc pl-10'>
                    <li className='text-lg font-extrabold'>advance : <span className='text-pink-600'>{advance}</span> </li>
                    <li className='text-lg font-extrabold'>cancellation : <span className='text-pink-600'>{cancellation}</span> </li>
                    <li className='text-lg font-extrabold'>alcohol : <span className='text-pink-600'>{alcohol}</span> </li>
                    <li className='text-lg font-extrabold'>averagePriceRoom : <span className='text-pink-600'>{averagePriceRoom}</span> </li>
                    <li className='text-lg font-extrabold'>averagePriceFood : <span className='text-pink-600'>{averagePriceFood}</span> </li>
                   </ul>
                </div>
                <div className='w-[49%]'>
                    <h4 className='text-xl font-bold uppercase'>description</h4>
                    <p className='py-4 tracking-[1px] font-semibold'>{description}</p>
                    <p className=' text-lg font-bold'>reviews : {reviews}</p>
                    <p className='flex justify-start items-center gap-2 text-lg font-bold'>ratings : {ratings} <AiFillStar></AiFillStar></p>
                </div>
            </div>

        </div>
    )
}

export default VenuesDetailsCard
