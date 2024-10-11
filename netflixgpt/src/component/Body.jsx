import React, { useEffect } from 'react'
import Login from './Login'
import Browser from './Browser'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { onAuthStateChanged } from "firebase/auth";
import { auth } from '../util/firebase';
import { useDispatch } from 'react-redux';
import { addUser, removeuser } from '../util/userSlice';

function Body() {
 


    const router = createBrowserRouter(
     [  
         {
            path:"/",
            element:<Login/>
        },
      {
        path:"/browser",
        element:<Browser/>
      },
    ]
    )

 

  return (
    <>
   <RouterProvider router={router} />
    </>
  )
}

export default Body