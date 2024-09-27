import React from 'react'
import Login from './Login'
import Browser from './Browser'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'; 
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