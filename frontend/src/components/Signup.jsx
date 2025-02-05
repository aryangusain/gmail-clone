import React, { useState } from 'react'
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router'
import axios from 'axios';

function Signup() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:3000/api/v1/user/register', formData, {
        headers: {
          'Content-Type': "application/json"
        },
        withCredentials: true
      })

      console.log(res.data);

      if(res.data.success) {
        navigate('/login');
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
            <h1 className='font-bold text-2xl uppercase my-2'>Signup</h1>
            <input type='text' placeholder='Name' name='name' onChange={handleChange} value={formData.name} className='border-gray-4 rounded-md p-2 outline-none bg-gray-100'/>
            <input type='email' placeholder='Email' name='email' onChange={handleChange} value={formData.email} className='border-gray-4 rounded-md px-2 py-1 outline-none bg-gray-100'/>
            <input type='password' placeholder='Password' name='password' onChange={handleChange} value={formData.password} className='border-gray-4 rounded-md px-2 py-1 outline-none bg-gray-100'/>
            <button type='submit' className='cursor-pointer bg-gray-800 p-2 text-white my-2 rounded-md'>Signup</button>
            <p className='text-center'>Already have an account? <Link to={'/login'} className='text-blue-500 underline'>Login</Link></p>
        </form>
    </div>
  )
}

export default Signup