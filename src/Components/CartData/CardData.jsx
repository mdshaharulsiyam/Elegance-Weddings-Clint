import React, { useContext, useEffect, useState } from 'react'
import { weddingContextProvider } from '../../Context/ContextProvider';
import VenuesCard from '../Venues/VenuesCard';
import StoredCart from '../StoredCart/StoredCart';

const CardData = () => {
  const { currentUser } = useContext(weddingContextProvider);
  const [storeditem, setstoreditem] = useState([]);
  const [venuesData, setvenuesData] = useState([])
  useEffect(() => {
    fetch('./venues.json').then((res) => res.json()).then((data) => setvenuesData(data))
  }, [])
  useEffect(() => {
    let cart = localStorage.getItem('cart')
    if (cart) {
      let cartparse = JSON.parse(cart);
      setstoreditem(cartparse)
    }
  }, [])
  let cartdata = []
  storeditem.map(storeid => {
    let isitemstored = venuesData.filter(item => item.id === storeid)
    cartdata.push(isitemstored)
  })
  console.log(cartdata)
  return (
    <div className='container mx-auto'>
      <h2 className='text-2xl font-bold'>{currentUser}</h2>
      <p className='text-center font-bold text-2xl'>cart items</p>
      <div className='flex justify-center items-center w-full gap-4 my-6'>
        {
          cartdata.map(venue=> <StoredCart key={venue.id} venue={venue}></StoredCart>)
        }
      </div>
    </div>
  )
}

export default CardData
