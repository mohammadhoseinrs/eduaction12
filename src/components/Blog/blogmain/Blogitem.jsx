import React from 'react'
import './Blogitem.css'
import {AiOutlineTags} from 'react-icons/ai'
import {BsCalendar2Minus ,BsArrowLeft} from 'react-icons/bs'
import post1 from './../../../Assets/images/Home/post-01.jpeg'
import { Link } from 'react-router-dom'
export default function Blogitem({blog}) {
  return (
    <div className='blogitem'>
        <div className="blogitem__top">
            <img src={post1} alt="" />
        </div>
        <div className="blogitem__bottom">
            <div className="blogitem__bottom__top">
                <AiOutlineTags />
                <p>{blog.keyWords}</p>
            </div>
            <div className="blogitem__bottom__title">
                {blog.topic}
            </div>
            <div className="blogitem__bottom__bottom">
                <div className="blogitem__bottom__bottom__right">
                    <BsCalendar2Minus />
                    <p>{blog.date}</p>
                </div>
                <Link to='' className="blogitem__bottom__bottom__left">
                    <p>بیشتر بخوانید</p>
                    <BsArrowLeft />
                </Link>
            </div>
        </div>
    </div>
  )
}
