import React from 'react'
import { Link } from 'react-router'
import { useNavigate } from 'react-router';
import { useState } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import { setUser } from '../store/appSlice';

function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:3000/api/v1/user/login', formData, {
        headers: {
          'Content-Type': "application/json"
        },
        withCredentials: true
      })

      if(res.data.success) {
        dispatch(setUser(res.data.user));
        navigate('/');
        toast.success(res.data.message, {duration: 4000});
      }
    }
    catch(error) {
      console.log(error);
      toast.error(res.data.message, {duration: 4000});
    }
  }

  return (
    <div className='flex items-center justify-center w-screen h-screen'>
        <form onSubmit={handleSubmit} className='flex flex-col gap-3 bg-white p-4 rounded-xl lg:w-[25%] md:w-[35%] sm:w-[50%]'>
            <h1 className='font-bold text-2xl uppercase my-2'>Login</h1>
            <input type='email' name='email' onChange={handleChange} placeholder='Email' className='border-gray-4 rounded-md px-2 py-1'/>
            <input type='password' name='password' onChange={handleChange} placeholder='Password' className='border-gray-4 rounded-md px-2 py-1'/>
            <button type='submit' className='cursor-pointer bg-gray-800 p-2 text-white my-2 rounded-md'>Login</button>
            <p className='text-center'>Don't have an account? <Link to={'/signup'} className='text-blue-500 underline'>Signup</Link></p>
        </form>
    </div>
  )
}

export default Login