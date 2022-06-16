import React, { useEffect, useState } from 'react'
import './CourseDetailMain.css'
import course2 from './../../../Assets/images/coursedetail/course-02.jpeg'
import course3 from './../../../Assets/images/coursedetail/course-03.jpeg'
import instructor1 from './../../../Assets/images/Home/instructor-1.jpeg'
import instructor2 from './../../../Assets/images/Home/instructor-2.jpeg'
import {AiFillStar} from 'react-icons/ai'
import CourseDetailAcc from './CourseDetailAcc'
import {BiTimeFive} from 'react-icons/bi'
import {BsFillPersonFill ,BsBarChartFill ,BsFillCalendarCheckFill} from 'react-icons/bs'
import {FaBookReader , FaLanguage ,FaCertificate} from 'react-icons/fa'
import {GiTeacher} from 'react-icons/gi'
import {AiFillInstagram ,AiFillLinkedin} from 'react-icons/ai'
import {IoLogoWhatsapp} from 'react-icons/io'
import {BsTelegram} from 'react-icons/bs'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { getdetail } from '../../../api/userApi'
import {GiGraduateCap} from 'react-icons/gi'
import DOMPurify from 'dompurify';
import Rating from '../../rating/Rating'


export default function CourseDetailMain({coursedetail , buycourse}) {
    console.log(coursedetail);
    const {user}=useSelector(state=>state.login)
    const createMarkup = (html) => {
        return  {
          __html: DOMPurify.sanitize(html)
        }
      }
  return (
    <section className="cdm">
        <section className='cdm__container'>
            <div className="cdm__image">
                <img src={coursedetail?.CourseInfo?.courses_pic ? coursedetail?.CourseInfo?.courses_pic :course2} alt="" />
            </div>
            <section className="cdm__inner">
                <section className='cdm__inner__right'>
                    <div className="cdm__inner__right__inner">

                        <div className="cdm__inner__right__inner__top">
                            <div className="cdm__inner__right__inner__top__right">
                                <div className="cdm__inner__right__inner__top__right__image">
                                    <img src={coursedetail?.teacher?.teacher_pic ? coursedetail?.teacher?.teacher_pic :instructor1} alt="" />
                                </div>
                                <p>توسط  {coursedetail?.teacher?.teacher}</p>
                            </div>
                            <div className="cdm__inner__right__inner__top__left">
                                <div className="cdm__inner__right__inner__top__left__rating">
                                    <Rating rating={coursedetail?.CourseInfo?.courses_points} />
                                </div>
                                <div className="cdm__inner__right__inner__top__left__suggets">
                                    (۴۷ نظر)
                                </div>
                            </div>
                        </div>


                        <div className="cdm__inner__right__inner__title">
آموزش Reactjs راکت به شما کمک می‌کند به شکل جامع React را یاد بگیرید
                        </div>

                        <div className="cdm__card"
                        dangerouslySetInnerHTML={createMarkup(coursedetail?.CourseInfo?.courses_description)}

                        >
                        </div>

                        <div className="cdm__videocard">
                            <div className="cdm__videocard__inner">
                                <CourseDetailAcc accdata={coursedetail.scroll_detail}
                                buycourse={buycourse}  />
                            </div>
                        </div>


                        <div className="cdm__teacher">
                            <div className="cdm__teacher__pic">
                                <img src={coursedetail?.teacher?.teacher_pic} alt="" />
                            </div>
                            <div className="cdm__teacher__detail">
                                <h5>{coursedetail?.teacher?.teacher}</h5>
                                <h6>{coursedetail?.teacher?.teacher_specialty}</h6>
                                <p>
                                {coursedetail?.teacher?.teacher_description} 
                                </p>
                                <ul className='cdm__teacher__social'>
                                    <a href={`teacher_telegram`}>
                                        <BsTelegram />
                                    </a>
                                    <a href={`teacher_whatsapp`}>
                                        <IoLogoWhatsapp />
                                    </a>
                                    <a href={`teacher_instagram`}>
                                        <AiFillInstagram />
                                    </a>
                                    <a href={`teacher_linkedin`}>
                                        <AiFillLinkedin />
                                    </a>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>
                <section className='cdm__inner__left'>
                    <div className="cdm__inner__left__inner">
                        <div className="cdm__inner__left__inner__box">
                            <div className="cdm__inner__left__inner__box__video">
                                <img src={coursedetail?.CourseInfo?.pic_backround ? coursedetail?.CourseInfo?.pic_backround : course3} alt="" />
                                <button  className='cdm__inner__left__inner__box__video__btn'>
                                    <div className="cdm__inner__left__inner__box__video__btn__icon">

                                    </div>
                                </button>
                            </div>
                            <div className="cdm__inner__left__inner__box__inner">
                                <ul>
                                    <li >
                                        <span>
                                        <BiTimeFive />
                                        زمان دوره
                                        </span>
                                        <span>
                                        {coursedetail?.CourseInfo?.time_courses}
                                        <p>ساعت</p>
                                        </span>
                                    </li>

                                    <li >
                                        <span>
                                        <BsFillPersonFill />
                                        تعداد دانشجو                                        </span>
                                        <span>
                                        {coursedetail?.CourseInfo?.number_student}
                                        </span>
                                    </li>

                                    <li >
                                        <span>
                                        <FaBookReader />
                                        تعداد دروس                                        </span>
                                        <span>
                                        {coursedetail?.CourseInfo?.number_of_lesson}
                                        </span>
                                    </li>


                                    <li >
                                        <span>
                                        <BsBarChartFill />
                                        سطح
                                        </span>
                                        <span>
                                        {coursedetail?.CourseInfo?.level}
                                        </span>
                                    </li>

                                    <li >
                                        <span>
                                        <FaLanguage />
                                        زبان                                        </span>
                                        <span>
                                        {coursedetail?.CourseInfo?.lang}
                                        </span>
                                    </li>

                                    <li >
                                        <span>
                                        <FaCertificate />
                                        مدرک                                        </span>
                                        <span>
                                        {coursedetail?.CourseInfo?.evidence}
                                        </span>
                                    </li>
                                </ul>
                                {buycourse ?(
                                    <>
                                    <div className="cdm__inner__left__inner__box__inner__btn3">
                                        <GiGraduateCap  />
                                    دانشجوی دوره هستید
                                    </div>

                                    </>
                                ):(
                                    <>
                                    
                                    <div className='cdm__inner__left__inner__box__inner__btn'>
                                        <p>قیمت  :</p>
                                        <span>
                                        {coursedetail?.CourseInfo?.courses_price}
                                        </span>
                                        <p>هزار تومان</p>
                                </div>
                                <button className="cdm__inner__left__inner__box__inner__btn2"
                                disabled={!user.name}
                                >
                                    {user.name ? (
                                        <>
                                        <p>خرید</p>
                                        </>
                                    ):(
                                        <>
                                        <p>برای خرید وارد حساب خود شوید</p>
                                        </>
                                    )}
                                </button>
                                    
                                    </>

                                )}
                                
                            </div>
                        </div>
                    </div>
                </section>
            </section>
        </section>
    </section>
  )
}
