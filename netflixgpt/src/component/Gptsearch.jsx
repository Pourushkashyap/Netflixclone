import React from 'react'
import Gptmoivesuggextion from './Gptmoivesuggextion'
import { LOGO } from '../util/constant'
import Gptsearchbar from './Gptsearchbar'
function Gptsearch() {
  return (
    <div>
     <div className='absolute -z-10'>
        <img src={LOGO} alt="" />
    </div>
        <Gptsearchbar/>
        <Gptmoivesuggextion/>
    </div>
  )
}

export default Gptsearch