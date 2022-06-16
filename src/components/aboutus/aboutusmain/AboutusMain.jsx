import React from 'react'
import './Aboutusmain.css'
import aboutus from './../../../Assets/images/contact/privacy.jpeg'
export default function AboutusMain() {
  return (
    <section className='aboutusmain'>
        <div className="aboutusmain__image">
            <img src={aboutus} alt="" />
        </div>
        <div className="aboutusmain__content">
            <div className="aboutusmain__content__item">
            <h3>هدف ما  </h3>
            <p>
            ما به عنوان یک وبسایت آموزشی سعی داریم به همه شما عزیزان فارسی زبان کمک کنیم که در این دنیای بی کران از زبان ها و فریمورک‌ها و ابزارهای مختلف برنامه نویسی مسیر فعالیت خود را پیدا کنید و همچنین سعی داریم در این مسیر همراه شما باشیم تا این قابلیت را بدست بیاورید که از دانش کسب شد در کسب و کار خود یا برای استخدام در شرکتی که قصد فعالیت در آن را دارید استفاده کنید . هدف ما پیروزی شماست
            </p>
            </div>
        </div>
    </section>
  )
}
