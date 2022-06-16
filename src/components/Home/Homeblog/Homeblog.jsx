import React, { useEffect, useState } from 'react'
import Mainbtn from '../../Mainbtn'
import './Homeblog.css'
import post1 from './../../../Assets/images/Home/post-01.jpeg'
import {AiOutlineTags} from 'react-icons/ai'
import {BiTimeFive} from 'react-icons/bi'
import {BsArrowLeft} from 'react-icons/bs'
import { Link } from 'react-router-dom'
import shape25 from './../../../Assets/images/blog/shape-25.png'
import FramerMotion from '../../../FramerMotion'
import Framer2 from './../../../Framer2'
import { getdetail } from '../../../api/userApi'
export default function Homeblog() {
    const [homeblog,sethomeblog]=useState([])
    useEffect( ()=>{
        getdetail('articles')
        .then(item=>{
            sethomeblog(item.data)
        })
    },[])
  return (
    <section className='homeblog'>
        <section className='homeblog__container'>
        <FramerMotion>
            <div className="homeblog__top">
                <div className="homeblog__top__right">
                    <h5>وبلاگ</h5>
                    <h2>بهترین مقالات تخصصی</h2>
                </div>
                <Link to='/blog'>
                    <Mainbtn text='همه مقالات' />
                </Link>
            </div>
         </FramerMotion>
            <FramerMotion>
                <FramerMotion>   
            <section className='homeblog__inner'>
            {homeblog.map(blog=>(
                 <div key={blog.id} className="homeblog__inner__item">
                 <FramerMotion>
                 <div className="homeblog__inner__item__top">
                     <img src={post1} alt="" />
                 </div>
                 <div className="homeblog__inner__item__top__inner">
                     <div className="homeblog__inner__item__top__inner__circle">
                         <span>۶</span>
                         <p>خرداد</p>
                     </div>
                     <div className="homeblog__inner__item__top__inner__middle">
                         <div className="homeblog__inner__item__top__inner__middle__item">
                             <AiOutlineTags />
                             <p>{blog.keyWords}</p>
                         </div>
                         <div className="homeblog__inner__item__top__inner__middle__item">
                             <BiTimeFive />
                             <p>{blog.time_to_study}</p>
                         </div>
                     </div>
                     <div className="homeblog__inner__item__top__inner__bottom">
                         {blog.articles_topic}
                     </div>
                     <div className="homeblog__inner__item__top__inner__bottom__bottom">
                     <button className="homeblog__inner__item__top__inner__bottom__btn">
                         <Link to={`/blog/${blog.articles_topic}`}>
                             بیشتر بخوانید
                         </Link>
                         <BsArrowLeft />
                     </button>
                     </div>
                 </div>
                 </FramerMotion>
             </div>
            ))}    
                <div className="homeblogicon">
                    <img src={shape25} alt="" />
                </div>
            </section>
            </FramerMotion>
            </FramerMotion>
        </section>
    </section>
  )
}
