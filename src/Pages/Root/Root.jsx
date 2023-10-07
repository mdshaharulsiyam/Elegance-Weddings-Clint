import React from 'react'
import { Outlet } from 'react-router-dom'

const Root = () => {
  return (
    <div>
      <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, deleniti?</h2>
      <Outlet></Outlet>
    </div>
  )
}

export default Root
