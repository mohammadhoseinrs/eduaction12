import React from 'react'
import './error404.css'
import error from './../../Assets/images/404.png'
import Mainbtn from '../../components/Mainbtn'
import { Link } from 'react-router-dom'
import {BsArrowLeft} from 'react-icons/bs'

export default function Error404() {
  return (
    <div className='error404'>
        <div className="error404__image">
            <img src={error} alt="" />
        </div>
        <div className="error404__content">
            <h3>چنین صفحه‌ای پیدا نشد</h3>
            <p>با عرض پوزش از شما، چنین صفحه‌ای در سایت وجود ندارد یا این صفحه از سایت پاک شده است.</p>
        </div>
        <div className="error404__content__footer">
            <button className='error404__content__footer__btn'>
                <Link to='/'>
                بازگشت به سایت
                <BsArrowLeft />
                </Link>
            </button>
        </div>
    </div>
  )
}
