import React from 'react'

export default function Errortext(props) {
  return (
    <div style={{color:'red' , marginTop:'10px' , marginRight:'15px'}}>
        {props.children}
    </div>
  )
}
