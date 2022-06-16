import React, { useEffect } from 'react'
import './UserPanel.css'
import { NavLink ,Outlet } from 'react-router-dom';
import {AiOutlineHome ,AiOutlineHeart} from 'react-icons/ai'
import {BsBag ,BsPerson} from 'react-icons/bs'
import {FaGraduationCap} from 'react-icons/fa'
import {BiBasketball} from 'react-icons/bi'
import {ImExit} from 'react-icons/im'
import AnimatedPage from '../../animated';
import { useSelector } from 'react-redux';
export default function UserPanel() {

    const exithandler=()=>{
        localStorage.removeItem('educationsite')
        localStorage.removeItem('userdetail')
    }
    const {user}=useSelector(state=>state.login)
    console.log(user);
  return (
      <AnimatedPage>
    <section className='userpanel'>
        <section className='userpanel__container'>
        </section>
        <section className='userpanel__cart'>
            <div className="userpanel__cart__inner">
                <div className="userpanel__cart__inner__user">
                    <p>سلام</p>
                    <p>{user?.name}</p>
                    <p>عزیز!</p>
                </div>
                <div className="userpanel__cart__inner__item">
                    <NavLink to='main'>
                        <AiOutlineHome />
                        <p>پیشخوان</p>
                    </NavLink>
                    <NavLink to='customer'>
                        <BsBag />
                        <p>سفارش ها</p>
                    </NavLink>
                    <NavLink to='purchase'>
                        <FaGraduationCap />
                        <p>دوره های خریداری شده</p>
                    </NavLink>
                    <NavLink to='favourite'>
                        <AiOutlineHeart />
                        <p>علاقه مندی ها</p>
                    </NavLink>
                    <NavLink to='user'>
                        <BsPerson />
                        <p>جزییات حساب کاربری</p>
                    </NavLink>
                    <NavLink to='/'>
                        <BiBasketball />
                        <p>تیکت های پشنتیبانی</p>
                    </NavLink>
                    <NavLink to='/' className={(Link)=>Link.isActive ?'.active' :''} onClick={exithandler}>
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
    </AnimatedPage>
  )
}
