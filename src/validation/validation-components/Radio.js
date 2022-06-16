import React from 'react'
import {Field , ErrorMessage} from 'formik'
import Errortext from './Errortext'
import './Radio.css'

export default function Radio(props) {
    const {name,label,options,...rest}=props
  return (
    <div className='radio-style'>
        <label>{label}</label>
        <Field className='radio-field' name={name} {...rest} >
            {
                ({field})=>{
                    return options.map(option=>{
                        return(
                            <div className='radio-options' key={option.key}>


                              <label htmlFor={option.value}>{option.key}</label>

                                <input  type='radio'  id={option.value}
                                 {...field}
                                  value={option.value}
                                  checked={field.value===option.value}
                                  />

                            </div>
                        )
                    })  
                }
            }
        </Field>
        <ErrorMessage name={name} component={Errortext} />

    </div>
  )
}
