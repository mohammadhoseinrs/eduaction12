import React, { useEffect, useState } from 'react'
import AnimatedPage from '../../animated'
import { getdetail } from '../../api/userApi'
import Allcoursemain from '../../components/allcourse/allcoursemain/Allcoursemain'
import Allcoursetop from '../../components/allcourse/Allcoursetop'
import Loading from '../../loading/Loading'
export default function Allcourse() {
  const [allcourse,setallcourse]=useState([])
  const [loading,setloading]=useState(false)

  useEffect( ()=>{
    setloading(true)
     getdetail('PageTittleGroup')
    .then(item=>{
      setallcourse(item.data)
      setloading(false)
    })
},[])
if (loading) return <Loading />
  return (
    <>
      <Allcoursetop topic={allcourse.hedear_topic}/>
      <Allcoursemain des={allcourse} />
    </>
  )
}
