import React from 'react';
import { BsTypeH1 } from 'react-icons/bs';
import {AiOutlineClose} from 'react-icons/ai'
import './Modal.css'
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { css } from "@emotion/react";
import api from '../../../api/api';
import ClipLoader from "react-spinners/ClipLoader";


const override = css`
  display: block;
  margin: 0 auto;
  border-color: white;
  font-weight:bold;
  border:5px solid white;
`;
export default function Modal({setmodal}) {

    const [numberinput,setnumberinput]=useState('')
    const [number,setnumber]=useState('')
    const [hi,sethi]=useState(true)
    const [err,seterr]=useState('')
    const [err2,seterr2]=useState('')
    const [loading,setloading]=useState(false)
    const [loading2,setloading2]=useState(false)
    const [code,setcode]=useState('')
    const [success,setsucces]=useState(false)
    let [color, setColor] = useState("#ffffff");
  const numbersending=async(e)=>{
      e.preventDefault()
      setloading(true)
      try{
          const res=await api.post('https://cafevira.com/api/api/v1/sendSms',
          JSON.stringify({phone:numberinput}),
          {
            headers: { 'Content-Type': 'application/json' },
          })
          console.log(res);
          setnumber(res.data.phone)
          if(res.data.status==200){
              setnumberinput('')
           return sethi(false)
          }
          seterr(res.data.message)
          setloading(false)
          console.log(res);
      }catch(err){

      }
  }

  const codehandler=async(e)=>{
        e.preventDefault()
        setloading2(true)
        try{
        const res=await api.post('https://cafevira.com/api/api/v1/SmsActivity',
        JSON.stringify({code:code , phone:number}),
        {
          headers: { 'Content-Type': 'application/json' },
        })
        console.log(res);
        if(res.data.status==200){
        setsucces(true)
        setcode('')
         sethi(false)
         setTimeout(() => {
             setmodal(false)
         }, 3000);
         return setloading2(false)
        }
        seterr2(res.data.message)
        setloading2(false)
        console.log(res);
        }catch(err){

        }
  }
  
  return <div>
          <div className="modal" style={{zIndex:'999'}} onClick={()=>setmodal(false)}  >
          <div className="modal-content" onClick={(e)=>e.stopPropagation()}>
              <div className='modal__sign__container'>
                <p className='modal__sign'
                onClick={()=>setmodal(false)}
                >x</p>
              </div>
              {hi ?(
                <>
                <div className="modal__header">
                 دریافت کد فعال سازی اکانت
             </div>
             <p className='modal__header__para'>
                  برای دریافت کد فعال سازی شماره خود را وارد کرده و رود دکمه ارسال پیامک کلیک کنید
             </p>
             <p className={err ? 'errmsg':'offscreen'}>{err}</p>
             <form className='modal__form' onSubmit={numbersending} >
                 <input type="text"
                  placeholder='شماره موبایل'
                  value={numberinput}
                  onChange={(e)=>setnumberinput(e.target.value)}
                  />
                 <button className='modal__form__btn' disabled={!numberinput}>
                     {loading ? (
                    <ClipLoader color={color} loading={loading} css={override} size={40} />
                     ):(
                         <p>
                             ارسال پیامک
                         </p>
                     )}
                 </button>
             </form>
                
                
                </>
              ):(
                <>
                <p className='code__para'>
                    کد ارسال شده را وارد کنید
                </p>
                <p className={err2 ? 'errmsg':'offscreen'}>{err2}</p>
                {success &&  <p className='success'> فعال سازی اکانت شما با موفقیت انجام شد 
              <br />
              برای ادامه دادن لطفا وارد حساب کاربری خود شوید
              </p>}
                <form onSubmit={codehandler}>
                     <input className='code__input' type="text" placeholder='کد ارسال شده'
                     onChange={(e)=>setcode(e.target.value)}
                     value={code}
                     />
                     <button className='modal__form__btn'>
                     {loading2 ? (
                    <ClipLoader color={color} loading={loading2} css={override} size={40} />
                     ):(
                         <p>
                             تایید 
                         </p>
                     )}
                     </button>
                </form>
                </>

              )}
             
          </div>
      </div>
      
       


      
      
  </div>;
}
