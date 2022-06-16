import React from 'react'
import AnimatedPage from '../../animated'
import AboutusMain from '../../components/aboutus/aboutusmain/AboutusMain'
import Aboutustop from '../../components/aboutus/Aboutustop'

export default function Aboutus() {
  return (
    <AnimatedPage>
        <Aboutustop />
        <AboutusMain />
    </AnimatedPage>
  )
}
