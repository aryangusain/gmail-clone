import React from 'react'
import { IoIosSearch } from "react-icons/io";
import { RxHamburgerMenu, RxQuestionMarkCircled } from "react-icons/rx";
import { IoSettingsOutline } from "react-icons/io5";
import { TbGridDots } from "react-icons/tb";
import Avatar from 'react-avatar';
import { toggleSidebar } from '../store/appSlice';
import { useDispatch } from 'react-redux';

function Navbar() {
  const dispatch = useDispatch();

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

      <div className='flex items-center gap-2 lg:w-[60%] md:w-[50%] sm:w-[40%] bg-[#474747] px-3 py-3 rounded-4xl'>
        <IoIosSearch className='w-6 h-6 text-[#e7e7e7] cursor-pointer' />
        <input type='text' placeholder='Search mail' className='placeholder-[#e7e7e7] text-normal text-white focus:outline-none flex-auto'/>
      </div>

      <div className='flex gap-4 items-center ml-10'>
        <RxQuestionMarkCircled className='text-[#e0e0e0] w-6 h-6 cursor-pointer'/>
        <IoSettingsOutline className='text-[#e0e0e0] w-6 h-6 cursor-pointer'/>
        <TbGridDots className='text-[#e0e0e0] w-6 h-6 cursor-pointer'/>
        <Avatar src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6SGvshARHJ5GYSH_Kig8-cYNw5rO3nWn7mA&s' size='32' alt="User Avatar" className='rounded-full cursor-pointer'/>
      </div>

    </nav>
  )
}

export default Navbar