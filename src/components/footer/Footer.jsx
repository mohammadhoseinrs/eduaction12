import React, { useEffect, useState } from 'react'
import './Footer.css'
import logowhite from './../../Assets/images/footer/logo-white.png'
import {AiFillInstagram ,AiFillLinkedin} from 'react-icons/ai'
import {IoLogoWhatsapp} from 'react-icons/io'
import {BsTelegram} from 'react-icons/bs'
import {MdOutlineDoubleArrow , MdLocationOn ,MdEmail} from 'react-icons/md'
import {FaPhone} from 'react-icons/fa'
import footer1 from './../../Assets/images/footer/footer1.png'
import footer2 from './../../Assets/images/footer/footer2.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { getdetail } from '../../api/userApi'
import { Link } from 'react-router-dom'

export default function Footer() {
    const [footer,setfooter]=useState([])
    useEffect( ()=>{
        getdetail('footer')
        .then(item=>{
            setfooter(item.data)
        })
    },[])
    
  return (
    <section className='footer'>
        <section className='footer__container'>
            <div className="footer__top">
                <div className="footer__top__inner">
                    
                    <div className="footer__top__inner__right1">
                        <div className="footer__top__inner__right1__logo">
                            <img src={footer[6]?.pic} alt="" />
                            <p>{footer[6]?.topic}</p>
                        </div>
                        <p className='footer__top__inner__right1__text'>
                        {footer[6]?.description}
                        </p>
                        <ul className="footer__top__inner__right1__social">
                            <a href={footer[6]?.whatsapp_url}>
                               <IoLogoWhatsapp className='footer__top__inner__right1__social__icon' /> 
                            </a>
                            <a href={footer[6]?.instagram_url}>
                                <AiFillInstagram className='footer__top__inner__right1__social__icon' />
                            </a>
                            <a href={footer[6]?.telegram_url}>
                                <BsTelegram className='footer__top__inner__right1__social__icon' />
                            </a>
                            <a href={footer[6]?.linkedin_url}>
                                <AiFillLinkedin className='footer__top__inner__right1__social__icon' />
                            </a>
                        </ul>
                    </div>


                    <div className="footer__top__inner__right2">
                        <div className="footer__top__inner__right2__inner">
                            <div className="footer__top__inner__right2__inner__title">
                                {footer[4]?.tittle}
                            </div>
                            <ul className="footer__top__inner__right2__inner__item">
                                {footer[5]?.map((item,index)=>(
                                    <li key={index}>
                                        <MdOutlineDoubleArrow className='footer__top__inner__right2__inner__item__svg' />
                                    <p>{item.name}</p>
                                </li> 
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className="footer__top__inner__right2">
                        <div className="footer__top__inner__right2__inner">
                            <div className="footer__top__inner__right2__inner__title">
                            {footer[2]?.tittle}
                            </div>
                            <ul className="footer__top__inner__right2__inner__item">
                                {footer[3]?.map((item,index)=>(
                                    <li key={index}>
                                    <MdOutlineDoubleArrow className='footer__top__inner__right2__inner__item__svg' />
                                    <p>{item.name}</p>
                                </li> 
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className="footer__top__inner__right3">
                        <h5>{footer[0]?.tittle}</h5>
                        <div className="footer__top__inner__right3__bottom">
                            <ul className='footer__top__inner__right3__bottom__info'>
                                {footer[1]?.map((item,index)=>(
                                    <li key={index}>
                                        <FontAwesomeIcon icon={`fa-solid ${item.icon}`} />
                                        <p> {item.name}  </p>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer__icon">
                <div className="footer__icon1">
                    <img src={footer1} alt="" />
                </div>
                <div className="footer__icon2">
                    <img src={footer2} alt="" />
                </div>
            </div>
            <div className="footer__fotter">

کلیه حقوق برای آکادمی  برنامه نویسی  ویرا محفوظ است.
            </div>
        </section>
    </section>
  )
}
