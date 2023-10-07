import React, { useEffect, useState } from 'react'
import BannerData from './BannerData';

const Banner = () => {
  const [bannerData,setbannerData]=useState([]);
  useEffect(()=>{
    fetch('./baner.json').then((res)=> res.json()).then((data)=>setbannerData(data))
  },[])
  return (
    <div>
      {
        bannerData.map(data=> <BannerData key={data.id} data={data}></BannerData>)
      }
    </div>
  )
}

export default Banner
