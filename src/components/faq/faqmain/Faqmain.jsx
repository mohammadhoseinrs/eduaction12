import React, { useState } from 'react'
import './Faqmain.css'
import {AiOutlinePlus,AiOutlineMinus} from 'react-icons/ai'
import { AnimatePresence, motion } from 'framer-motion'

const courseacc=[
  {id:1,title:'کاربران ویژه به چه فایل‌های دسترسی دارند؟', item:'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز',open:true},
  {id:2,title:'پیش نیاز های  جی اس', item:'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز',open:false},
  {id:3,title:`
  آیا میتوانم حساب کاربری ویژه را از ارتقاع داد آپدیت کنم؟`, item:'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز',open:false},
  {id:4,title:'پیش نیاز های  توییتر', item:'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز',open:false},
  {id:5,title:`
  آیا میتوانم حساب کاربری ویژه را از ارتقاع داد آپدیت کنم؟`, item:'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز',open:false},
  {id:6,title:`
  آیا میتوانم حساب کاربری ویژه را از ارتقاع داد آپدیت کنم؟`, item:'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز',open:false},

]
const variants = {
  initial: {
    opacity: 0,
    y:'-10%'
  },
  enter: {
    opacity: 1,
    transition: { duration: 0.2 },
    y:'0%'
  },
  exit: {
    opacity: 0.2,
    transition: { duration: 0.4 },
    y:'-10%'
  }
};
export default function Faqmain() {
  const [openacc,setopenacc]=useState(courseacc)
  const collapsehandler=(id)=>{
    const newacc=[...courseacc]
    newacc.forEach(acc=>{
        if(acc.id===id){
            return acc.open= !acc.open
        }
    })
    setopenacc(newacc)
  }
  return (
    <section className='faqmain'>
        <div className="faqmain__top">
            <span>سوالات متداول</span>
            <p>
            در اینجا سعی می‌کنیم به سوالات متداولی که ممکن است، برای شما پیش بیاید، پاسخ دهیم.
            </p>
        </div>
        <div className="faq__btn">
          <button className='faq__btn__active'>صفحه یک</button>
          <button>صفحه دو</button>
          <button>صفحه سه</button>
        </div>
        <div className="faqmain__main">
         {courseacc.map(course=>(
           <div className='faqmain__main__item'>
             <div className="faqmain__main__item__header" onClick={()=>collapsehandler(course.id)}>
               {course.title}
               {course.open ? (<AiOutlinePlus />):(<AiOutlineMinus />)}
             </div>
             <AnimatePresence>
               {course.open ? (
                 <motion.div
                 animate="enter"
                 exit="exit"
                initial="initial"
                variants={variants}            
                className="courseaccitem__collapse1"
                 >
                  <p>{course.item}</p>
                 </motion.div>
               ):('')}
             </AnimatePresence>
           </div>
         ))}
        </div>
    </section>
  )
}
