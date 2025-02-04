import React from 'react'
import Sidebar from './Sidebar'
import { Outlet } from 'react-router'

function Body() {

  return (
    <div className="flex flex-1 overflow-hidden pb-2">
        <Sidebar />
        <Outlet />
    </div>
  )
}

export default Body