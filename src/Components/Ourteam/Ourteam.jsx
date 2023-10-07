import React, { useEffect, useState } from 'react'
import OurTeamCard from './OurTeamCard'

const Ourteam = () => {
const [ourTeamData,setOurTeamData]=useState([])
    useEffect(()=>{
        fetch('./ourTeam.json').then((res)=> res.json()).then((data)=>setOurTeamData(data))
      },[])
  return (
    <div>
        <h2 className='py-10 text-5xl text-center font-bold text-[#FF6969]'>OUR TEAM</h2>
      <div className='flex flex-wrap justify-center items-center gap-4 my-20'>
        {
            ourTeamData.map(data => <OurTeamCard key={data.id } data={data}></OurTeamCard>)
        }
      </div>
    </div>
  )
}

export default Ourteam
