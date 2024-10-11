import React, { useState,useRef } from 'react'
import Header from './Header'
import {checkvaliddata} from '../util/validate.js'
import {createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import {auth} from '../util/firebase.js'
import {useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addUser } from '../util/userSlice.jsx';
import { LOGO, USER_LOGO } from '../util/constant.js';
function Login() {
    const [issignup,setsignup] = useState(false);
    const email = useRef(null);
    const password = useRef(null);
    const name = useRef(null);
    const [message,setmessage] = useState(null)
   
   const dispatch = useDispatch();
   



    const handlesigninbutton = () =>{
      let message = ""
      if(!issignup){
        message = checkvaliddata(email.current.value,password.current.value);
      }
      else{
        message = checkvaliddata(email.current.value,password.current.value,name.current.value)
      }
      setmessage(message)
            if(message) return;
         if(issignup) {
         //signup logic
         createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
         .then((userCredential) => {
           // Signed up 
           const user = userCredential.user;
           updateProfile(user, {
            displayName: name.current.value,
             photoURL: USER_LOGO
          })
          .then(() => {
            const {uid,email,displayName,photoURL} = auth.currentUser;
            dispatch(
              addUser({
                uid:uid,
                 email: email,
                  displayName: displayName,
                  photoURL:photoURL})
            )
          
          })
          .catch((error) => {
            setmessage(error.message)
          });
           
         })
         .catch((error) => {
           const errorCode = error.code;
           const errorMessage = error.message;
            setmessage(errorCode + " "+ errorMessage)
         });
         }
         else{
         // signin logic
         signInWithEmailAndPassword(auth, email.current.value, password.current.value)
          .then((userCredential) => {
    
    const user = userCredential.user;
    
   
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setmessage(errorMessage + " " + errorMessage);
  });

         }
    }

    const handlesingin =() =>{
        setsignup(!issignup);
    }
  return (
    <>
    <Header/>
    <div className='absolute'>
        <img src={LOGO} alt="" />
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