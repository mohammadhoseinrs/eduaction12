import React, { useState } from 'react'
import ReactPlayer from 'react-player'
import { Outlet } from 'react-router-dom'
import Coursevideoacc from './Coursevideoacc'
import './Coursevideomain.css'
export default function Coursevideomain({videodetail}) {
  const defaultvideourl=videodetail?.video?.videos
  console.log(videodetail);
  return (
    <div className='coursevideo'>
    <div className="coursevideo__right">
        <Coursevideoacc accdata={videodetail.scroll_detail}  />
    </div>
    <div className="coursevideo__left">
        <div className="coursevideo__left__top">
          <ReactPlayer url={defaultvideourl} width="100%" height="100%" controls={true}/>
        </div>
    </div>
    <Outlet />
</div>
  )
}
