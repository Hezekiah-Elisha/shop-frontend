// import React from 'react'

export default function LoginPage() {
  return (
    <div className='font-manrope'>
        <div className='flex flex-col items-center gap-2'>
            <label htmlFor="" className='text-2xl'>Please Login</label>
            <form action="" className='flex flex-col w-1/2 gap-3'>
                <input type="email" placeholder='Email' className='bg-slate-400 rounded-lg p-2 placeholder:text-primary-400 text-white' />
                <input type="password" name="" id="" placeholder='Password' className='bg-slate-400 rounded-lg p-2 placeholder:text-primary-400' />
                <button className='bg-primary-400 text-white px-4 py-2 rounded-lg'>LOGIN</button>
            </form>
        </div>
    </div>
  )
}
