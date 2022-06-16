import React from 'react'
import {Field , ErrorMessage} from 'formik'
import Errortext from './Errortext' 
import './Input.css'

export default function Input(props) {
    const {name,label,...rest}=props
  return (
    <div  className='input-style'>
        <label htmlFor="">{label}</label>
        <Field id={name} name={name} {...rest}  />
        <ErrorMessage name={name} component={Errortext} />
    </div>
  )
}
