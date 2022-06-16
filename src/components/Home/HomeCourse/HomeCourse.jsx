import React, { useEffect, useState } from 'react'
import { getdetail } from '../../../api/userApi'
import './HomeCourse.css'
import Homecoursecard from './Homecoursecard'
import FramerMotion from '../../../FramerMotion'
import { AnimatePresence, motion } from 'framer-motion'
import PropagateLoader from "react-spinners/PropagateLoader";
import { css } from "@emotion/react";

export default function HomeCourse() {

    const [searchterm,setsearchterm]=useState('showCourses')
    const [homecourse,sethomecourse]=useState([])
    const [homecoursetitle,sethomecoursetitle]=useState({})
    const [loading,setloading]=useState(true)
    const [color, setColor] = useState("#525fe1");

    useEffect(()=>{
        setloading(true)
        getdetail(searchterm).then(item=>{
            sethomecourse(item.data)
            setloading(false)
        })
        getdetail('showTittleCourses').then(item=>{
            sethomecoursetitle(item.data.data)
        })
    },[searchterm])
    console.log(homecourse);

    const buttonName=[
        {id:1,name:'همه' , tag:'showCourses' , color:true},
        {id:2,name:'محبوب ترین',tag:'PopularCourses' , color:false},
        {id:3,name:'جدیدترین' , tag:'NewestCourses' , color:false},
        {id:4,name:'بهترین' ,tag:'BestCourses', color:false},
    ]

    const [buttonList,setbuttonlist]=useState(buttonName)
    const buttonHandler=(id , tag)=>{
        const buttonitem=[...buttonList]
        buttonitem.forEach(item=>{
            if(item.id===id){
                return item.color=!item.color
            }
            item.color=false
        })
        setbuttonlist(buttonitem)
        setsearchterm(tag)
    }

    const variants = {
        initial: {
          opacity: 0,
        },
        enter: {
          opacity: 1,
          transition: { duration: 0.6 },
        },
        exit: {
          opacity: 0,
          transition: { duration: 1 },
        }
      };

      const override = css`
        display: block;
        margin: 0 auto;
        border-color: white;
        font-weight:bold;
         border:2px solid white;
        `;

  return (
    <section className='homecourse'>
        <section className='homecouse__container'>
            <div className="homecourse__top">
                <div className="homecourse__top__right">
                    <FramerMotion>
                    <h5>{homecoursetitle.headline_tittle}</h5>
                    <h2>{homecoursetitle.main_tittle}</h2>
                    </FramerMotion>
                </div>
                <div className="homecourse__top__left">
                    {buttonList.map(item=>(
                        <button key={item.id}
                         onClick={()=>buttonHandler(item.id , item.tag)}
                         className={item.color && 'course__active'}
                         >{item.name}</button>
                    ))}
                </div>
            </div>
            <FramerMotion>
            <div className="homecourse__inner">
                {loading ? (
                <>
                <div className="homecourse__inner__loading">
                    <PropagateLoader color={color} loading={loading} css={override} size={40} />
                </div>
                </>
                ):(
                <>
                    {homecourse.map(course=>(
                    <AnimatePresence exitBeforeEnter>
                    <motion.div
                    animate="enter"
                     exit="exit"
                    initial="initial"
                    variants={variants}  
                     className="homecourse__inner__inner">
                       <Homecoursecard key={course.id} course={course} />
                    </motion.div>
                    </AnimatePresence>
                ))}
                 </>
                )}
               
            </div>
            </FramerMotion>
        </section>
    </section>
  )
}
