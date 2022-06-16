import './Coursevideoacc.css'
import React, { useEffect, useState } from 'react'
import {MdKeyboardArrowDown , MdKeyboardArrowUp ,MdOutlineArticle} from 'react-icons/md'
import {AiOutlineLock , AiOutlineUnlock} from 'react-icons/ai'
import { AnimatePresence, motion } from 'framer-motion'
import { getdetail } from '../../../api/userApi'
import { Link, useNavigate, useParams } from 'react-router-dom'


const variants = {
    initial: {
      opacity: 0,
      y:'-10%'
    },
    enter: {
      opacity: 1,
      transition: { duration: 0.2 },
      y:'0%'
    },
    exit: {
      opacity: 0.4,
      transition: { duration: 0.2 },
      y:'-20%'
    }
  };
export default function Coursevideoacc({accdata}) {
  let navigate = useNavigate();

  console.log(accdata);
    const [openacc,setopenacc]=useState([])
    const params=useParams()
    console.log(params);
    const accordian=(id)=>{
        const newacc=[...accdata]
        newacc.forEach(acc=>{
            if(acc.id===id){
                return acc.open= !acc.open
            }
        })
        setopenacc(newacc)
    }
    const refreshpage=(placeToGo)=>{
      navigate(placeToGo, { replace: true })
      window.location.reload();
    }
    return (
        <div className='coursedetailacc'>
        {accdata?.map((acc,index)=>(
            <div key={acc?.id}  className="courseaccitem">
                <div className="courseaccitem__header" onClick={()=>accordian(acc.id)}>
                    <div className="courseaccitem__header__btn">
                        {acc?.Scroll_tittle}
                        {acc.open ? (<MdKeyboardArrowDown />):(<MdKeyboardArrowUp />)} 
                    </div>
                </div>
                <AnimatePresence exitBeforeEnter>
                {acc.open ?(
                <motion.div
                animate="enter"
                exit="exit"
                initial="initial"
                variants={variants}            
                className="courseaccitem__collapse">
                    <ul>
                    {acc[0]?.map(accitem=>{
                          return(
                            <>
                                <Link 
                                to={`/allcourse/${params.courseid}/${params.coursedetail}/${accitem.name}`}
                                >
                              <div className="courseaccitem__collapse__text">
                                  <MdOutlineArticle />
                                  <p>{accitem?.name}</p>
                              </div>
                              <AiOutlineUnlock />
                            </Link>
                            </>
                          )
                      })}
                    </ul>
                </motion.div>
                ):('')}
                </AnimatePresence>
            </div>
        ))}
        </div>
      )
}
