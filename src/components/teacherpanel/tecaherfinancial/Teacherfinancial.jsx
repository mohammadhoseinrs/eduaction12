import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { getdetail } from '../../../api/userApi'
import PropagateLoader from "react-spinners/PropagateLoader";
import { css } from "@emotion/react";
import ClipLoader from "react-spinners/ClipLoader";
import './Teacherfinancial.css'
export default function Teacherfinancial() {
    const [teacherfinance,setteacherfinance]=useState(null)
    const [teachermoney,setteachermoney]=useState(null)
    const [dataloading,setdataloading]=useState(false)
    const [color, setColor] = useState("#525fe1");
    const user=JSON.parse(localStorage.getItem('educationsite'))
    console.log(user);

    useEffect(()=>{
        setdataloading(true)
        getdetail(`Teacher/TeachersFinancial?teacher_id=${8}`).then(res=>{
            console.log(res.data);
            setteacherfinance(res.data)
        })
        getdetail(`Teacher/TeachersFinancial/Checkout?teacher_id=${8}`).then(res=>{
            console.log(res.data);
            setteachermoney(res.data.sum)
            setdataloading(false)
        })
    },[])
    function numberWithCommas(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    const override = css`
    display: block;
    margin: 0 auto;
    border-color: white;
    font-weight:bold;
     border:4px solid white;
    `;
    if (dataloading) return (
        <div className="teacherfinance__inner__loading">
            <PropagateLoader color={color} loading={dataloading} css={override} size={40} />
        </div>
      )
  return (
    <div className='tecaherfinancial'>
        <div className="tecaherfinancial__top">
            میزان فروش 
        </div>
        <div className="tecaherfinancial__table">
            <table className='styled-table'>
               <thead>
                <tr>
                    <th></th>
                    <th>اسم دوره</th>
                    <th>مبلغ فروش</th>
                    <th>سهم استاد</th>
                    <th> تاریخ</th>
                </tr>
                </thead> 
                <tbody>
                 {teacherfinance?.map(teacher=>(
                    <>
                <tr key={teacher.id}>
                    <td>{teacher.id}</td>
                    <td>{teacher.courses_name}</td>
                    <td>{numberWithCommas(teacher.sold_price)}</td>
                    <td>{numberWithCommas(teacher.teacher_money)}</td>
                    <td>{teacher.date}</td>
                </tr>
                </>
                 ))} 
                </tbody>
            </table>
        </div>
        <div className='sum__of__teacher'>
            <p>مجموع قابل پرداخت :</p>
            <div>{teachermoney}</div>
        </div> 
    </div>
  )
}
