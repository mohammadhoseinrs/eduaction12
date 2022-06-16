import React from 'react'
import './CourseCart.css'
import {AiFillHeart ,AiFillStar} from 'react-icons/ai'
import {MdOutlineArticle} from 'react-icons/md'
import {BiTimeFive} from 'react-icons/bi'
import {BsPeople} from 'react-icons/bs'
import course2 from './../../../Assets/images/coursedetail/course-30.jpeg'
import { Link, useParams } from 'react-router-dom'
export default function CourseCart({course}) {
    console.log(course);
    const {
    courses_points,
    number_student,
    time_courses,
    discount,
    courses_price,
    courses_topic,
    number_of_lesson,
    teacher,
    courses_name,
    group_id,
    id,
    courses_pic
    }=course
    const params=useParams()
    console.log(params);
  return (
    <Link to={`/allcourse/${params.courseid}/${courses_name}`} className='coursecart'>
        <div className="coursecart__right">
            <img src={courses_pic} alt="" />
            <div className="coursecart__right__icon1">
                <AiFillHeart />
            </div>
            <div className="coursecart__right__icon2">
                {courses_topic}
            </div>
        </div>
        <div className="coursecart__left">
            <div className="coursecart__left__top">
                 {teacher}
            </div>
            <ul className="coursecart__left__item">
                <li className='coursecart__left__item1'>
                    <div className="coursecart__left__item1__svg">
                    <MdOutlineArticle />
                    </div>
                <p>{number_of_lesson} درس</p>
                </li>
                <li className='coursecart__left__item1'>
                <div className="coursecart__left__item1__svg coursecart__left__item2__svg">
                     <BiTimeFive />
                </div>
                    <p>{time_courses} ساعت</p>
                </li>
                <li className='coursecart__left__item1'>
                <div className="coursecart__left__item1__svg coursecart__left__item3__svg">
                <BsPeople />
                 </div> 
                    <p>{number_student}</p>
                </li>
            </ul>

            <h6 className="coursecart__title">
                {courses_name}
            </h6>

            <div className="coursecart__bottom">
                <div className="coursecart__bottom__right">
                    <div className="coursecart__bottom__right__right">
                        {discount}
                    </div>
                    <p>تومان</p>
                    <div className="coursecart__bottom__right__left">
                        <p>{courses_price}</p>
                        <p>تومان</p>
                    </div>
                </div>
                <div className="coursecart__bottom__left">
                    <div className="coursecart__bottom__left__rating">
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                    </div>
                    <div className="coursecart__bottom__left__number">
                        ({courses_points})
                    </div>
                </div>
            </div>
        </div>
    </Link>
  )
}
