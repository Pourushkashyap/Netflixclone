import React, { useState,useRef } from 'react'
import Header from './Header'
import {checkvaliddata} from '../util/validate.js'

function Login() {
    const [issignup,setsignup] = useState(false);
    const email = useRef(null);
    const password = useRef(null);
    const name = useRef(null);
    const [message,setmessage] = useState(null)



    const handlesigninbutton = () =>{
      let message = ""
      if(!issignup){
        message = checkvaliddata(email.current.value,password.current.value);
      }
      else{
        message = checkvaliddata(email.current.value,password.current.value,name.current.value)
      }
      
      console.log(message);
      console.log(email.current.value);
      console.log(password.current.value)
      setmessage(message)
    }

    const handlesingin =() =>{
        setsignup(!issignup);
    }
  return (
    <>
    <Header/>
    <div className='absolute'>
        <img src="https://assets.nflxext.com/ffe/siteui/vlv3/47c2bc92-5a2a-4f33-8f91-4314e9e62ef1/web/IN-en-20240916-TRIFECTA-perspective_72df5d07-cf3f-4530-9afd-8f1d92d7f1a8_large.jpg" alt="" />
    </div>
    <form onSubmit={(e) => e.preventDefault()} className='p-12 w-3/12 bg-black my-36 mx-auto right-0 left-0 text-white absolute rounded-lg bg-opacity-70'>
    <p className='font-bold text-3xl py-4'>{issignup? "Sign Up": "Sign In"}</p>
    {issignup && <input
    ref={name}
         className='p-4 my-4 w-full bg-gray-700'
          type="text"
          placeholder='Enter Name'
          /> } 
        <input
        ref ={email}
        className='p-4 my-4 w-full bg-gray-700'
         type="text"
         placeholder='Email Address' />
         <input
         ref={password}
         className='p-4 my-4 w-full bg-gray-700'
          type="password"
          placeholder='Enter password'
          />
          <p className='py-2 text-red-500 text-lg font-bold'>{message}</p>
          <button onClick={handlesigninbutton} className='p-4 my-6 bg-red-700 w-full rounded-lg'>{issignup? "Sign Up": "Sign In"}</button>
          <p className='py-4' onClick={handlesingin}>{issignup? "Already register? Sign In Now": "New to Netflix? Sign Up Now"}</p>
    </form>

    </>
  )
}

export default Login