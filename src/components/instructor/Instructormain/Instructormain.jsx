import React from 'react'
import './Instructormain.css'
import instructor10 from './../../../Assets/images/blog/instructor-10.jpeg'
export default function Instructormain() {
  return (
    <section className='instructormain'>
        <div className="instructormain__top">
            <h6>
            مدرس ها با مهارت
            </h6>
            <h1>معرفی بهترین مدرس های ما</h1>
        </div>
        <div className="instructormain__top__main">
            <div className="instructormain__top__main__item">
                <img src={instructor10} alt="" />
                <div className="instructormain__top__main__item__name">
                    سعید محمدی
                </div>
            </div>
        </div>
    </section>
  )
}
