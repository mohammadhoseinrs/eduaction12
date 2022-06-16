import React from 'react'
import './MainPanel.css'
import {FaUniversity , FaUserGraduate ,FaWallet ,FaRegBell} from 'react-icons/fa'
import {BsBasket3Fill ,BsInstagram ,BsWhatsapp} from 'react-icons/bs'
import Animatedsubpage from '../../../Animatedsubpage'

export default function MainPanel() {
  return (
    <Animatedsubpage>
    <section className='mainpanel'>
      <section className='mainpanel__container'>
        <div className="mainpanel__top">
          <div className="mainpanel__top__item">
              <div className="mainpanel__top__item__right">
                <FaUniversity />
              </div>
              <div className="mainpanel__top__item__left">
                <span>۳۲ دوره</span>
                <p>موجود در سایت</p>
              </div>
          </div>

          <div className="mainpanel__top__item">
              <div className="mainpanel__top__item__right mainpanel__top__item__right2">
                <FaUserGraduate />
              </div>
              <div className="mainpanel__top__item__left">
                <span>8 دوره </span>
                <p>شرکت کرده اید</p>
              </div>
          </div>

          <div className="mainpanel__top__item">
              <div className="mainpanel__top__item__right mainpanel__top__item__right3">
                <BsBasket3Fill />
              </div>
              <div className="mainpanel__top__item__left">
                <span>۳۲ دوره</span>
                <p>در انتظار پرداخت</p>
              </div>
          </div>

          <div className="mainpanel__top__item">
              <div className="mainpanel__top__item__right mainpanel__top__item__right4">
                <FaWallet />
              </div>
              <div className="mainpanel__top__item__left">
                <span>۳۲ دوره</span>
                <p>موجودی شما</p>
              </div>
          </div>
         
        </div>

        <div className="mainpanel__middle">
          <div className="mainpanel__middle__inner">
            <p>
          ما را در شبکه های اجتماعی دنبال کنید
          </p>
            <div className="mainpanel__middle__inner__item">
              <div className="mainpanel__middle__inner__item__item">
                  <BsInstagram color='#525fe1' />
                  <p>اینستاگرام</p>
              </div>
              <div className="mainpanel__middle__inner__item__item">
                  <BsWhatsapp color='#21C55D' />
                  <p>واتس آپ</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mainpanel__bottom">
            <span className='mainpanel__bottom__icon'>
              <div className="mainpanel__bottom__icon__icon">
                <FaRegBell />
              </div>
            </span>
            <h5>جدیدترین اطلاعیه ها</h5>
            <ul>
              <li>
                <div className="mainpanel__bottom__li">
                  <p>کانال تلگرام </p>
                  <span> در تاریخ: 1400/02/11 </span>
                </div>
              </li>

              <li>
                <div className="mainpanel__bottom__li">
                  <p>کانال تلگرام </p>
                  <span> در تاریخ: 1400/02/11 </span>
                </div>
              </li>
              

            </ul>
          </div>
      </section>
    </section>
    </Animatedsubpage>
  )
}
