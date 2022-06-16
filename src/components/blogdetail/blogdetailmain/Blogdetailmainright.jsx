import React from 'react'
import './Blogdetailmainright.css'
import {BsFillPersonFill ,BsCalendar2Minus} from 'react-icons/bs'
import {BiTimeFive} from 'react-icons/bi'
import {AiOutlineEye ,AiFillCheckCircle} from 'react-icons/ai'
import blog1 from './../../../Assets/images/blog/blog1.jpeg'
import quote from './../../../Assets/images/blog/quote.png'
import gallery1 from './../../../Assets/images/blog/gallery-01.jpeg'
import gallery2 from './../../../Assets/images/blog/gallery-02.jpeg'
import instructor1 from './../../../Assets/images/Home/instructor-2.jpeg'
import {AiFillInstagram ,AiFillLinkedin} from 'react-icons/ai'
import {IoLogoWhatsapp} from 'react-icons/io'
import {BsTelegram} from 'react-icons/bs'
import {IoIosArrowBack ,IoIosArrowForward} from 'react-icons/io'
export default function Blogdetailmainright() {
  return (
    <section className='bdmr'>
        <section className='bdmr__container'>
        <div className="bdml__top">
                <div className='bdml__top__subtitle'>برنامه نویسی</div>
                <h2>مقایسه VUE JS و REACT JS + ویدئو</h2>
                <div className="bdml__top__detail">
                    <div className="bdml__top__detail__item">
                        <BsFillPersonFill />
                        <p>ارسال شده توسط محمدامین  </p>
                    </div>
                    <div className="bdml__top__detail__item">
                        <BsCalendar2Minus />
                        <p>1399/10/22</p>
                    </div>
                    <div className="bdml__top__detail__item">
                        <BiTimeFive />
                        <p>۳ دقیقه</p>
                    </div>
                    <div className="bdml__top__detail__item">
                        <AiOutlineEye />
                        <p> 2.3k بازدید   </p>
                    </div>
                </div>
                <div className="bdml__top__image">
                    <img src={blog1} alt="" />
                </div>
            </div>
            <div className="bdml__content">
                <p>
شما اگر بخواین به توسعه اپلیکیشن های اندروید یا ios بپردازین هم با یادگیری React و هم با یادگیری Vue میتونین به توسعه اپلیکیشن های اندروید و ios بپردازین؛اگه React یاد بگیرین در ادامه با React Native به توسعه اپلیکیشن های موبایل بپردازین و اگه Vue یاد بگیرین در ادامه میتونین با Weex اپلیکیشن های موبایل بپردازین.نکته جالب این هست که هم با React Native و هم با Weex میتونین یه کد رو نوشته و دو خروجی برای اندروید و ios بگیرین اما محبوبیت و جامعه آماری React Native از Weex بیشتر است.</p>
                <p>
کدهای پروژه ای که با Vue توسعه داده شده نسبت به پروژه ای که با React نوشته شده به شدت آسان بوده و به راحتی میتونین اونارو درک کنین.کتابخونه React کامپوننت بیس بوده و شما برای استفاده از آن حتما باید کامپوننت ایجاد کنین(داخل ریکت دو نوع کامپوننت داریم / کامپوننت های کلاسی و کامپوننت های تابعی) و نکته جالب اینجاست که React سینتکس JSX داره که این کتابخونه رو پیچیده کرده!حالا JSX چیه؟ مخفف Java Script Xml هست و شما میاین داخل جاوا اسکریپت کد Html مینویسین و یکم کدها پیچیده شده و درکشون سخت میشه.اما تو Vue همچین خبری نیست، نه خبری از JSX هست و نه اجباری به ساخت کامپوننت ، پس در نتیجه اگه بخوایم این دو ابزار رو بر اساس سادگی کدها مقایسه کنیم Vue بر React اولویت دارد.
</p>
            <blockquote className='bdml__content__table'>
                <h6>
                کتابخونه React کامپوننت بیس بوده و شما برای استفاده از آن حتما باید کامپوننت ایجاد کنین(داخل ریکت دو نوع کامپوننت داریم / کامپوننت های کلاسی و کامپوننت های تابعی) و نکته جالب اینجاست که React سینتکس JSX داره که این کتابخونه رو پیچیده کرده
                </h6>
                <img src={quote} alt="" />
            </blockquote>
            <div className="bdml__content__gallery">
                <img src={gallery1} alt="" />
                <img src={gallery2} alt="" />
            </div>
            <h5>مقایسه بر اساس حجم سورس کد</h5>
            <p>
شما اگر بخواین به توسعه اپلیکیشن های اندروید یا ios بپردازین هم با یادگیری React و هم با یادگیری Vue میتونین به توسعه اپلیکیشن های اندروید و ios بپردازین؛اگه React یاد بگیرین در ادامه با React Native به توسعه اپلیکیشن های موبایل بپردازین و اگه Vue یاد بگیرین در ادامه میتونین با Weex اپلیکیشن های موبایل بپردازین.نکته جالب این هست که هم با React Native و هم با Weex میتونین یه کد رو نوشته و دو خروجی برای اندروید و ios بگیرین اما محبوبیت و جامعه آماری React Native از Weex بیشتر است.</p>
            <ul>
                <li>
                    <AiFillCheckCircle/>
                    <h4>یکی از معیار هایی که Vue Js به آن معروف است</h4>
                </li>
                <li>
                    <AiFillCheckCircle/>
                    <h4>یکی از معیار هایی که Vue Js به آن معروف است</h4>
                </li>
                <li>
                    <AiFillCheckCircle/>
                    <h4>یکی از معیار هایی که Vue Js به آن معروف است</h4>
                </li>
                <li>
                    <AiFillCheckCircle/>
                    <h4>یکی از معیار هایی که Vue Js به آن معروف است</h4>
                </li>
                
            </ul>
            </div>
            <div className="bdml__tag">
                <div className="bdml__tag__right">
                    <p>react js</p>
                    <p>vue js</p>
                    <p>html</p>
                </div>
                <div className="bdml__tag__left">
                    <span>شبکه های اجتماعی:</span>
                    <AiFillInstagram />
                    <AiFillLinkedin />
                    <IoLogoWhatsapp />
                    <BsTelegram />
                </div>
            </div>
            <div className="bdml__bottom">
                <div className="bdml__bottom__right">
                        <img src={instructor1} alt="" />
                </div>
                <div className="bdml__bottom__left">
                    <h2>سینا محمدی</h2>
                    <p>
                    همون طور که میدونین ویو جی اس و ری اکت جی اس یکی از فریمورک ها و کتابخانه هایی از جاوا اسکریپت هستند که بسیار محبوب و پراستفاده بوده و بازار کار بسیار بالایی دارن
                    </p>
                    <div className="bdml__social">
                    <AiFillInstagram />
                    <AiFillLinkedin />
                    <IoLogoWhatsapp />
                    <BsTelegram />
                    </div>
                </div>
            </div>
            <div className="bdml__blog__bottom">
                <div className="bdml__blog__bottom__item">
                    <div className="bdml__blog__bottom__item__inner">
                        <p className='bdml__blog__bottom__item__inner__item '>
                        <IoIosArrowForward />
                            <span>مقایسه vue js و react js بر اساس بازار کار</span>
                        </p>
                    </div>
                </div>
                <div className="bdml__blog__bottom__item">
                <div className="bdml__blog__bottom__item__inner">
                        <p className='bdml__blog__bottom__item__inner__item'>
                            <span>مقایسه vue js و react js بر اساس بازار کار</span>
                            <IoIosArrowBack />
                        </p>
                    </div>
                </div>
            </div>
        </section>
    </section>
  )
}
