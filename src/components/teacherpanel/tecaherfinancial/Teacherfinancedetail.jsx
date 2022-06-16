import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { getdetail } from '../../../api/userApi'
import './Teacherfinancedetail.css'
import ClipLoader from "react-spinners/ClipLoader";
import { css } from "@emotion/react";
import PropagateLoader from "react-spinners/PropagateLoader";
export default function Teacherfinancedetail() {
    const [cardnumber,setcardnumber]=useState('')
    const [accnumber,setaccnumber]=useState('')
    const [bank,setbank]=useState('')
    const [message,setmessage]=useState('')
    const user=JSON.parse(localStorage.getItem('educationsite'))
    const [dataloading,setdataloading]=useState(false)
  const [loading,setloading]=useState(false)
  const [color, setColor] = useState("#525fe1");
  const [success,setSuccess]=useState(false)
  const [alldata,setalldata]=useState(null)
  console.log(user);
  const override = css`
        display: block;
        margin: 0 auto;
        border-color: white;
        font-weight:bold;
         border:4px solid white;
        `;
    useEffect(()=>{
        setdataloading(true)
        getdetail(`Teacher/TeachersAccount?teacher_id=${user.id}`).then(res=>{
            console.log(res.data)
            if(res.data.card_number){
               setalldata(res.data)
            }
            setdataloading(false)
            if(res.data.message){
                setmessage(res.data.message)
                setdataloading(false)

            }
        })
    },[])

    useEffect(()=>{
        if(alldata){
            setaccnumber(alldata.card_number)
            setaccnumber(alldata.account_number)
            setbank(alldata.destination_bank)
        }
    },[alldata])

    if (dataloading) return (
        <div className="teacherfinance__inner__loading">
            <PropagateLoader color={color} loading={dataloading} css={override} size={40} />
        </div>
      )
    const submithandler=(e)=>{
        setloading(true)
        e.preventDefault()
        let item={
            teacher_id:user.id,
            card_number:cardnumber,
            account_number:accnumber,
            destination_bank:bank
        }
        axios.post(`https://cafevira.com/api/api/v1/Teacher/TeachersAccount` ,item).then(res=>{
            console.log(res.data);
            setSuccess(true)
            setloading(false)
            setTimeout(() => {
                setSuccess(false)
            }, 3000);
        })
    }
  return (
    <div className='finance__detail'>
        <div className="finance__detail__top">
            حساب بانکی برای واریز
        </div>
        {message && <p className='finance__detail__message'>{message}</p>}
        <div className="finance__detail__inner">
            <form className='finance__detail__inner__form' onSubmit={submithandler}>
                <div className="finance__detail__inner__input">
                    <div>
                        <label>
                            شماره کارت
                            <p>(فقط عدد مجاز می باشد)</p>
                            </label>
                        <input type="text"
                        pattern="[0-9]*"
                        value={cardnumber} 
                        onChange={(e)=>setcardnumber((v) => (e.target.validity.valid ? e.target.value : ''))} />
                    </div>
                    <div>
                        <label>
                            شماره حساب
                            <p>(فقط عدد مجاز می باشد)</p>
                            </label>
                        <input type="text"
                      pattern="[0-9]*"
                      value={accnumber} 
                        onChange={(e)=>setaccnumber((v) => (e.target.validity.valid ? e.target.value : ''))} />
                    </div>
                </div>

                <div className="finance__detail__inner__input">
                    <div>
                        <label> 
                            بانک مقصد
                           </label>
                        <input
                        className='finance__detail__inner__input__margin'
                        value={bank}
                        type="text" onChange={(e)=>setbank(e.target.value)} />
                    </div>
                </div>
                {success &&  <p className='success'>ثبت اطلاعات شما با موفقیت انجام شد </p>}

                <div className="finance__detail__inner__form__btn">
                    <button>
                    {loading ? (
              <ClipLoader color={color} loading={loading} css={override} size={30} />
            ):(
              <p>
            ثبت
              </p>
            )}
                    </button>
                </div>
            </form>
        </div>
    </div>
  )
}
