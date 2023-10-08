import React from 'react'
import { Link } from 'react-router-dom';
import Storedcartdata from './storedcartdata';

const StoredCart = ({venue}) => {
 
  return (
   <div>
    {
        venue.map(venue=> <Storedcartdata key={venue.id} venue={venue}></Storedcartdata>)
    }
   </div>
  )
}


export default StoredCart
