import React, { useEffect } from 'react'
import Header from './Header'
import useNowPlayingMoives from '../hooks/useNowPlayingMoives'
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
function Browser() {
 
  useNowPlayingMoives();
  return (
    <>
    <Header/>
    <MainContainer/>
    <SecondaryContainer/>
    </>
  )
}

export default Browser 