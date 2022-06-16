import React from 'react'
import Input from './validation-components/Input'
import Radio from './validation-components/Radio'

export default function Formikcontrol(props) {
    const {control,...rest}=props
    switch(control){
        case 'input':
            return <Input {...rest} />
        case 'radio':
            return <Radio {...rest}  />   
    }
}
