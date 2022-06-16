import React, { useEffect, useState } from 'react'
import './Teachercourseadd.css'
import {data} from './../teachercourse/Tecahercourse'
import { Link, useParams } from 'react-router-dom'
import { getdetail } from '../../../api/userApi'
import axios from 'axios'
import ClipLoader from "react-spinners/ClipLoader";
import { css } from "@emotion/react";
import PropagateLoader from "react-spinners/PropagateLoader";
export default function Teachercourseadd() {
    const [topic,settopic]=useState(null)
    const [newinput,setnewinput]=useState('')
    const params=useParams()
    console.log(params);
   
    const [loading,setloading]=useState(false)
  const [color, setColor] = useState("#525fe1");
  const [success,setSuccess]=useState(false)
  
  const [dataloading,setdataloading]=useState(false)

  const override = css`
  display: block;
  margin: 0 auto;
  border-color: white;
  font-weight:bold;
   border:4px solid white;
  `;

  const deletecourse=(id)=>{
    axios.post(`https://cafevira.com/api/api/v1/Teacher/deletecourseTittle?id=${id}`,
    {
        headers: { 'Content-Type': 'application/json' },
     }
    ).then(res=>{
        console.log(res);
        setdataloading(true)
        getdetail(`Teacher/courseTittle?courses_name=${params.teachercourseedit}`).then(res=>{
            console.log(res);
            settopic(res.data)
            setdataloading(false)
        })
    })
}
    useEffect(()=>{
        setdataloading(true)
        getdetail(`Teacher/courseTittle?courses_name=${params.teachercourseedit}`).then(res=>{
            console.log(res);
            settopic(res.data)
            setdataloading(false)
        })

    },[])
    console.log(topic);
    const submithandler=(e)=>{
        setloading(true)
        e.preventDefault()
        axios.post(`https://cafevira.com/api/api/v1/Teacher/courseTittle?courses_name=${params.teachercourseedit}&topic=${newinput}`).then(
            res=>{
                console.log(res);
                settopic(topic.concat(res.data))
                setnewinput('')
                setloading(false)
                setSuccess(true)
                setTimeout(()=>{
                    setSuccess(false)
                },3000)
            }
        )
    }
  
    if (dataloading) return (
        <div className="teacherdetail__inner__loading">
            <PropagateLoader color={color} loading={dataloading} css={override} size={40} />
        </div>
      )
  return (
    <div className='teachercourseadd'>
        <div className='teachercourseadd__top'>
        سرفصل های هر دوره
        </div>
        <div className="teachercourseadd__main">
        {topic?.map(data=>(
            <div className="teachercourseadd__main__item">
                <div key={data.id}>
                    {data.topic}
                </div>
               <div className="teachercourseadd__main__item__btn">
                    <Link to={`/teacherpanel/teachercourse/${params.teachercourseedit}/teachercourseadd/${data.topic}`}>اضافه کردن جلسات</Link>
                    <button className='teachercourse__main__item__btn__red'
                        onClick={()=>deletecourse(data.id)}
                     >حذف سرفصل</button>
                </div>
   
             </div>    
            ))}
        </div>
        {success &&  <p className='success'> سرفصل جدید با موفقیت ایجاد شد 
              </p>}
        <form className="teachercourseadd__input" onSubmit={submithandler}>
            <label htmlFor="">اضافه کردن سرفصل جدید</label>
            <input className='teachercourseadd__input_input' value={newinput} type="text" onChange={(e)=>setnewinput(e.target.value)} />
            <button className='teachercourseadd__input__btn'>
            {loading ? (
                 <ClipLoader color={color} loading={loading} css={override} size={30} />

            ):(
                <p>اضافه کردن</p>
            )}                
                </button>
        </form>
    </div>
  )
}
