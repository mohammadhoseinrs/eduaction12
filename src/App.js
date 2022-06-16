import React, { useEffect, useState } from 'react'
import { useRoutes } from 'react-router-dom'
import Footer from './components/footer/Footer'
import Navbar from './components/navbar/Navbar'
import routes from './routes'
import './App.css'
import { useDispatch } from 'react-redux'
import { loginFailed, loginSuccess , loginDetail  } from './features/loginSlice'
import { getTeacherCourse } from './api/userApi'

export default function App() {

  const dispatch=useDispatch()
  const checkAutoLogin=()=>{
    let token=''
    const tokenDetail=localStorage.getItem('educationsite')
    if(!tokenDetail){
      dispatch(loginFailed())
    }
    if(tokenDetail){
      token=JSON.parse(tokenDetail)
      dispatch(loginSuccess(token))
      getTeacherCourse(token.id)

    }

  }
  const checkgetdetail=()=>{
    let detail=''
    const userdetail=localStorage.getItem('userdetail')
    if(userdetail){
      detail=JSON.parse(userdetail)
      dispatch(loginDetail(detail))
    }
  }
  useEffect(()=>{
    checkAutoLogin()
    checkgetdetail()
  },[checkAutoLogin , checkgetdetail])



  let router=useRoutes(routes)
  
  return (
    <div className='app'>
    <Navbar />
    {router}
    <Footer />
    </div>
  )
}