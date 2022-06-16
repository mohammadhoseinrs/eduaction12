import React from 'react'
import './Homebanner2.css'
import banner2 from './../../../Assets/images/Home/banner2.jpg'
import {BsArrowLeft} from 'react-icons/bs'
import Framer2 from './../../../Framer2'
import FramerMotion from '../../../FramerMotion'
export default function Homebanner2() {
  return (
    <section className='homebanner2' style={{backgroundImage:`url(${banner2})`}}>
      <FramerMotion>
        <div className="homebanner2__inner">
            <div className="homebanner2__right">
                <div className="homebanner2__right__sub">
                لورم ایپسوم متن
                </div>
                <div className="homebanner2__right__title">
                لورم ایپسوم متن ساختگی با تولید سادگی
                </div>
            </div>
            <div className="homebanner2__left">
            <button>
                <p>لورم ایپسوم متن</p>
                <BsArrowLeft  />
            </button>
            </div>
         </div>  
         </FramerMotion>  
    </section>
  )
}
