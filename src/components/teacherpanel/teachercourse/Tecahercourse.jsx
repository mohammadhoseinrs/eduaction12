import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getdetail } from '../../../api/userApi';
import './TeacherCourse.css'
import PropagateLoader from "react-spinners/PropagateLoader";
import { css } from "@emotion/react";

export const data=[
    {id:1,name:'dore html',title:[
        {id:1,subtitle:'introduction html'},
        {id:2,subtitle:'seesion1 html'},
        {id:2,subtitle:'session2 html'}
    ]},
    {id:2,name:'dore css' ,title:[
        {id:1,subtitle:'introduction css'},
        {id:2,subtitle:'seesion1 css'},
        {id:2,subtitle:'session2 css'}
    ]},
    {id:3,name:'dore flutter' ,title:[
        {id:1,subtitle:'introduction flutter'},
        {id:2,subtitle:'seesion1 flutter'},
        {id:2,subtitle:'session2 flutter'}
    ]},
    {id:4,name:'dore java',title:[
        {id:1,subtitle:'introduction java'},
        {id:2,subtitle:'seesion1 java'},
        {id:2,subtitle:'session2 java'}
    ]},
]
export default function Tecahercourse() {
    const [color, setColor] = useState("#525fe1");
    const [dataloading,setdataloading]=useState(false)
    const [teachercourse,setteeachercourse]=useState([])
    const {user}=useSelector(state=>state.login)
    const deletecourse=(id)=>{
        axios.post(`https://cafevira.com/api/api/v1/Teacher/deleteCourse?course_id=${id}`,
        {
            headers: { 'Content-Type': 'application/json' },
         }
        ).then(res=>{
            setdataloading(true)
            getdetail(`Teacher/ListCourse?teacher_id=${user?.id}`).then(item=>{
            setteeachercourse(item.data)
            setdataloading(false)
        })
        })
    }
    useEffect(()=>{
        setdataloading(true)
        getdetail(`Teacher/ListCourse?teacher_id=${user?.id}`).then(item=>{
            setteeachercourse(item.data)
            setdataloading(false)
        })
    },[])
    
    const addsession=(id)=>{
        console.log(id);
    }
   

    const override = css`
        display: block;
        margin: 0 auto;
        border-color: white;
        font-weight:bold;
         border:4px solid white;
        `;

  if (dataloading) return (
    <div className="teacherdetail__inner__loading">
        <PropagateLoader color={color} loading={dataloading} css={override} size={40} />
    </div>
  )
  return (
    <div className='teachercourse'>
        <div className="teachercourse__top">
               لیست دوره ها تدریس شده توسط شما
        </div>
        <div className="teachercourse__main">
           {teachercourse.map(data=>(
                <div className="teachercourse__main__item" key={data.id}>
                    <p>{data.courses_name}</p>
                    <div className='teachercourse__main__number__of__like'>
                        <p>تعداد لایک ها :</p>
                        <p>{data.count_of_like}</p>
                    </div>
                    <div className="teachercourse__main__item__btn">
                    <Link to={`/teacherpanel/teachercourse/${data.courses_name}/teachercourseadd`} onClick={()=>addsession(data.id)}>اضافه کردن سرفصل</Link>
                    <Link className='teachercourse__main__item__link' to={`/teacherpanel/teachercourse/${data.courses_name}`} onClick={()=>addsession(data.id)}>ویرایش دوره </Link>
                    <button className='teachercourse__main__item__btn__red'
                    onClick={()=>deletecourse(data.id)}
                    >حذف دوره</button>
                </div>
                </div>
                
           ))} 
        </div>
    </div>
  )
}
