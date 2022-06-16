import React from 'react'
import './ShopBasketMain.css'
import {IoIosArrowBack} from 'react-icons/io'
import {MdDeleteOutline} from 'react-icons/md'
import course2 from './../../../Assets/images/coursedetail/course-02.jpeg'
export default function ShopBasketMain() {
  return (
    <section className='shopbasketmain'>
        <div className="shopbasketmain__right">
            <div className="shopbasketmain__right__item">
                <div className="shopbasketmain__right__item__right">
                    <div className="shopbasketmain__right__item__right__image">
                        <img src={course2} alt="" />
                    </div>
                    <p>آموزش زبان Dart</p>
                </div>
                <div className="shopbasketmain__right__item__price">
                    <p>۲۴۳</p>
                    <span>هزار تومان</span>
                    <MdDeleteOutline />
                </div>
            </div>
        </div>

        <div className="shopbasketmain__left">
            <h3 className='shopbasketmain__left__title'>
                اطلاعات پرداخت
            </h3>
            <div className="shopbasketmain__left__discount">
                <h5>کد تخفیف</h5>
                <div className="shopbasketmain__left__discount__input">
                    <input type="text" />
                    <button>اعمال کد</button>
                </div>
            </div>

            <div className="shopbasketmain__left__discount__sum">
                    <div className="shopbasketmain__left__discount__sum__item">
                        <h5>جمع کل</h5>
                        <div className="shopbasketmain__left__discount__sum__item1">
                            <span>۲۴۳</span>
                            <p>هزار تومان</p>
                        </div>
                    </div>

                    <div className="shopbasketmain__left__discount__sum__item">
                        <h5>تخفیف</h5>
                        <div className="shopbasketmain__left__discount__sum__item1">
                            <span>۰</span>
                            <p>هزار تومان</p>
                        </div>
                    </div>
            </div>

            <div className="shopbasketmain__left__total">
                        <h5>مبلغ قابل پرداخت</h5>
                        <div className="shopbasketmain__left__total1">
                            <span>243</span>
                            <p>هزار تومان</p>
                        </div>
            </div>

            <div className="shopbasketmain__container__btn">
                <button className='shopbasketmain__btn'>
                    <p>تکمیل فرآیند خرید</p>
                <IoIosArrowBack />
                </button>
                
            </div>
        </div>
    </section>
  )
}
