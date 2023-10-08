import React, { useContext } from 'react'
import { weddingContextProvider } from '../../Context/ContextProvider';

const CardData = () => {
   const {currentUser} = useContext(weddingContextProvider);
  return (
    <div className='container mx-auto'>
      <h2 className='text-2xl font-bold text-center'>{currentUser}</h2>
    </div>
  )
}

export default CardData
