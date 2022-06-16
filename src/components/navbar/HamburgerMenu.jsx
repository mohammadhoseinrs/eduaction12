import React from 'react'
import { useState } from 'react';
import {GrFormClose} from 'react-icons/gr'
import { motion ,AnimatePresence  } from "framer-motion"
import { Link } from 'react-router-dom'
import {MdKeyboardArrowDown ,MdKeyboardArrowUp , MdOutlineArticle ,MdPermDeviceInformation} from 'react-icons/md'
import logo from './../../Assets/images/navbar/logo1.png'
import {AiOutlineHome , AiOutlineUser ,AiOutlinePhone} from 'react-icons/ai'
import {SiAirplayvideo} from 'react-icons/si'
import {GrSchedulePlay} from 'react-icons/gr'
import { useSelector } from 'react-redux';

export default function HamburgerMenu({setOpenMenu}) {
  const [openServices,setOpenServices]=useState(false)
  const {isAuth}=useSelector(state=>state.login)
  return (
      <AnimatePresence>
    <div
    className='hamburgermenu' onClick={()=>setOpenMenu(false)}>
        <motion.div
        initial={{opacity:0,x:1000}}
        animate={{opacity:1,x:0}}
        transition={{duration:0.9,ease:'easeIn'}}
        exit={{opacity:0 , x:1000}}
        className="hamburgermenu__item" onClick={(event)=>event.stopPropagation()}>
            <div className="close__btn" >
                <GrFormClose onClick={()=>setOpenMenu(false)} /> 
            </div>
          <div className="hamburgermenu__icon">
            <div className="hamburgermenu__icon__image">
              <img src={logo} alt="" />
            </div>
            <p>
            لورم ایپسوم متن
            </p>
          </div>
        <ul className='hamburgermenu__item__items'>
        <Link to='/' onClick={()=>setOpenMenu(false)}>
          <AiOutlineHome />
          <span>خانه</span>
        </Link>        
        <p className='hamburger-menu-service' onClick={()=>setOpenServices(!openServices)}>
          <SiAirplayvideo />
          <span>
            دوره ها
          </span>
          {openServices ?
          <MdKeyboardArrowUp size={25} className='hamburger-menu-service-svg' /> 
           :
          <MdKeyboardArrowDown size={25} className='hamburger-menu-service-svg' /> }
          </p>
          {
            openServices && (
              <div className="hamburger-digital-marketing">
                  <Link to='/allcourse'>
                    <GrSchedulePlay />
                    <span>
                    دوره ها
                    </span>
                    </Link>
                <Link to='/blogdetail'>صفحات وبلاگ</Link>
                <Link to='/'>گیم سازی</Link>
                <Link to='/instructordetail'>گرافیک و موشن گرافی</Link>
              </div>
            )
          }
        <Link to='/blog' onClick={()=>setOpenMenu(false)}>
          <MdOutlineArticle />
          <span>وبلاگ</span>
          </Link>
          {isAuth && 
             <Link to='/userpanel/main' onClick={()=>setOpenMenu(false)}>
               <AiOutlineUser />
               <div>
               پنل کاربری
               </div>
              </Link>
          }
        <Link to='/aboutus' onClick={()=>setOpenMenu(false)}>
          <MdPermDeviceInformation />
          <span>
          درباره ما
          </span>
          </Link>
        <Link to='/contact' onClick={()=>setOpenMenu(false)}>
          <AiOutlinePhone />
          <span>
          تماس با ما
          </span>
          </Link>
      </ul>
        </motion.div>
    </div>
    </AnimatePresence>
  )
}
