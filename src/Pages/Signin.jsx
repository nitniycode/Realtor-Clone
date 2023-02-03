import React, { useState } from 'react'
import {AiFillEyeInvisible,AiFillEye} from 'react-icons/ai'
import { Link } from 'react-router-dom'
import Button from '../components/Button'

export default function Signin() {

  const [showPassword,setShowPassword] = useState(false)
  
  return (
    <section>
      <h1 className='text-3xl font-bold text-center py-6'>Sign In</h1>

      <div className='max-w-6xl mx-4 my-5 flex justify-center sm:mx-10 flex-wrap items-center'>

        <div className='lg:w-[50%] md:w-[67%] '>

          <img src="./key.png"
          className='w-full rounded-2xl'
          alt='key' 
          />
        </div>
        <div className='mx-auto w-full md:mt-6 lg:w-[40%] lg:ml-20 md:w-[67%] sm:my-5 '>
          <form>
            <input 
              type='email'
              className='w-full rounded-lg h-8 px-5 py-6 border-gray-300 border-2 text-lg focus:border-blue-500 focus:outline-none
              transition ease-in-out duration-300'
              placeholder='Email Address'
            />

            <div className='my-6 relative'>
              <input 
                type={showPassword?'text':'password'}
                className='w-full rounded-lg h-8 px-5 py-6 
                border-gray-300 border-2 text-lg focus:border-blue-500 focus:outline-none
                transition ease-in-out duration-300'
                placeholder='Password'
              />
                {showPassword?(
                  <AiFillEye
                    className=' cursor-pointer absolute right-4 top-[18px] text-[18px]'
                    onClick={()=>setShowPassword(false)}
                  />
                ):(
                  <AiFillEyeInvisible 
                    className='cursor-pointer absolute right-4 top-[18px] text-[18px]'
                    onClick={()=>setShowPassword(true)}  
                  />
                )}                
            </div>
            <div className='flex justify-between'>
              <p className='text-lg'>Don't Have An Account?<Link to='/sign-up' className='font-semibold text-red-600'> Register</Link></p>
              <Link to='/forgot-password' className='font-semibold text-blue-500'>Forgot Password?</Link>
            </div>

            <Button title='Sign in' back="bg-blue-500"/> 

            <div className='flex items-center before:border-t  before:flex-1  before:border-gray-500 after:border-t after:flex-1 after:border-gray-500'>
              <p className='font-bold mx-3'>OR</p>
            </div>

            <Button title='Continue With Google' back="bg-red-500" pic='google' />
          </form>
        </div>
      </div>
    </section>
  )
}
