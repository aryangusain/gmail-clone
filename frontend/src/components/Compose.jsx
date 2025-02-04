import React from 'react'
import { BiTrash } from 'react-icons/bi'
import { BsPaperclip } from 'react-icons/bs'
import { FaCaretDown } from 'react-icons/fa'
import { GrGallery } from 'react-icons/gr'
import { HiOutlineEmojiHappy } from 'react-icons/hi'
import { IoLinkOutline, IoResize } from 'react-icons/io5'
import { LiaGoogleDrive } from 'react-icons/lia'
import { MdFormatColorText } from 'react-icons/md'
import { PiDotsThreeVertical } from 'react-icons/pi'
import { RxCross2 } from 'react-icons/rx'
import { VscChromeMinimize } from 'react-icons/vsc'
import { useDispatch, useSelector } from 'react-redux'
import { setIsComposeExpanded } from '../store/appSlice'

function Compose() {
  const dispatch = useDispatch();
  const isComposeExpanded = useSelector(state => state.app.isComposeExpanded);
  console.log(isComposeExpanded);

  return (
    <div className={`shadow-xl rounded-lg bg-white overflow-hidden min-w-fit ${isComposeExpanded ? " block " : " hidden "}`}>
        <div className='flex justify-between items-center w-full max-h-fit px-3 py-1 bg-[#f2f2f2]'>
            <p className='text-sm'>New Message</p>
            <div className='flex gap-0 items-center justify-center'>
                <VscChromeMinimize size={32} className='cursor-pointer p-2 hover:bg-[#eeeeee] duration-300 rounded-full'/>
                <IoResize size={32} className='cursor-pointer p-2 hover:bg-[#eeeeee] duration-300 rounded-full'/>
                <RxCross2 onClick={() => dispatch(setIsComposeExpanded(false))} size={32} className='cursor-pointer p-2 hover:bg-[#eeeeee] duration-300 rounded-full'/>
            </div>
        </div>

        <form className='flex flex-col px-3 min-w-fit'>
            <input type='text' placeholder="To" className='outline-none border-b-2 text-sm py-2 border-b-[#f5f5f5]'/>
            <input type='text' placeholder="Subject" className='outline-none border-b-2 text-sm py-2 border-b-[#f5f5f5]'/>
            <textarea rows={14} cols={60}  className='resize-none scroll-light outline-none py-2 text-sm'></textarea>
        </form>

        <div className='flex justify-between items-center py-4 px-3'>
            <div className='flex gap-3'>
               
                <div className='flex items-center rounded-full h-9 w-fit gap-2 text-sm px-4 bg-[#0c57cc] text-white font-semibold cursor-pointer hover:shadow-sm hover:shadow-[#0f57ff]'>
                    <p>Send</p>
                    <div classname='min-h-10 border-8 border-black'> </div>
                    <FaCaretDown size={14}/>
                </div>

                <div className='flex gap-0 items-center text-[#464646]'>
                    <div className='p-2 rounded-full hover:bg-[#efefef] cursor-pointer'>
                        <MdFormatColorText size={20}/>
                    </div>
                    <div className='p-2 rounded-full hover:bg-[#efefef] cursor-pointer'>
                        <BsPaperclip size={20}/>
                    </div>
                    <div className='p-2 rounded-full hover:bg-[#efefef] cursor-pointer'>
                        <IoLinkOutline size={20}/>
                    </div>
                    <div className='p-2 rounded-full hover:bg-[#efefef] cursor-pointer'>
                        <HiOutlineEmojiHappy size={20}/>
                    </div>
                    <div className='p-2 rounded-full hover:bg-[#efefef] cursor-pointer'>
                        <LiaGoogleDrive size={22}/>
                    </div>
                    <div className='p-2 rounded-full hover:bg-[#efefef] cursor-pointer'>
                        <GrGallery size={16}/>
                    </div>
                    <div className='p-2 rounded-full hover:bg-[#efefef] cursor-pointer'>
                        <PiDotsThreeVertical size={20}/>
                    </div>
                </div>
            </div>

            <div className='p-2 rounded-full hover:bg-[#efefef] text-[#464646] cursor-pointer'>
                <BiTrash size={20}/>
            </div>
        </div>
    </div>
  )
}

export default Compose