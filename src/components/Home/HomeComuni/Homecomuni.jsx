import React, { useEffect, useState } from 'react'
import './Homecomuni.css'
import com1 from './../../../Assets/images/Home/com1.png'
import com2 from './../../../Assets/images/Home/com2.png'
import gallery1 from './../../../Assets/images/Home/gallery-1.jpeg'
import gallery2 from './../../../Assets/images/Home/gallery-2.jpeg'
import gallery3 from './../../../Assets/images/Home/gallery-3.jpeg'
import shape21 from './../../../Assets/images/Home/shape-21.png'
import shape3 from './../../../Assets/images/Home/shape-03.png'
import Mainbtn from '../../Mainbtn'
import { getdetail } from '../../../api/userApi'
import FramerMotion from '../../../FramerMotion'
import Framer2 from './../../../Framer2'
export default function Homecomuni() {
    const [homecomuni,sethomecomuni]=useState({})
    useEffect(()=>{
        getdetail('showAbout')
        .then(item=>{
            sethomecomuni(item.data)
        })
    },[])
    console.log(homecomuni);
  return (
    <section className='homecomuni'>
        <section className='homecomuni__container'>
            <section className='homecomuni__inner'>
                <section className='homecomuni__inner__right'>
                    <FramerMotion>
                    <h5>درباره ما</h5>
                    <h1>{homecomuni.Topic}</h1>
                    </FramerMotion>
                    <FramerMotion>
                    <p>{homecomuni.Description}</p>
                    </FramerMotion>
                    <FramerMotion>
                    <div className="homecomuni__inner__right__inner">
                        <div className="homecomuni__inner__right__inner__item">
                            <div className="homecomuni__inner__right__inner__item__right">
                                <div className="homecomuni__inner__right__inner__item__right__image">
                                    <img src={homecomuni.Icon1} alt="" />
                                </div>
                                <div className="homecomuni__inner__right__inner__item__right__text">
                                    <h4>{homecomuni.SubTopic1}</h4>
                                    <p>{homecomuni.SubDescription1}</p>
                                </div>
                            </div>
                            <div className="homecomuni__inner__right__inner__item__left">
                            <div className="homecomuni__inner__right__inner__item__right__image">
                                    <img src={homecomuni.Icon2}  alt="" />
                                </div>
                                <div className="homecomuni__inner__right__inner__item__right__text">
                                <h4>{homecomuni.SubTopic2}</h4>
                                    <p>{homecomuni.SubDescription2}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    </FramerMotion>
                    <div className="homecomuni__btn">
                       <Mainbtn text='درباره ما' />
                    </div>
                </section>
                <section className='homecomuni__inner__left'>
                    <div className="homecomuni__inner__left__item2">
                        <Framer2>
                        <img src={homecomuni.Picture2} alt="" />
                        </Framer2>
                    </div>
                    <div className="homecomuni__inner__left__item1">
                    <Framer2>
                        <img src={homecomuni.Picture1} alt="" />
                        </Framer2>
                    </div>
                    <div className="homecomuni__inner__left__item3">
                    <Framer2>
                        <img src={homecomuni.Picture3} alt="" />
                    </Framer2>   
                    </div>
                </section>
            </section>
            <div className="homecomuni__icon">
                <div className="homecomuni__icon__item1">
                    <img src={shape21} alt="" />
                </div>
                <div className="homecomuni__icon__item2">
                    <img src={shape3} alt="" />
                </div>
                <div className="homecomuni__icon__inner">
                    <h5>۹۰۰</h5>
                    <p>تعداد دانشجو</p>
                </div>
            </div>
        </section>
    </section>
  )
}
