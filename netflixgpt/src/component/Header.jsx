import React from 'react'
import { useEffect } from 'react';
import { signOut,onAuthStateChanged } from "firebase/auth";
import { auth } from '../util/firebase';
import { useNavigate } from 'react-router-dom';
import { useSelector,useDispatch } from 'react-redux';
import { addUser,removeuser } from '../util/userSlice';
import {toggleGptSearchView} from '../util/gptSlice'
function Header() {
  const dispatch = useDispatch();
  
  const navigate = useNavigate();
  const user = useSelector(store => store.user);

  const handlesignout =() =>{
    signOut(auth).then(() => {
      navigate("/")
    }).catch((error) => {
      navigate('/error')
    });
  }

  
  useEffect(() =>{
   const unsubscribe =  onAuthStateChanged(auth, (user) => {
      if (user) { 
        const {uid,email,displayName, photoURL} = user;
       dispatch(
        addUser({
        uid:uid,
         email: email,
          displayName: displayName,
          photoURL:photoURL})
        );
        navigate('/browser')
      } else {
        dispatch(removeuser());
        navigate('/');
      }
    });
    return () => unsubscribe();
   },[])  

   const handlegptsearch = () =>{
       dispatch (toggleGptSearchView())
   }




  return (
    <div className='w-screen absolute px-8 py-2 bg-gradient-to-t from-black z-30 flex justify-between '>

        <img className='w-44' src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" alt="Logo" />
        {user &&
         (<div className=' flex justify-center items-center p-2'>
         
          <button className='py-2 px-4 mx-4 my-2 border-2 bg-purple-800 rounded-lg text-white'
           onClick={handlegptsearch}>GPT Search</button>

          <img className='w-12 h-12' src={user?.photoURL} alt="user icon"  />
          <button onClick={handlesignout} className='font-bold text-white'>(Sign out)</button>
        </div>)}
    </div>
  )
}

export default Header