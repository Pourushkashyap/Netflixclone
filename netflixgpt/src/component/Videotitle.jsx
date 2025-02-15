import React from 'react'


function Videotitle({title,overview}) {
  return (
    <div className='pt-[15%] px-24 w-screen aspect-video  absolute text-white bg-gradient-to-r from-black'>
        <h1 className='text-5xl font-bold'>{title}</h1>
        <p className='py-6 text-lg w-1/4'>{overview}</p>
        <button className='bg-white text-black p-4 px-10 text-xl  rounded-lg hover:bg-opacity-80'>▶️ Play</button>
        <button className=' mx-2 bg-gray-500 text-white p-4 px-10 text-xl bg-opacity-50 rounded-lg'> ℹ️ More Info</button>
    </div>
  )
}

export default Videotitle 