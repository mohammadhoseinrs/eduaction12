import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Navigate, useParams } from 'react-router-dom'
import {BiSearch} from 'react-icons/bi'
import { getdetail } from '../../../api/userApi'
import CourseCart from '../coursecart/CourseCart'
import './CourseMain.css'
import Select from 'react-select'
import { useDebounce } from 'use-debounce'
import Loading from '../../../loading/Loading'
import Error404 from '../../../pages/404/Error404'

const options = [
  { value: 'all', label: 'مرتب سازی بر اساس همه' },
  { value: 'SortCheapest', label: 'مرتب سازی بر اساس ارزان ترین' },
  { value: 'SortExpensive', label: 'مرتب سازی بر اساس گران ترین' },
  { value: 'SortPoint', label: 'مرتب سازی بر اساس  امتیاز' },
]
export default function CourseMain() {
  const [loading,setloading]=useState(false)
  const [coursemain,setcoursemain]=useState([])
  const [searchbox,setsearchbox]=useState('')
  const [searchurl,setsearchurl]=useState('')
  const [debouncedValue]=useDebounce(searchbox,600)
  const param=useParams()
  const [select,setselect]=useState('all')  
  
  useEffect(()=>{
    if(searchbox){
      getdetail(`CoursesSearch/Tittle/Text?Text=${searchbox}&Tittle=${param.courseid}`).then(item=>{
        return setcoursemain(item.data)
      })
    }else{
      setloading(true)
      getdetail(`Courses/Tittle/${select}?Tittle=${param.courseid}`).then(item=>{
          setcoursemain(item.data)
      })
      setloading(false)
    }
  },[searchbox , select])
  
  if(loading) return <Loading />
  if(coursemain.status==='200'){
    return <Error404 />
  }
  return (
    <>
    <div className="coursemain__filter">
      <div className="coursemain__filter__item">
        <div className="coursemain__filter__item__right">
        <form >
          <input type="text" placeholder='جستجوی محصول ...' onChange={(e)=>setsearchbox(e.target.value)} />
          <button disabled={true}>
            <BiSearch size={25} />
          </button>
        </form>
        </div>
        <div className="coursemain__filter__item__left">
        <Select
         placeholder='مرتب سازی بر اساس همه'
          options={options}
           onChange={(e)=>setselect(e.value)}
           />
        </div>
      </div>
      </div>
    <section className='coursemain'>
      
      {coursemain  ? coursemain?.map(course=>(
            <CourseCart key={course.id} course={course} />
      )):(<p className='sexrchbox__error'>
          
      </p>)}
    
    </section>
    </>
  )
}
