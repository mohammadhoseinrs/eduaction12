import React from 'react'
import './Mainbtn.css'
import {BsArrowLeft} from 'react-icons/bs'
export default function Mainbtn({text}) {
  return (
    <button className='mainbtn'>
        <p className='mainbtn__text'>{text}</p>
        <BsArrowLeft />
    </button>
  )
}
