import React from 'react'
import './Homeupcoming.css'
import Upcomingcart from './Upcomingcart'
import shape2 from './../../../Assets/images/Home/shape2.png'
import FramerMotion from '../../../FramerMotion'
export default function Homeupcoming() {
  return (
    <section className='homeupcoming'>
        <section className='homeupcoming__container'>
            <FramerMotion>
            <section className="homeupcoming__top">
                <h5 className='homeupcoming__top__subtitle'>
                    کتگوری دروس
                </h5>
                <h1 className='homeupcoming__top__title'>
                لورم ایپسوم متن ساختگی
                </h1>
            </section>
            </FramerMotion>
            <section className='homeupcoming__bottom'>
                <Upcomingcart />
                <Upcomingcart />
                <Upcomingcart />
            </section>
            <div className="homeupcoming__icon">
                <div className="homeupcoming__icon1">
                    <img src={shape2} alt="" />
                </div>
            </div>
        </section>
    </section>
  )
}
