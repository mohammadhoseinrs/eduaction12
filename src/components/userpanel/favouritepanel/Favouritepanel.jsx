import React from 'react'
import './Favouritepanel.css'
import {TiDeleteOutline} from 'react-icons/ti'
import course1 from './../../../Assets/images/Home/course-01.jpeg'
import Animatedsubpage from '../../../Animatedsubpage'

export default function Favouritepanel() {
  return (
      <Animatedsubpage>
    <div className='favouritepanel'>
        <div className="favouritepanel__top">
            <div className="favouritepanel__top__item">
            نام محصول
            </div>
            <div className="favouritepanel__top__item">
            قیمت
            </div>
        </div>
        <div className="favouritepanel__bottom">
            <div className="favouritepanel__bottom__item">
                <div className="favouritepanel__bottom__item__icon">
                    <TiDeleteOutline size={20} />
                    <div className="favouritepanel__bottom__item__icon__image">
                        <img src={course1} alt="" />
                    </div>
                    <p>تست نفوذ با کالی لینوکس - PWK [سناریو محور]</p>
                </div>
                <p>۳۰۰ هزار تومان</p>
            </div>
        </div>
    </div>
    </Animatedsubpage>
  )
}
