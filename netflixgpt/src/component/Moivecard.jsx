import React from 'react'
import {IMG_CDN_URL} from '../util/constant'
function Moivecard({posterpath}) {
  return (
    <div className='w-48 pr-4'>
      <img src={IMG_CDN_URL+posterpath} alt="Moive Card" />
    </div>
  )
}

export default Moivecard