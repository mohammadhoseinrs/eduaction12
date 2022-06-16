import React, { useEffect, useState } from 'react'
import { getdetail } from '../../../api/userApi'
import Blogitem from './Blogitem'
import './Blogmain.css'
import {BiSearch} from 'react-icons/bi'

export default function Blogmain({blogmain , searchandler}) {
  return (
    <section className='blogmain'>
       <div className="blogmain__filter">
      <div className="blogmain__filter__item">
        <div className="blogmain__filter__item__right">
        <form >
          <input type="text" placeholder='جستجوی محصول ...' onChange={(e)=>searchandler(e.target.value)} />
          <button disabled={true}>
            <BiSearch size={25} />
          </button>
        </form>
        </div>
        <div className="coursemain__filter__item__left">
        </div>
      </div>
      </div>
        <section className='blogmain__container'>
          {blogmain?.map(blog=>(
                 <Blogitem key={blog.id} blog={blog} />
          ))}
         </section>
    </section>
  )
}
