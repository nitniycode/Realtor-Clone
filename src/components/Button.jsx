import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { doc, getDoc, serverTimestamp, setDoc } from 'firebase/firestore';
import React from 'react'
import { FcGoogle } from 'react-icons/fc';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { db } from '../Firebase';

export default function Button({title,back,pic,type,click}) {
  const navigate = useNavigate()

  async function OAuth(){
    try{
      const auth = getAuth();
      const provider = new GoogleAuthProvider();
      const userCredential = await signInWithPopup(auth, provider)
      const user = userCredential.user
      console.log(user)
      navigate('/')

      const docSnap = await getDoc(doc(db, "users", user.uid));

      if(!docSnap.exists()){
        await setDoc(doc(db, "users", user.uid),{
          email:user.email,
          name:user.displayName,
          timestamp:serverTimestamp()
        })
      }

      toast.success("Logged in successfully")
    }catch (error){
      toast.error("Something went wrong")
    }
  }

  return (
    <button onClick={click?OAuth:null} type={type} className={`flex items-center justify-center uppercase 
     ${back} text-white w-full my-5 py-2 rounded-md`}>{pic?<FcGoogle className='bg-white mr-3'/>:''}{title}</button>
  )
}
