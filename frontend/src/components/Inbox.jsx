import React from 'react'
import Mail from './Mail'
import { MdCropSquare } from 'react-icons/md'
import { FaCaretDown } from 'react-icons/fa'
import { IoMdMore, IoMdRefresh } from 'react-icons/io'

function Inbox() {
  return (
    <div className='w-full mr-3 flex-1 flex flex-col ml-4 rounded-2xl bg-[#2c2c2c] overflow-hidden'>
      <div className='text-[#c1c1c1] flex gap-5 items-center mt-3 ml-4'>
        <div className='flex items-center gap-1 mr-2' title='Select'>
          <MdCropSquare size={22} className='cursor-pointer'/>
          <FaCaretDown size={12} className='cursor-pointer'/>
        </div>

        <div className='' title='Refresh'>
          <IoMdRefresh size={18} className='cursor-pointer'/>
        </div>

        <div title='More'>
          <IoMdMore size={20} className='cursor-pointer'/>
        </div>
      </div>

      <div className='mt-4 z-10 overflow-auto scroll'>
        <Mail />
        <Mail />
        <Mail />
        <Mail />
        <Mail />
        <Mail />
        <Mail />
        <Mail />
        <Mail />
        <Mail />
        <Mail />
        <Mail />
        <Mail />
        <Mail />
        <Mail />
        <Mail />
        <Mail />
        <Mail />
        <Mail />
        <Mail />
        <Mail />
        <Mail />
        <Mail />
        <Mail />
        <Mail />
        <Mail />
      </div>
    </div>
  )
}

export default Inbox;