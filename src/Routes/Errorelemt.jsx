import React from 'react'
import { useRouteError } from 'react-router-dom'

const Errorelemt = () => {
  const routeerror = useRouteError()
  console.log(routeerror)
  return (
    <div>
      <h2>{routeerror}</h2>
    </div>
  )
}

export default Errorelemt
