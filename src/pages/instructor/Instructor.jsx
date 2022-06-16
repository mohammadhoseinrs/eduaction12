import React from 'react'
import AnimatedPage from '../../animated'
import Instructormain from '../../components/instructor/Instructormain/Instructormain'
import Instructortop from '../../components/instructor/Instructortop'
import './instructor.css'
export default function Instructor() {
  return (
    <AnimatedPage>
      <Instructortop />
      <Instructormain />
    </AnimatedPage>
  )
}
