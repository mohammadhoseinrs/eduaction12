import React from 'react'
import event1 from './../../../Assets/images/Home/event-01.jpeg'
import {BsCalendarDate ,BsArrowLeft} from 'react-icons/bs'
import {BiTimeFive} from 'react-icons/bi'
import FramerMotion from '../../../FramerMotion'
export default function Upcomingcart() {
  return (
    <FramerMotion>
    <div className='upcomingcart'>
        <div className="upcomingcart__inner">
            <div className="upcomingcart__inner__right">
                <img src={event1} alt="" />
            </div>
            <div className="upcomingcart__inner__left">
                <div className="upcomingcart__inner__left__right">
                    <h5>
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ
                    </h5>
                    <ul className='upcomingcart__inner__left__right__event'>
                        <li>
                            <BsCalendarDate />
                            <p>۱۲ مرداد ۱۳۹۸</p>
                        </li>
                        <li>
                            <BiTimeFive />
                            <p>۸:۰۰</p>
                        </li>
                    </ul>
                </div>
                <div className="upcomingcart__inner__left__left">
                    <p>لورم ایپسوم متن</p>
                    <BsArrowLeft />
                </div>
            </div>
        </div>
    </div>
    </FramerMotion>
  )
}
