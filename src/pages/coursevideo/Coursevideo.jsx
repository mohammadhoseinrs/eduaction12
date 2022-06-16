import React, { useEffect, useState } from 'react'
import './Coursevideo.css'
import CourseDetailAcc from '../../components/CourseDetail/CourseDetailMain/CourseDetailAcc'
import ReactPlayer from 'react-player'
import { Outlet, useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import Coursevideotop from './../../components/coursevideo/Coursevideotop/Coursevideotop'
import Coursevideomain from '../../components/coursevideo/coursevideomain/Coursevideomain'
import { getdetail } from '../../api/userApi'
import CourseComment from '../../components/CourseDetail/CourseDetailMain/CourseComment'
import Coursevideocomment from '../../components/coursevideo/Coursevideocomment/Coursevideocomment'
import Loading from '../../loading/Loading'
export default function Coursevideo() {
  const params=useParams()
  const [commentlist,setcommentlist]=useState([])
  const [videodetail,setvideodetail]=useState([])
  const [replyinput,setreplyinput]=useState(false)
  const [loading,setloading]=useState(false)
  useEffect(()=>{
    setloading(true)
    getdetail(`https://cafevira.com/api/api/v1/Courses/Tittle/CourseVideo?courses_name=${params.coursedetail}&name=${params.coursevideo}`).then(item=>{
      setcommentlist(item.data.comment)
      setloading(false)
      return setvideodetail(item.data)
    })
  },[params])
  const updateComment=(newComment)=>{
    setcommentlist(commentlist.concat(newComment))
  }
  const inputToggle=(id)=>{
   setreplyinput(true)
   const newitem=[...commentlist]
   newitem.forEach(item=>{
     if(item.id===id){
       return item.open=!item.open
     }
   })
   setcommentlist(newitem)
 }
 if (loading) return <Loading />

  return (
    <>
    <Coursevideotop videotop={videodetail.video}/>
    <Coursevideomain videodetail={videodetail}  />
    <Coursevideocomment
    coursecomment={videodetail.comment}
    commentlist={commentlist}
    refreshfunction={updateComment}
    courseid={videodetail?.video?.id}
    inputToggle={inputToggle}
    replyinput={replyinput}
    setreplyinput={setreplyinput}
    />
    </>
  )
}
