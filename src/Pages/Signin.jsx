import React, { useState } from 'react'

export default function Signin() {
  return (
    <section>
      <h1 className='text-3xl font-bold text-center py-6'>Sign In</h1>

      <div className='max-w-6xl mx-auto my-5 flex justify-center sm:mx-10 flex-wrap items-center'>

        <div className='lg:w-[50%] md:w-[67%] '>

          <img src="./key.png"
          className='w-full rounded-2xl' 
          />
        </div>
        <div className='mx-auto w-full md:mt-6 lg:w-[40%] lg:ml-20 md:w-[67%] sm:my-5 '>
          <form>
            <input 
              className='w-full rounded-lg h-8 px-5 py-5'
              placeholder='Email Address'
            />
          </form>
        </div>
      </div>
    </section>
  )
}
