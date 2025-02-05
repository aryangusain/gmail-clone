import React, { useEffect } from 'react'
import Sidebar from './Sidebar'
import { Outlet } from 'react-router'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router'

function Body() {

  const navigate = useNavigate();
  const user = useSelector(state => state.app.user);
  
  useEffect(() => {
    if(!user) {
      console.log('navigating to signup')
      navigate('/signup');
    }
  }, [user])

  return (
    <div className="flex flex-1 overflow-hidden pb-2">
        <Sidebar />
        <Outlet />
    </div>
  )
}

export default Body