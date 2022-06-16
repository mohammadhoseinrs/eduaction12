import React from 'react'
import './Homebanner.css'
import {GiSchoolBag , GiOpenBook ,GiTrophyCup} from 'react-icons/gi'
import {MdSchool} from 'react-icons/md'
import FramerMotion from '../../../Framer2'
export default function Homebanner() {
  return (
    <section className='homebanner'>
        <section className='homebanner__container'>
            <div className="homebanner__inner">
                <div className="homebanner__inner__item">
                    <FramerMotion >
                    <div className="homebanner__inner__item__inner">
                        <GiSchoolBag />
                        <div className='homebanner__inner__item__inner__content'>
                            <h5>۵۵۰ +</h5>
                            <p>کاربر ثبت نام کردن</p>
                        </div>
                    </div>
                    </FramerMotion>
                </div>

                <div className="homebanner__inner__item">
                <FramerMotion >
                    <div className="homebanner__inner__item__inner">
                        <GiTrophyCup />
                        <div className='homebanner__inner__item__inner__content'>
                            <h5>۱۰۰ ٪</h5>
                            <p> نرخ رضایت </p>
                        </div>
                    </div>
                    </FramerMotion>
                </div>

                <div className="homebanner__inner__item">
                <FramerMotion >
                    <div className="homebanner__inner__item__inner">
                        <GiOpenBook />
                        <div className='homebanner__inner__item__inner__content'>
                            <h5>۲۵۰ +</h5>
                            <p> دوره آموزشی </p>
                        </div>
                    </div>
                    </FramerMotion>
                </div>

                <div className="homebanner__inner__item">
                <FramerMotion >
                    <div className="homebanner__inner__item__inner">
                        <MdSchool />
                        <div className='homebanner__inner__item__inner__content'>
                            <h5>۵۰ +</h5>
                            <p>مدرس انلاین</p>
                        </div>
                    </div>
                    </FramerMotion>
                </div>
            </div>
        </section>
    </section>
  )
}
