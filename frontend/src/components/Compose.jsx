import React, {useState} from 'react'
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
import { setIsComposeExpanded, setEmails } from '../store/appSlice'
import axios from 'axios';
import toast from 'react-hot-toast';

function Compose() {
  const dispatch = useDispatch();
  const emails = useSelector(state => state.app.emails);
  const isComposeExpanded = useSelector(state => state.app.isComposeExpanded);

  const [formData, setFormData] = useState({
    to: "",
    subject: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(setIsComposeExpanded(false));

    try {
      const res = await axios.post('http://localhost:3000/api/v1/email/create', formData, {
        headers: {
          'Content-Type': "application/json"
        },
        withCredentials: true
      })

      if(res.data.success) {
        dispatch(setEmails([...emails, res.data.email]));
        toast.success(res.data.message, {duration: 4000});
      }
    }
    catch(error) {
      console.log(error);
      toast.error(res.data.message, {duration: 4000});
    }
  }

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
            <input type='text' onChange={handleChange} name='to' value={formData.to} placeholder="To" className='outline-none border-b-2 text-sm py-2 border-b-[#f5f5f5]'/>
            <input type='text' onChange={handleChange} name='subject' value={formData.subject} placeholder="Subject" className='outline-none border-b-2 text-sm py-2 border-b-[#f5f5f5]'/>
            <textarea rows={14} cols={60} onChange={handleChange} name='message' value={formData.message} className='resize-none scroll-light outline-none py-2 text-sm'></textarea>
        </form>

        <div className='flex justify-between items-center py-4 px-3'>
            <div className='flex gap-3'>
               
                <div onClick={handleSubmit} className='flex items-center rounded-full h-9 w-fit gap-2 text-sm px-4 bg-[#0c57cc] text-white font-semibold cursor-pointer hover:shadow-sm hover:shadow-[#0f57ff]'>
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