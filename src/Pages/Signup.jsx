import React, { useState } from 'react'
import { AiFillEyeInvisible,AiFillEye } from 'react-icons/ai'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import Button from '../components/Button'
import { getAuth,createUserWithEmailAndPassword,updateProfile } from "firebase/auth"
import { db } from "../Firebase"
import { doc, serverTimestamp, setDoc } from 'firebase/firestore'

export default function Signup() {
  const navigate=useNavigate()
  const [showPassword,setShowPassword] = useState(false)
  const [name,setName] = useState('')
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')


  async function onSubmit(e){
    e.preventDefault()
    try{
      const auth = getAuth();
      if(name===''){
        throw {code:'auth/no-name'}
      }
      const userCredential= await createUserWithEmailAndPassword(auth, email, password)
      console.log (userCredential)
      const user = userCredential.user
      updateProfile(user,{
        displayName:name
      })

      const userDetails = {
        'name':name,
        'email':email,
        'timestamp':serverTimestamp()
      }

      await setDoc(doc(db,"users",user.uid),userDetails)
      toast.success("Registration Successfull")
      navigate('/')
    }catch(error){
      console.log(error)
      const msg = displayErrors(error.code)
      toast.error(msg)
    }
  }

  function displayErrors(code){
    switch(code){
      case 'auth/email-already-in-use':
        return "This Email is Already Registered"

      case 'auth/invalid-email':
        return "Invalid Email Address"

      case 'auth/weak-password':
        return "Password should be atleast 6 characters long"

      case 'auth/no-name':
        return "Name is Required"

      default:
        return "Something Went Wrong!!"
        
          
    }
  }

  return (
    <section>
      <h1 className='text-3xl font-bold text-center py-6'>Sign Up</h1>

      <div className='max-w-6xl mx-4 my-5 flex justify-center sm:mx-10 flex-wrap items-center'>
        <div className='lg:w-[50%] md:w-[67%] '>

          <img 
            src='./key.png' 
            className='w-full rounded-2xl'
            alt='Lock'
          />

        </div>
        <div className='mx-auto w-full md:mt-6 lg:w-[40%] lg:ml-20 md:w-[67%] sm:my-5  '>
          <form onSubmit={onSubmit}>
          <input 
              type='text'
              className='w-full rounded-lg h-8 px-5 py-6 
              border-gray-300 border-2 text-lg focus:border-blue-500 focus:outline-none
              transition ease-in-out duration-300 mb-3'
              placeholder='Enter Your Name'
              onChange={(e)=>setName(e.target.value)}
            />

            <input 
              type='email'
              className='w-full rounded-lg h-8 px-5 py-6 
              border-gray-300 border-2 text-lg focus:border-blue-500 focus:outline-none
              transition ease-in-out duration-300 mb-3'
              placeholder='Email Address'
              onChange={(e)=>setEmail(e.email.value)}
            />

            <div className=' relative'>
              <input 
                type={showPassword?'text':'password'}
                className='w-full rounded-lg h-8 px-5 py-6 
                border-gray-300 border-2 text-lg focus:border-blue-500 focus:outline-none
                transition ease-in-out duration-300 mb-3'
                placeholder='Password'
                onChange={(e)=>setPassword(e.password.value)}
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
              <p className='text-lg'>Already Have An Account?<Link to='/sign-in' className='font-semibold text-red-600'> Login  </Link></p>
              <Link to='/forgot-password' className='font-semibold text-blue-500'>Forgot Password?</Link>
            </div>

            <Button title='Sign up' back='bg-blue-600'/> 

            <div className='flex items-center before:border-t  before:flex-1  before:border-gray-500 after:border-t after:flex-1 after:border-gray-500'>
              <p className='font-bold mx-3'>OR</p>
            </div>

            <Button type="button" click={true} title='Continue With Google' back='bg-red-500' pic='google' />

          </form>
        </div>
      </div>
    </section>
  )
}
