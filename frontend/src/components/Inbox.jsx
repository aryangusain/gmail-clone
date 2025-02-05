import React, { useEffect } from 'react'
import Mail from './Mail'
import { MdCropSquare } from 'react-icons/md'
import { FaCaretDown } from 'react-icons/fa'
import { IoMdMore, IoMdRefresh } from 'react-icons/io'
import toast from 'react-hot-toast'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { setEmails } from '../store/appSlice'

function Inbox() {
  const dispatch = useDispatch();
  const emails = useSelector(state => state.app.emails);

  useEffect(() => {
    const getAllEmails = async() => {
      try {
        const res = await axios.get('http://localhost:3000/api/v1/email/getallemails', {
          withCredentials: true
        });
        dispatch(setEmails(res.data.emails));
      }
      catch(error) {
        console.log(error);
        toast.error(res.data.message);
      }
    }
    getAllEmails();
  }, [])

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

        {
          (emails.length > 0) 
          ?
          <div className='mt-4 overflow-auto scroll'>
            {emails.map((email) => <Mail key={email._id} email={email}/>)}
          </div>
          :
          <div className='p-4 text-2xl text-white h-full  w-full flex items-start justify-center'>No Emails...</div>
        }
    </div>
  )
}

export default Inbox;