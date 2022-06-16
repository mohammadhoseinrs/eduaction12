import React from 'react'
import './Instructordetailmain.css'
import instructor10 from './../../../Assets/images/blog/instructor-10.jpeg'
import {AiFillInstagram ,AiFillLinkedin} from 'react-icons/ai'
import {BsTelegram} from 'react-icons/bs'
import {IoLogoWhatsapp} from 'react-icons/io'

export default function Instructordetailmain() {
  return (
    <section className='idm'>
        <div className="idm__right">
            <div className="idm__right__inner">
                <div className="idm__right__inner__profile">
                    <img src={instructor10} alt="" />
                </div>
                <div className="idm__right__inner__content">
                    <h5>سینا محمدی</h5>
                    <p>فرانت اند</p>
                    <div className="idm__right__inner__content__number">
                        <p>
                            <span> ایمیل :</span>
                            <a>mohammadhosein@gmail.com</a>
                        </p>
                        <p>
                            <span>شماره تلفن</span>
                            <a>09338441690</a>
                        </p>
                    </div>
                    <ul className="idm__right__inner__content__social">
                        <li>
                            <AiFillInstagram />
                        </li>
                        <li>
                            <AiFillLinkedin />
                        </li>
                        <li>
                            <BsTelegram />
                        </li>
                        <li> 
                            <IoLogoWhatsapp />
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div className="idm__left">
            <div className="idm__left__top">
                <span>درباره من</span>
                <h4>سینا محمدی</h4>
                <p>
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
                </p>
            </div>
            <div className="idm__left__middle">
                <div className="idm__left__middle__top">
                    <span>مهارت ها</span>
                    <h3>دوره ها</h3>
                </div>
                <div className="idm__left__middle__bottom">
                    <div className="idm__left__middle__bottom__item">
                        <h6>طراحی سایت</h6>
                        <div className="idm__left__middle__bottom__item__progress">
                            <div className="idm__left__middle__bottom__item__progress__item" style={{width:'90%'}}>
                            </div>
                            <span>90%</span>
                        </div>
                    </div>

                    <div className="idm__left__middle__bottom__item">
                        <h6>طراحی اپلیکیشن</h6>
                        <div className="idm__left__middle__bottom__item__progress">
                            <div className="idm__left__middle__bottom__item__progress__item" style={{width:'10%'}}>
                            </div>
                            <span>90%</span>
                        </div>
                    </div>

                    <div className="idm__left__middle__bottom__item">
                        <h6>طراحی </h6>
                        <div className="idm__left__middle__bottom__item__progress">
                            <div className="idm__left__middle__bottom__item__progress__item" style={{width:'35%'}}>
                            </div>
                            <span>90%</span>
                        </div>
                    </div>

                    <div className="idm__left__middle__bottom__item">
                        <h6>بک اند </h6>
                        <div className="idm__left__middle__bottom__item__progress">
                            <div className="idm__left__middle__bottom__item__progress__item" style={{width:'60%'}}>
                            </div>
                            <span>90%</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="idm__left__bottom">
                <div className="idm__left__bottom__inner">
                    <div className="idm__left__bottom__inner__item">
                        <span>5</span>
                        <p>دوره های تدریس شده</p>
                    </div>
                    <div className="idm__left__bottom__inner__item">
                        <span>5</span>
                        <p>دوره های تدریس شده</p>
                    </div>
                    <div className="idm__left__bottom__inner__item">
                        <span>5</span>
                        <p>دوره های تدریس شده</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}
