import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import AnimatedPage from '../../animated'
import { getdetail } from '../../api/userApi'
import CourseComment from '../../components/CourseDetail/CourseDetailMain/CourseComment'
import CourseDetailMain from '../../components/CourseDetail/CourseDetailMain/CourseDetailMain'
import CourseDetailtop from '../../components/CourseDetail/CourseDetailtop/CourseDetailtop'
import Loading from '../../loading/Loading'

export default function CourseDetail() {
  const [loading,setloading]=useState(false)

  const params=useParams()
 const [coursedetail,setcoursedetail]=useState([])
 const [commentlist,setcommentlist]=useState([])
 const [replyinput,setreplyinput]=useState(false)
 const [buycourse,setbuycourse]=useState(false)
 const {usercourse}=useSelector(state=>state.login)
  const checkusercourse=()=>{
    const coursedetail=JSON.parse(localStorage.getItem('userdetail'))
    if(coursedetail){
      coursedetail.forEach(item=>{
        if(params.coursedetail===item.courses_name){
          setbuycourse(true)
        }
      })
    }
  }
  useEffect(()=>{
    checkusercourse()
  },[checkusercourse])
 
 useEffect(()=>{
  setloading(true)
   getdetail(`Courses/Tittle/CourseDetail?courses_name=${params.coursedetail}`).then(item=>{
     console.log(item);
    setcommentlist(item.data.Comment)
    setloading(false)
     return setcoursedetail(item.data)
   })
 },[])
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
    <AnimatedPage>
      <CourseDetailtop PageTittle={coursedetail.PageTittle} />
      <CourseDetailMain
      buycourse={buycourse}
       coursedetail={coursedetail} />
      <CourseComment coursecomment={coursedetail.Comment}
      commentlist={commentlist}
      refreshfunction={updateComment}
      courseid={coursedetail?.CourseInfo?.course_id}
      inputToggle={inputToggle}
      replyinput={replyinput}
      setreplyinput={setreplyinput}
       />
    </AnimatedPage>
  )
}
