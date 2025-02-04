import React from 'react'
import Avatar from 'react-avatar'
import { AiOutlineExport, AiOutlinePrinter } from 'react-icons/ai'
import { CgMailForward, CgMailReply, CgSmileMouthOpen } from 'react-icons/cg'
import { CiStar } from 'react-icons/ci'
import { FaRegTrashCan } from 'react-icons/fa6'
import { GoArrowLeft, GoMoveToEnd, GoStop, GoUnread } from 'react-icons/go'
import { IoMdArrowDropdown } from 'react-icons/io'
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md'
import { RiInboxArchiveLine } from 'react-icons/ri'
import { RxDotsVertical } from 'react-icons/rx'
import { useNavigate } from 'react-router'

function Email() {
  const navigate = useNavigate();

  return (
    <div className='w-full mr-3 flex flex-1 flex-col ml-4 rounded-2xl bg-[#2c2c2c] overflow-auto scroll'>
        
        <div className='flex justify-between items-center text-[#c0c0c0] min-h-fit px-4 py-3.5'>
          <div className='flex flex-1 items-center justify-self-start gap-8'>
            <div>
              <GoArrowLeft size={20} className='cursor-pointer' onClick={() => navigate('/')}/>
            </div>
            <div className='flex gap-6 items-center'>
              <RiInboxArchiveLine size={20} className='cursor-pointer'/>
              <GoStop size={18} className='cursor-pointer'/>
              <FaRegTrashCan size={16} className='cursor-pointer'/>
            </div>
            <div className='h-5 border text-[#505050]'></div>
            <div className='flex gap-6 items-center'>
              <GoUnread size={16} className='cursor-pointer'/>
              <GoMoveToEnd size={18} className='cursor-pointer'/>
              <RxDotsVertical size={18} className='cursor-pointer'/>
            </div>
          </div>
          <div className='flex items-center gap-6'>
            <p className='text-xs'>5 of 100</p>
            <div className='flex gap-6'>
              <MdKeyboardArrowLeft size={20} className='cursor-pointer'/>
              <MdKeyboardArrowRight size={20} className='cursor-pointer'/>
            </div>
          </div>
        </div>

        <div className='flex flex-1 gap-4 bg-white overflow-auto scroll p-4'>
          <div className='h-full max-w-fit'>
            <Avatar src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6SGvshARHJ5GYSH_Kig8-cYNw5rO3nWn7mA&s' size='36' className='rounded-full mt-[26px]'/>
          </div>

          <div className='flex flex-col w-full h-full'>
            <div className='flex justify-between w-full max-h-fit items-center'>
              <div className='text-2xl'>
                Your application to the D.E Shaw Group
              </div>

              <div className='flex gap-1 text-[#4a4a4a] items-center'>
                <AiOutlinePrinter size={38} className='cursor-pointer p-2 hover:bg-[#eeeeee] duration-300 rounded-full'/>
                <AiOutlineExport size={34} className='cursor-pointer p-2 hover:bg-[#eeeeee] duration-300 rounded-full'/>
              </div>
            </div>

            <div className='flex justify-between w-full max-h-fit items-center mt-2'>
              <div className='text-sm font-semibold'>
                recruiting@hyd.deshaw.com
              </div>
              <div className='flex items-center gap-4'>
                <div className='text-xs text-[#848484]'>
                  25 Jan 2025, 09:19 (7 days ago)
                </div>
                <div className='flex gap-1 items-center text-[#4a4a4a]'>
                  <div>
                    <CiStar size={36} className='cursor-pointer p-2 hover:bg-[#eeeeee] duration-300 rounded-full'/>
                  </div>
                  <div>
                    <CgSmileMouthOpen size={34} className='cursor-pointer p-2 hover:bg-[#eeeeee] duration-300 rounded-full'/>
                  </div>
                  <div>
                    <CgMailReply size={38} className='cursor-pointer p-2 hover:bg-[#eeeeee] duration-300 rounded-full'/>
                  </div>
                  <div>
                    <RxDotsVertical size={32} className='cursor-pointer p-2 hover:bg-[#eeeeee] duration-300 rounded-full'/>
                  </div>
                </div>
              </div>
            </div>

            <div className='flex items-center gap-1 max-h-fit p-0 -mt-2 text-[12px] '>
              <p className='text-[#747474]'>to me</p>
              <IoMdArrowDropdown size={16} className='cursor-pointer text-[#747474]'/>
            </div>
          
          <div className='text-[14px] text-left mt-2 mb-12'>
            {/* Body of Email */}
            Dear Aryan,
            <br></br>
            <br></br>
            Your application has been received and will be carefully considered by a member of our recruiting team. Thank you for your interest in the D. E. Shaw group.
            <br></br><br></br>
            Regards,<br></br>
            Human Capital | Recruiting<br></br>
            D. E. Shaw India Private Limited<br></br>

          </div>

          <div className='flex gap-4 max-h-fit text-[#4a4a4a]'>
            <div className='flex gap-1.5 items-center hover:bg-[#eeeeee] duration-300 rounded-full border border-[#4a4a4a] px-4 py-1.5 cursor-pointer'>
              <CgMailReply size={20}/>
              <p>Reply</p>
            </div>
            <div className='flex gap-1.5 items-center hover:bg-[#eeeeee] duration-300 rounded-full border border-[#4a4a4a] px-4 py-1.5 cursor-pointer'>
              <CgMailForward size={20} />
              <p>Forward</p>
            </div>
            <div>
              <CgSmileMouthOpen size={38} className='cursor-pointer p-2 hover:bg-[#eeeeee] duration-300 rounded-full border border-[#4a4a4a]'/>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Email