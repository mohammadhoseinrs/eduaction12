import React, { useEffect, useState } from 'react'
import './Contactmain.css'
import contact1 from './../../../Assets/images/contact/contact-1.jpeg'
import Mainbtn from '../../Mainbtn'
import shape5 from './../../../Assets/images/Home/shape-05.png'
import shape3 from './../../../Assets/images/Home/shape-03.png'
import linkedin from './../../../Assets/images/contact/linkedin.png'
import whatsapp from './../../../Assets/images/contact/whatsapp.png'
import house from './../../../Assets/images/contact/house.png'
import axios from 'axios'
import ClipLoader from "react-spinners/ClipLoader";
import { css } from "@emotion/react";

export default function Contactmain() {
    const [name,setname]=useState('')
    const [email,setemail]=useState('')
    const [topic,settopic]=useState('')
    const [des,setdes]=useState('')

    const [loading,setloading]=useState(false)
  const [color, setColor] = useState("#525fe1");
  const [success,setSuccess]=useState(false)
  
  const btn=name.length>0 && email.length>0 && topic.length>0 && des.length>0 
  console.log(btn);

    const submithandler=(e)=>{
        setloading(true)
        e.preventDefault()
        const item={
            name,
            email,
            topic,
            description:des
        }
        const res=axios.post('https://cafevira.com/api/api/v1/ContactUsRequest',item,
        {
            headers: { 'Content-Type': 'application/json' },
         }).then(res=>{
             console.log(res);
             setloading(false)
             if(res.data.status==200){
                setSuccess(true)
              }
              setTimeout(() => {
                setSuccess(false)
         
               }, 5000);
        setname('')
         setemail('')
         settopic('')
         setdes('')
         })
         
    }
    const override = css`
        display: block;
        margin: 0 auto;
        border-color: white;
        font-weight:bold;
         border:4px solid white;
        `;
 

  return (
      <>
      <section className='contactmain'>
          <section className='contactmain__right'>
                <div className="contactmain__right__inner">
                    <div className="contactmain__right__inner__inner">
                        <img src={contact1} alt="" />
                        <div className="contactmain__right__inner__inner__text">
                            <h4>ارسال پیشنهادات و انتقادات</h4>
                            <br />
                            <h4>ارتباط با ما</h4>
                        </div>
                    </div>
                </div>
          </section>
          <section className='contactmain__left'>
               <div className="contactmain__left__top">
                    <span>ارتباط با ما</span>
                    <h3>فرم تماس با ما</h3>
               </div>
               <form className='contactmain__left__form'
               onSubmit={submithandler}
               >
                    <div className="contactmain__left__form__item1">
                        <input required type="text" placeholder='نام ' value={name} onChange={(e)=>setname(e.target.value)}/>
                        <input required type="text" placeholder='ایمیل' value={email} onChange={(e)=>setemail(e.target.value)}/>
                    </div>
                    <div className="contactmain__left__form__item2">
                        <input required type="text" placeholder='عنوان' value={topic} onChange={(e)=>settopic(e.target.value)}/>
                    </div>
                    <div className="contactmain__left__form__item2">
                        <textarea required type="text" placeholder='توضیحات' value={des} onChange={(e)=>setdes(e.target.value)}/>
                    </div>
                    {success &&  <p className='success'>  پیشنهادات شما با موفقیت ارسال شد 
              </p>}
                    <button className='contactmain__btn'
                    >
                        {loading ? (
                            <>
                                <ClipLoader color={color} loading={loading} css={override} size={30} />
                            </>
                        ):(
                            <p>تماس با ما</p>
                        )}
                    </button>
               </form>
            </section>
            <div className="contactmain__icon">
                <img src={shape5} alt="" />
            </div>
      </section>
      <div className="contactmain__footer">
      <div className="contactmain__footer__top">
          <span>آدرس</span>
          <h3>آدرس رسمی ما</h3>
      </div>
      <div className="contactmain__footer__main">
          <div className="contactmain__footer__main__item">
              <div className="contactmain__footer__main__item__inner">
                  <div className="contactmain__footer__main__item__inner__item">
                      <img src={whatsapp} alt="" />
                  </div>
                  <div className="contactmain__footer__main__item__inner__content">
                      <h6>تماس</h6>
                      <div>
                          <span>موبایل :</span>
                          <p>۰۹۳۳۸۴۴۱۶۹۰</p>
                      </div>
                      <div>
                          <span>دفتر :</span>
                          <p>۰۹۳۳۸۴۴۱۶۹۰</p>
                      </div>
                  </div>
              </div>
          </div>

          <div className="contactmain__footer__main__item">
              <div className="contactmain__footer__main__item__inner">
                  <div className="contactmain__footer__main__item__inner__item">
                      <img src={linkedin} alt="" />
                  </div>
                  <div className="contactmain__footer__main__item__inner__content">
                      <h6>ساعت کاری</h6>
                      <p>
                          <span>هر روز</span>
                      </p>
                      <p>۹ تا ۱۵</p>
                  </div>
              </div>
          </div>

          <div className="contactmain__footer__main__item">
              <div className="contactmain__footer__main__item__inner">
                  <div className="contactmain__footer__main__item__inner__item">
                      <img src={house} alt="" />
                  </div>
                  <div className="contactmain__footer__main__item__inner__content">
                      <h6>آدرس</h6>
                      <p>
                          <p>خیابان مدیرت کوچه سوم</p>
                      </p>
                      <span> پلاک ۴۸ </span>

                  </div>
              </div>
          </div>
      </div>

  </div>

  <div className="contantmain__bg">
          <div className="contantmain__bg__image">
              <img src={shape3} alt="" />
          </div>
      </div>
  </>
  )
}
