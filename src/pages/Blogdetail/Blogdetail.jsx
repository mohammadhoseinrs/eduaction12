import React from 'react'
import AnimatedPage from '../../animated'
import Blogdetailmain from '../../components/blogdetail/blogdetailmain/Blogdetailmain'
import Blogdetailtop from '../../components/blogdetail/blogdetailtop/Blogdetailtop'

export default function Blogdetail() {
  return (
    <AnimatedPage>
        <Blogdetailtop />
        <Blogdetailmain />
    </AnimatedPage>
  )
}
