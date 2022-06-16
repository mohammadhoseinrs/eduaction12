import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import Animatedsubpage from '../../../Animatedsubpage'
import './userdetail.css'
export default function Userdetail() {
    const {user}=useSelector(state=>state.login)
    console.log(user);
    const [name,setname]=useState(user.name)
    const [phone,setphone]=useState(user.phone)
    const [email,setemail]=useState(user.email)
  return (
      <Animatedsubpage>
    <div className='userdetail'>
        <div className="userdetail__number">
            <label htmlFor="">نام</label>
            <input type="text" value={name} onChange={(e)=>setname(e.target.value)} />
        </div>
        <div className="userdetail__number">
             <label htmlFor="">  شماره موبایل</label>
            <input type="text" value={phone} onChange={(e)=>setphone(e.target.value)} />
          
        </div>
        <div className="userdetail__number">
            <label htmlFor="">آدرس ایمیل</label>
            <input type="text" value={email} onChange={(e)=>setemail(e.target.value)} />
        </div>
        <div className="userdetail__pass">
        تغییر رمز عبور
        </div>
        <div className="userdetail__number">
            <label htmlFor="">رمز عبور کنونی (اگر نمی‌خواهید تغییر دهید خالی بگذارید)</label>
            <input type="text" />
        </div>
        <div className="userdetail__number">
            <label htmlFor="">رمز عبور جدید (برای عدم تغییر خالی بگذارید.)</label>
            <input type="text" />
        </div>
        <div className="userdetail__number">
            <label htmlFor="">تکرار رمز عبور جدید</label>
            <input type="text" />
        </div>
        <div className="userdetail__btn">
            <button>
            ذخیره تغییرات
            </button>
        </div>
    </div>
    </Animatedsubpage>
  )
}
