import React from 'react'
import { IoIosSearch } from "react-icons/io";
import { RxHamburgerMenu, RxQuestionMarkCircled } from "react-icons/rx";
import { IoSettingsOutline } from "react-icons/io5";
import { TbGridDots } from "react-icons/tb";
import Avatar from 'react-avatar';
import { toggleSidebar } from '../store/appSlice';
import { useDispatch, useSelector } from 'react-redux';
import toast from 'react-hot-toast';
import axios from 'axios';
import { setUser } from '../store/appSlice';

function Navbar() {
  const dispatch = useDispatch();
  const user = useSelector(state => state.app.user);

  const handleLogout = async() => {
      try {
        const res = await axios.get('http://localhost:3000/api/v1/user/logout', {
          headers: {
            'Content-Type': "application/json"
          },
          withCredentials: true
        })
  
        if(res.data.success) {
          dispatch(setUser(null));
          toast.success(res.data.message, {duration: 4000});
        }
      }
      catch(error) {
        console.log(error);
        toast.error(res.data.message, {duration: 4000});
      }
  }

  return (
    <nav className="flex items-center justify-between w-full h-fit px-4 py-2">
      <div className='flex gap-3'>
        <button
            className="focus:outline-none"
            onClick={() => dispatch(toggleSidebar())}
        >
            <RxHamburgerMenu className="text-[#e0e0e0] w-9 h-9 cursor-pointer rounded-full active:bg-[#444444] p-2"/>
        </button>
        <div className='flex gap-2 items-center'>
          <a href='/'><img src='/logo.png' width={110} alt='logo image' className='cursor-pointer'/></a>
        </div>
      </div>
 
      { user && (
        <>
          <div className='flex items-center gap-2 lg:w-[60%] md:w-[50%] sm:w-[40%] bg-[#474747] px-3 py-3 rounded-4xl'>
            <IoIosSearch className='w-6 h-6 text-[#e7e7e7] cursor-pointer' />
            <input type='text' placeholder='Search mail' className='placeholder-[#e7e7e7] text-normal text-white focus:outline-none flex-auto'/>
          </div>

          <div className='flex gap-4 items-center ml-10'>
            <RxQuestionMarkCircled className='text-[#e0e0e0] w-6 h-6 cursor-pointer'/>
            <IoSettingsOutline className='text-[#e0e0e0] w-6 h-6 cursor-pointer'/>
            <TbGridDots className='text-[#e0e0e0] w-6 h-6 cursor-pointer'/>
            <Avatar src={user.image} size='32' alt="User Avatar" className='rounded-full cursor-pointer'/>
            <button onClick={handleLogout} className='bg-white p-2 rounded-lg cursor-pointer hover:bg-[#121212] border-1 hover:border-white hover:text-[#ffffff] text-black text-sm'>Logout</button>
          </div>
        </>
      )}

    </nav>
  )
}

export default Navbar