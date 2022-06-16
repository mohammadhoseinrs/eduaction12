import React from 'react'
import './SignupTop.css'
import { Link } from 'react-router-dom'
import {MdKeyboardArrowLeft} from 'react-icons/md'
import sign1 from './../../../Assets/images/signup/sign1.png'
import sign2 from './../../../Assets/images/signup/sign2.png'
import sign3 from './../../../Assets/images/signup/sign3.png'
import sign4 from './../../../Assets/images/signup/sign4.png'

export default function SignupTop() {
  return (
    <section className='signuptop'>
        <section className='signuptop__container'>
            <div className="sigunp__top">
                ورود و ثبت نام
            </div>
            <div className="sigunp__bottom">
                <Link to='/'>خانه</Link>
                <MdKeyboardArrowLeft size={25} />
                <p>
                ورود و ثبت نام
                </p>
            </div>
        </section>
        <div className="signup__icon">
            <div className="signup__icon1">
                <img src={sign1} alt="" />
            </div>
            <div className="signup__icon2">
                <img src={sign2} alt="" />
            </div>
            <div className="signup__icon3">
                <img src={sign3} alt="" />
            </div>
            <div className="signup__icon4">
                <img src={sign4} alt="" />
            </div>
        </div>
    </section>
  )
}
