import React from 'react'
import Moivelist from './Moivelist'
import { useSelector } from 'react-redux'
function SecondaryContainer() {
  const moives = useSelector(store => store.moives);
  return moives.nowplayingmoives && (
    <div className=' bg-black'>
      <div className='-mt-52 pl-12  relative z-20'>
      <Moivelist title={"Now Playing"} moives={moives.nowplayingmoives}/>
      <Moivelist title={"Trending"} moives={moives.nowtopratedmoive}/>
      <Moivelist title={"Populer"} moives={moives.nowpopularmoive}/>
      <Moivelist title={"Horror"} moives={moives.nowupcomingmoive}/>
      </div>
    </div>
  )
}

export default SecondaryContainer