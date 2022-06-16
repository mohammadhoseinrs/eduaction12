import React from 'react'
import {AiOutlineStar ,AiFillStar} from 'react-icons/ai'



export default function Rating({rating }) {
  return (
    <>
    {[...Array(5)].map((_,i)=>(

        <span >
            {rating>i ?(

                <AiFillStar />
            ):(

                <AiOutlineStar />
            )}


        </span>

    ))}
    
    
    
    </>
  )
}
