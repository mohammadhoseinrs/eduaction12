import React, { useEffect, useState } from 'react'
import Mainbtn from '../../Mainbtn'
import './HomeHeader.css'
import arrow from './../../../Assets/images/Home/arrow.png'
import banner1 from './../../../Assets/images/Home/banner-01.png'
import shape1 from './../../../Assets/images/Home/shape-19.png'
import shape2 from './../../../Assets/images/Home/shape-05.png'
import shape3 from './../../../Assets/images/Home/shape-06.png'
import { getdetail } from '../../../api/userApi'
import Loading from '../../../loading/Loading'
export default function HomeHeader() {
const [homeheader,sethomeheader]=useState({})
const [loading,setloading]=useState(false)

    useEffect( ()=>{
        setloading(true)
        getdetail('showBack')
        .then(item=>{
            sethomeheader(item.data)
            setloading(false)
        })
    },[])
        
    if (loading) return <Loading />

  return (
    <section className='homeheader'>
        <section className='homeheader__container'>
            <section className='homeheader__inner'>
                <section className='homeheader__inner__right'>
                    <div className="homeheader__inner__right__inner">
                        <span className="homeheader__inner__right__inner__top">
                            {homeheader?.Headline}
                        </span>
                        <h1 className='homeheader__inner__right__inner__title'>
                            {homeheader?.Main_Tittle}
                        </h1>
                        <p className='homeheader__inner__right__inner__subtitle'>
                            {homeheader?.Description}
                        </p>
                        <div className="homeheader__inner__right__btn">
                            <Mainbtn  text={homeheader?.ButtonTitle}/>
                            <div className="homeheader__inner__right__btn__img">
                                <img src={arrow} alt="" />
                            </div>
                        </div>
                    </div>
                </section>
                <section className='homeheader__inner__left'>
                    <div className="homeheader__inner__left__image">
                        <img src={homeheader?.Picture} alt="" />
                    </div>
                </section>
            </section>
            <div className="homeheader__icon">
                <div className="homeheader__icon__1">
                    <img src={shape1} alt="" />
                </div>
                <div className="homeheader__icon__2">
                    <img src={shape2} alt="" />
                </div>
                <div className="homeheader__icon__3">
                    <img src={shape3} alt="" />
                </div>
            </div>
        </section>
    </section>
  )
}
