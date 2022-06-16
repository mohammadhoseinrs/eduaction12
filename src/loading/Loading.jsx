import React, { useState } from 'react'
import './Loading.css'
import ScaleLoader from "react-spinners/ScaleLoader";
import { css } from "@emotion/react";

const override = css`
        display: block;
        margin: 2rem auto;
        border-color: white;
        font-weight:bold;
        border:10px solid white;
        `;
export default function Loading() {
    const [color, setColor] = useState("#525fe1");
  return (
    <div className='loading'>
     <ScaleLoader color={color}
      css={override}
      width={10}
      height={60}
      margin={10}
      radius={10} />
    </div>
  )
}
