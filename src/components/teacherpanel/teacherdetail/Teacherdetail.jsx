import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { getTeacher } from '../../../api/userApi'
import './Teacherdetail.css'
import ClipLoader from "react-spinners/ClipLoader";
import { css } from "@emotion/react";
import PropagateLoader from "react-spinners/PropagateLoader";

export default function Teacherdetail() {
  const [alldetail,setalldetail]=useState(null)
  const [username,setusername]=useState('')
  const [password,setpassword]=useState('')
  const [firstname,setfirstname]=useState('')
  const [lastname,setlastname]=useState('')
  const [email,setemail]=useState('')
  const [decription,setdecription]=useState('')
  const [phone,setphone]=useState('')
  const [skill,setskill]=useState('')
  const [whatsapp,setwhatsapp]=useState('')
  const [telegram,settelegram]=useState('')
  const [linkdin,setlinkdin]=useState('')
  const [insta,setinsta]=useState('')
  const [image,setimage]=useState(null)

  const [dataloading,setdataloading]=useState(false)
  const [loading,setloading]=useState(false)
  const [color, setColor] = useState("#525fe1");
  const [success,setSuccess]=useState(false)
  const override = css`
        display: block;
        margin: 0 auto;
        border-color: white;
        font-weight:bold;
         border:4px solid white;
        `;
 
  const teacherdetail=JSON.parse(localStorage.getItem('educationsite'))
  
  useEffect(()=>{
    setdataloading(true)
     getTeacher(teacherdetail.id).then(item=>{
      if(item.data.status==='200'){
        setalldetail(item.data)
        console.log(item.data);
      }
      setdataloading(false)
    })
  },[])

  useEffect(()=>{

    if(alldetail){
      setemail(alldetail?.email)
      setfirstname(alldetail?.teach_name)
      setlastname(alldetail?.teach_family)
      setdecription(alldetail?.description)
      setphone(alldetail?.phone)
      setskill(alldetail?.specialty)
      setwhatsapp(alldetail?.whatsapp)
      settelegram(alldetail?.telegram)
      setlinkdin(alldetail?.linkedin)
      setinsta(alldetail?.instagram)
      setusername(alldetail?.user_name)
      setpassword(alldetail?.password)
    }
  },[alldetail])
  const fileselectedHandler=(e)=>{
    setimage(e.target.files[0])
  }
 
  const fileuploadHandler=async()=>{
  
    setloading(true)
    const item={
      id:teacherdetail.id,
      teach_name:firstname,
      teach_family:lastname,
      specialty:skill,
      description:decription,
      email:email,
      phone:phone,
      linkedin:linkdin,
      telegram:telegram,
      instagram:insta,
      whatsapp:whatsapp,
      pic:image,
      password:password,
      user_name:username
    }

    await axios.post('https://cafevira.com/api/api/v1/Teacher/editProfile',item,
    {
      headers: { 'Content-Type': 'multipart/form-data' },
   }
    ).then(res=>{
      setalldetail(res.data)
      console.log(res);
      setloading(false)
      if(res.data.status==200){
        setSuccess(true)
      }
      setTimeout(() => {
       setSuccess(false)

      }, 5000);
    })
  }
  

  if (dataloading) return (
    <div className="teacherdetail__inner__loading">
        <PropagateLoader color={color} loading={dataloading} css={override} size={40} />
    </div>
  )
  return (
    <div className='teacherdetail'>
       <div className="teacherdetail__number teacherdetail__number2">
          <div>
          <label htmlFor=""> نام کاربری</label>
            <input required value={username} type="text" onChange={(e)=>setusername(e.target.value)}  />
          </div>
          <div>
          <label  htmlFor="">تغییر رمز عبور </label>
            <input required  type="password" value={password} onChange={(e)=>setpassword(e.target.value)}   />
          </div>
        </div>

        <div className="teacherdetail__number teacherdetail__number2">
          <div>
          <label htmlFor="">نام</label>
            <input value={firstname} type="text" onChange={(e)=>setfirstname(e.target.value)}  />
          </div>
          <div>
          <label  htmlFor="">نام خانوادگی</label>
            <input value={lastname} type="text" onChange={(e)=>setlastname(e.target.value)}   />
          </div>
        </div>

        <div className="teacherdetail__number teacherdetail__number5">
        <label  htmlFor="">توضیحات</label>
            <textarea value={decription} type="text" onChange={(e)=>setdecription(e.target.value)}  />
        </div>

        <div className="teacherdetail__number teacherdetail__number2">
          <div>
          <label  htmlFor="">ایمیل</label>
            <input value={email} type="text" onChange={(e)=>setemail(e.target.value)}  />
          </div>
          <div>
          <label  htmlFor=""> شماره موبایل</label>
            <input value={phone} type="text" onChange={(e)=>setphone(e.target.value)}  />
          </div>
        </div>

        <div className="teacherdetail__number">
        <label  htmlFor="">تخصص</label>
            <input value={skill} type="text" onChange={(e)=>setskill(e.target.value)}  />
        </div>
          <p className='teacherdetail__text'>لینک شبکه های اجتماعی</p>
        <div className="teacherdetail__number teacherdetail__number2">
          <div>
          <label  htmlFor="">واتس اپ</label>
            <input value={whatsapp} type="text" onChange={(e)=>setwhatsapp(e.target.value)}  />
          </div>
          <div>
          <label  htmlFor="">تلگرام </label>
            <input value={telegram} type="text" onChange={(e)=>settelegram(e.target.value)}  />
          </div>
        </div>

        <div className="teacherdetail__number teacherdetail__number2">
          <div>
          <label  htmlFor="">اینستاگرام</label>
            <input value={insta} type="text" onChange={(e)=>setinsta(e.target.value)}  />
          </div>
          <div>
          <label  htmlFor="">لینکدین </label>
            <input value={linkdin} type="text" onChange={(e)=>setlinkdin(e.target.value)}  />
          </div>
        </div>

        <div className="teacherdetail__number teacherdetail__number3">
        <label value={firstname} htmlFor="">عکس پروفایل</label>
            <input type="file" onChange={fileselectedHandler}/>
        </div>
        {success &&  <p className='success'>  تغییرات با موفقیت انجام شد 
              </p>}
        <button className='teacherdetail__btn'
        onClick={fileuploadHandler}
        >
          {loading ? (
                 <ClipLoader color={color} loading={loading} css={override} size={30} />
                ):(
                 <p>ثبت  تغییرات</p>
                )}
        </button>
    </div>
  )
}
