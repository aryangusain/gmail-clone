import React from 'react'
import { Link } from 'react-router'

function Signup() {
  return (
    <div className='flex items-center justify-center w-screen h-screen'>
        <form action='' className='flex flex-col gap-3 bg-white p-4 rounded-xl lg:w-[25%] md:w-[35%] sm:w-[50%]'>
            <h1 className='font-bold text-2xl uppercase my-2'>Signup</h1>
            <input type='text' placeholder='Name' className='border-gray-4 rounded-md p-2 outline-none bg-gray-100'/>
            <input type='email' placeholder='Email' className='border-gray-4 rounded-md px-2 py-1 outline-none bg-gray-100'/>
            <input type='password' placeholder='Password' className='border-gray-4 rounded-md px-2 py-1 outline-none bg-gray-100'/>
            <button type='submit' className='bg-gray-800 p-2 text-white my-2 rounded-md'>Signup</button>
            <p className='text-center'>Already have an account? <Link to={'/login'} className='text-blue-500 underline'>Login</Link></p>
        </form>
    </div>
  )
}

export default Signup