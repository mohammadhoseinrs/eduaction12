import React from 'react'
import './customerpanel.css'
import Animatedsubpage from '../../../Animatedsubpage'

export default function Customerpanel() {
  return (
    <Animatedsubpage>
    <div className='customerpanel'>
        <div className="customerpanel__top">
            <div className="customerpanel__top__item">
            سفارش
            </div>
            <div className="customerpanel__top__item">
            تاریخ
            </div>
            <div className="customerpanel__top__item">
            وضعیت
            </div>
            <div className="customerpanel__top__item">
            مجموع
            </div>
            <div className="customerpanel__top__item">
            عملیات‌ها
            </div>
        </div>
        <div className="customerpanel__bottom__item">
            <div className="customerpanel__bottom__item__item">
            #168042
            </div>
            <div className="customerpanel__bottom__item__item">
            1400/12/26
            </div>
            <div className="customerpanel__bottom__item__item">
            تکمیل شده
            </div>
            <div className="customerpanel__bottom__item__item">
            0 تومان برای 1 مورد
            </div>
            <div className="customerpanel__bottom__item__item">
            <button>نمایش</button>
            </div>
        </div>
    </div>
    </Animatedsubpage>
  )
}
