import React, { useEffect, useState } from 'react'
import AnimatedPage from '../../animated'
import { getdetail } from '../../api/userApi'
import Blogmain from '../../components/Blog/blogmain/Blogmain'
import Blogtop from '../../components/Blog/Blogtop/Blogtop'

export default function Blog() {
  const [blogtop,setblogtop]=useState({})
  const [blogmain,setblogmain]=useState([])
  const [searchbox,setsearchbox]=useState('')

  useEffect( ()=>{
    getdetail('PageTittleArticles')
    .then(item=>{
      setblogtop(item.data)
    })
},[])
useEffect(()=>{
  if(searchbox){
    getdetail(`Articles/all/search?text=${searchbox}`).then(item=>{
      return setblogmain(item.data)
    })

  }else{
    getdetail('Articles/all')
    .then(item=>{
      setblogmain(item.data)
    })
  }
},[searchbox])
const searchandler=(text)=>{
  setsearchbox(text)
}
  return (
    <AnimatedPage>
        <Blogtop blogtop={blogtop} />
        <Blogmain blogmain={blogmain} searchandler={searchandler} />
    </AnimatedPage>
  )
}
