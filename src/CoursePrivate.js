import React, { useEffect, useState } from 'react'
import { Navigate, Outlet, useLocation, useParams } from 'react-router-dom'

export default function CoursePrivate() {
    const location=useLocation()
    const [buycourse,setbuycourse]=useState(true)
    const params=useParams()
    
    const checkusercourse=()=>{
        const coursedetail=JSON.parse(localStorage.getItem('userdetail'))
        if(coursedetail){
          console.log(coursedetail);
        let condition=coursedetail.some(item=>{
           return params.coursedetail===item.courses_name
          })
          setbuycourse(condition)
        }else{
            setbuycourse(false)
        }
      }
      console.log(buycourse);
      useEffect(()=>{
        checkusercourse()
      },[checkusercourse , buycourse])
  return (
    <div>
        {
            buycourse ? (
                <Outlet />
            ):(
                <Navigate to='/' state={{from:location}} replace />
            )
        }
    </div>
  )
}