import React from 'react'
import Teammember from './Teammember'

const OurTeamCard = ({data}) => {
   const {name,image,teamMembers}=data
  return (
    <div className='flex justify-center items-center gap-2 bg-white px-3 py-3 rounded-[50px]'>
      <img className='w-20 object-cover h-20 rounded-full' src={image} alt="" />
      <div className='w-56'>
        <h4 className='font-bold pb-1'>{name}</h4>
        <ul className='text-xs'>
            {
                teamMembers.map(member=> <Teammember key={member} member={member}></Teammember>)
            }
        </ul>
      </div>
    </div>
  )
}

export default OurTeamCard
