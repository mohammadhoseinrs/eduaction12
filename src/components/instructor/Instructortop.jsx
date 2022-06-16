import React from 'react'
import { Link } from 'react-router-dom'
import {MdKeyboardArrowLeft} from 'react-icons/md'
import sign1 from './../../Assets/images/signup/sign1.png'
import sign2 from './../../Assets/images/signup/sign2.png'
import sign3 from './../../Assets/images/signup/sign3.png'
import sign4 from './../../Assets/images/signup/sign4.png'
export default function Instructortop() {
  return (
    <section className='coursedetailtop'>
    <section className='coursedetailtop__container'>
        <div className="coursedetailtop__top">
            مدرس ها
        </div>
        <div className="coursedetailtop__bottom">
            <Link to='/'>خانه</Link>
            <MdKeyboardArrowLeft size={25} />
            <p>
            مدرس ها
            </p>
        </div>
    </section>
    <div className="coursedetailtop__icon">
        <div className="coursedetailtop__icon1">
            <img src={sign1} alt="" />
        </div>
        <div className="coursedetailtop__icon2">
            <img src={sign2} alt="" />
        </div>
        <div className="coursedetailtop__icon3">
            <img src={sign3} alt="" />
        </div>
        <div className="coursedetailtop__icon4">
            <img src={sign4} alt="" />
        </div>
    </div>
</section>
  )
}
