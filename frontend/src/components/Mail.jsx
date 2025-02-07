import React from 'react'
import { MdCropSquare } from 'react-icons/md'
import { RiStarLine } from 'react-icons/ri'
import { useNavigate } from 'react-router'

function Mail({ email }) {
  const navigate = useNavigate();

  return (
    <div onClick={() => navigate(`/email/${email._id}`)} className='flex items-center justify-between px-2 py-0.5 bg-[#161616] border-b-[#404040] border-b cursor-pointer hover:shadow-md hover:scale-100 hover:shadow-[#454545]'>
      <div className='flex items-center flex-2'>
        <MdCropSquare size={36} className='p-2 text-[#585858] rounded-full hover:bg-[#505050] hover:text-[#fefefe]'/>
        <RiStarLine size={34} className='p-2 text-[#585858] rounded-full hover:bg-[#505050] hover:text-[#fefefe]'/>
        <p className='text-[#aeaeae] font-semibold text-sm ml-2'>{email?.subject}</p>
      </div>
      <div className='text-[#aeaeae] font-semibold text-sm flex-5 text-left'>
        {email?.message}
      </div>
      <div className='text-[#878787] font-semibold text-xs flex-1 text-right'>
        30 Jan
      </div>
    </div>
  )
}

export default Mail
