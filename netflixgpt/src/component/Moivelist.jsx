import React from 'react'
import Moivecard from './Moivecard.jsx'
function Moivelist({title,moives}) {
  console.log("moivesdata is",moives);
  return (
    <div className='px-6'>
       <h1 className='text-3xl text-white py-2'>{title}</h1>
      <div className='flex overflow-x-scroll hide-scrollbar '>
       
        <div className='flex'>
          {moives?.map(moive =>
             ( <Moivecard key={moive.id} posterpath={moive.poster_path}/>
             ) )}
         
        </div>
      </div>
  
    </div>
  )
}

export default Moivelist