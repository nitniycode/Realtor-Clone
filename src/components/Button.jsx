import React from 'react'
import { FcGoogle } from 'react-icons/fc';

export default function Button({title,back,pic}) {
  return (
    <button className={`flex items-center justify-center uppercase${back} text-white w-full my-5 py-2 rounded-md`}>{pic?<FcGoogle className='bg-white mr-3'/>:''}{title}</button>
  )
}
