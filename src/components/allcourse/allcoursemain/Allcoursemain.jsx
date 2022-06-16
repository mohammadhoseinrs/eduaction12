import React, { useEffect, useState } from 'react'
import './Allcoursemain.css'
import icdl from './../../../Assets/images/coursedetail/icdl.svg.svg'
import { Link } from 'react-router-dom'
import { getdetail } from '../../../api/userApi'
import Loading from '../../../loading/Loading'
export default function Allcoursemain({des}) {
    const [allcourse,setallcourse]=useState([])
    const [loading,setloading]=useState(false)

    useEffect(()=>{
        setloading(true)
        getdetail('showAllGroup')
        .then(item=>{
            setallcourse(item.data)
            setloading(false)
        })
    },[])
    console.log(allcourse);
    if (loading) return <Loading />

  return (
    <div className='allcoursemain'>
        <div className="allcoursemain__container">
            <h2 className='allcoursemain__topic'>
                {des?.topic}
            </h2>
            <p className='allcoursemain__text'>
                {des?.description}
            </p>
            <div className="allcoursemain__inner">
                {allcourse?.map(item=>(
                    <Link key={item.id} to={`/allcourse/${item.Tittle}`} className="allcoursemain__item">
                <div className="allcoursemain__item__top">
                    <img src={item.Picture} alt="" />
                </div>
                <div className="allcoursemain__item__bottom">
                    <div className="allcoursemain__item__bottom__title">
                        <p>{item.Tittle}</p>
                    </div>
                    <div className="allcoursemain__item__bottom__item">
                        <div className='allcoursemain__item__bottom__item__item'>
                            <p>{item.NumberOfLesson} آموزش</p>
                        </div>
                        <div className='allcoursemain__item__bottom__item__item'>
                            <p>{item.education_hours} ساعت</p>
                        </div>
                        <div className='allcoursemain__item__bottom__item__item'>
                            <p>{item.NumberofStudent} دانشجو</p>
                        </div>
                    </div>
                </div>
            </Link>

                ))}
            </div>


        </div>
    </div>
  )
}
