import React, { useEffect, useState } from 'react'
import './Hometeacher.css'
import instructor2 from './../../../Assets/images/Home/instructor-2.jpeg'
import course1 from './../../../Assets/images/Home/course-01.jpeg'

import error from './../../../Assets/images/bg404.jpg'
import FramerMotion from '../../../FramerMotion'
import {BsArrowLeft} from 'react-icons/bs'
import { getdetail } from '../../../api/userApi'
import { Link } from 'react-router-dom'
export default function Hometeacher() {
    const [hometeacher,sethometeacher]=useState([])
    useEffect(()=>{
        getdetail('BestTeachers')
        .then(item=>{
            sethometeacher(item.data)
        })
    },[])
  return (
    <section className='hometeacher'>
        <section className="hometeacher__container">
            <FramerMotion>
            <section className='hometeacher__top'>
                <div className="hometeacher__top__subtitle">
                     مدرس های ما
                </div>
                <div className="hometeacher__top__title">
                    بهترین مدرس های ما
                </div>
            </section>
            </FramerMotion>
            <section className="hometeacher__inner">
                {hometeacher.map(teacher=>(
                    <div className="hometeacher__inner__1">
                    <FramerMotion>
               <div className="hometeacher__inner__item">
                   <div className="hometeacher__inner__item__inner">
                       <div className="hometeacher__inner__item__inner__inner">
                            <img src={course1} alt="" />
                       </div>
                   </div>
               </div>
               <div className="hometeacher__inner__item__teacher">
                       <div className="hometeacher__inner__item__teacher__name">
                               {teacher.teacher_name} {teacher.teacher_family}
                       </div>   
               </div>
                    </FramerMotion>
                </div> 
               ))}
            </section>
            <div className="hometeacher__btn">
                <Link to='/instructor'>
                    <p>مشاهده همه</p>
                    <BsArrowLeft />
                </Link>
            </div>
        </section>
    </section>
  )
}
