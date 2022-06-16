import React, { useState } from 'react'
import AnimatedPage from '../../animated'
import Signin from '../../components/Signup/Signin/Signin'
import SigninTeacher from '../../components/Signup/SigninTeacher/SigninTeacher'

import Signupform from '../../components/Signup/SignupForm/Signupform'
import Signupnew from '../../components/Signup/signupnew/Signupnew'
import SignupTop from '../../components/Signup/Signuptop/SignupTop'
import './Signup.css'
export default function Signup() {
  const [togglesignin,settogglesignin]=useState(true)
  return (
    <AnimatedPage>
      <SignupTop />
      <div className='signuppage'>
        {togglesignin ? <Signin
          settogglesignin={settogglesignin}/>
           :
         <SigninTeacher
         settogglesignin={settogglesignin}
        />}
         <Signupform />
      </div>
    </AnimatedPage>
  )
}
