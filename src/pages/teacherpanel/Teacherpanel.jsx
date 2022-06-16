import React, { useEffect } from 'react'
import { NavLink ,Outlet } from 'react-router-dom';
import {BsPerson} from 'react-icons/bs'
import {BiBasketball , BiTask , BiCommentDetail , BiCommentCheck} from 'react-icons/bi'
import {GoTasklist} from 'react-icons/go'
import {ImExit} from 'react-icons/im'
import {FaMoneyBillAlt} from 'react-icons/fa'
import instructor from './../../Assets/images/Home/instructor-2.jpeg'
import './Teacherpanel.css'
import { useState } from 'react';
import { getTeacher } from '../../api/userApi';
import Loading from '../../loading/Loading';
export default function Teacherpanel() {
  const exithandler=()=>{
    localStorage.removeItem('educationsite')
    localStorage.removeItem('userdetail')
  }
  const [loading,setloading]=useState(false)


  const user=JSON.parse(localStorage.getItem('educationsite'))


  const [teacher,setteacher]=useState(null)
  useEffect(()=>{
    setloading(true)
     getTeacher(user?.id).then(item=>{
      if(item.data.status==='200'){
        setteacher(item.data)
        setloading(false)
      }
    })
  },[])
  if (loading) return <Loading />

  return (
    <>
    <section className='teacherpanel'>
        <section className='teacherpanel__container'>
        </section>
        <section className='teacherpanel__cart'>
            <div className="teacherpanel__cart__inner">
            <div className="teacherpanel__cart__inner__user__avatar">
                  <img src={teacher?.pic ? teacher?.pic : instructor} alt="" />
                </div>
                <div className="teacherpanel__cart__inner__user">
                    <p>سلام</p>
                    <p>{user?.name}</p>
                    <p>عزیز!</p>
                </div>
                <div className="teacherpanel__cart__inner__item">
                    <NavLink to='detail'>
                        <BsPerson />
                        <p> حساب کاربری</p>
                    </NavLink>
                    <NavLink to='financial/detail'>
                        <FaMoneyBillAlt />
                        <p> امور مالی </p>
                    </NavLink>
                    <NavLink to='/'>
                        <BiBasketball />
                        <p>تیکت های پشنتیبانی</p>
                    </NavLink>
                    <NavLink to='teacherpost'>
                        <BiTask />
                        <p>ایجاد دوره</p>
                    </NavLink>
                    <NavLink to='teachercourse'>
                        <GoTasklist />
                        <p>  دوره ها</p>
                    </NavLink>
                    <NavLink to='teachercomment'>
                        <BiCommentDetail />
                        <p>نظرات دوره</p>
                    </NavLink>
                    <NavLink to='teachervideocomment'>
                        <BiCommentCheck />
                        <p>نظرات دوره های خریداری شده</p>
                    </NavLink>
                    <NavLink to='/'
                     className={(Link)=>Link.isActive ?'.active' :''}
                     onClick={exithandler}
                     >
                        <ImExit />
                        <p>خروج</p>
                    </NavLink>
            </div>
            </div>
            <div className="outlet">
                <Outlet />
            </div>
        </section>
    </section>
    </>
  )
}
