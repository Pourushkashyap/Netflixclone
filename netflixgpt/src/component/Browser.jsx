import React, { useEffect } from 'react'
import Header from './Header'
import useNowPlayingMoives from '../hooks/useNowPlayingMoives'
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import usepopularmoive from '../hooks/usepopularmoive';
import usetopratedmoive from '../hooks/usetopratedmoive';
import useupcomingmoive from '../hooks/useupcomingmoive';
import Gptsearch from './Gptsearch';
import { useSelector } from 'react-redux';
function Browser() {
     const showgptsearch = useSelector(store => store.gpt.showGptsearch)
  useNowPlayingMoives();
  usepopularmoive();
  usetopratedmoive();
  useupcomingmoive();
  return (
    <>
    <Header/>
    {
      showgptsearch ? <Gptsearch/> :
      <>
            <MainContainer/>
            <SecondaryContainer/>
      </>
    }
   
    
    </>
  )
}

export default Browser 