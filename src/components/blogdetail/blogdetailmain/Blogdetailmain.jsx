import React from 'react'
import './Blogdetailmain.css'
import Blogdetailmainleft from './Blogdetailmainleft'
import Blogdetailmainright from './Blogdetailmainright'
export default function Blogdetailmain() {
  return (
    <section className='blogdm'>
        <section className='blogdm__container'>
            <Blogdetailmainright />
            <Blogdetailmainleft />
        </section>
    </section>
  )
}
