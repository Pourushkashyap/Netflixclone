import React from 'react'
import { useSelector } from 'react-redux'
import Videobackground from './videobackground'
import Videotitle from './videotitle'

function MainContainer() {
    const moives = useSelector(store => store.moives?.nowplayingmoives)
    if(!moives){
        return;
    }
     const mainmoives = moives[0];
     
     const {original_title,overview,id} = mainmoives    
    return (
    <div>
        <Videotitle title={original_title} overview={overview}/>
         <Videobackground moiveid={id}/>
    </div>
  )
}

export default MainContainer