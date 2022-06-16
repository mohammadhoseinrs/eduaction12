import React from 'react';
import { useState } from 'react';
import { Formik , Form } from 'formik';
import * as yup from 'yup' 
import Formikcontrol from './../../../validation/Formikcontrol';
import './Signupform.css'
import axios from 'axios';
import { css } from "@emotion/react";
import ClipLoader from "react-spinners/ClipLoader";
import Modal from '../modal/Modal';

const override = css`
  display: block;
  margin: 0 auto;
  border-color: white;
  font-weight:bold;
  border:5px solid white;
`;


export default function Signupform() {
    const [modal,setmodal]=useState(false)
    const [errmsg,setErrormsg]=useState('')
    const [errmsg2,setErrormsg2]=useState('')
    const [errmsg3,setErrormsg3]=useState('')
    let [color, setColor] = useState("#ffffff");
    const [loading,setloading]=useState(false)

    const [success,setSuccess]=useState(false)
    const initialValues={
      name:'',
      phone:'',
      email:'',
      password:'',
      role:''
    }
    const radioData=[
      {key:'کاربر',value:'user'},
      {key:'استاد' , value:'teacher'},
    ]
    const validationSchema=yup.object({
      name:yup.string().required('لطفا نام کاربری خود را وارد کنید').matches(/^[aA-zZ\s]+$/, "فقط حروف انگلیسی مورد قبول می باشد"),
      email:yup.string().email('ایمیل نامعتبر').required('لطفا ایمیل خود را وارد کنید'),
      password:yup.string().min(5 , 'رمز عبور حداقل ۵ حرف باید داشته باشد').required('لطفا رمزعبور خود را وارد کنید'),
      phone:yup.number().typeError('شماره تلفن نامعتبر').required('لطفا شماره تلفن خود را وارد کنید'),
      role:yup.string().required('لطفا یکی از گزینه ها را انتخاب کنید')
    })
    const onSubmit=async (values , {resetForm})=>{
      console.log(values);
      setloading(true)
      try {
        const response= await axios.post('https://cafevira.com/api/api/v1/register',
        JSON.stringify(values),
        {
          headers: { 'Content-Type': 'application/json' },
       }
        )
        setloading(false)
        if(response.data.Status==200){
          setSuccess(true)
          return setmodal(true)
        }else if(response.data.Status==='100'){
          setErrormsg(response.data.Message)
          setErrormsg2(response.data.Message1)
          setErrormsg3(response.data.Message1)
          setTimeout(() => {
            setErrormsg('')
            setErrormsg2('')
            setErrormsg3('')

          }, 5000);
        }
      } catch (err) {
        if (!err?.response) {
          setErrormsg('No Server Response');
      } else if (err.response?.status === 422) {
        setErrormsg('Username Taken');
      } else {
        setErrormsg('Registration Failed')
      }
      }
    }
  return (
      <>
       <div className="register__container">
           <div className="register__container__inside">
               <div className="register__container__inside__title">
                   ثبت نام
               </div>
               <p className={errmsg ? 'errmsg' : 'offscreen'}>{errmsg}</p>
               <p className={errmsg2 ? 'errmsg' : 'offscreen'}>{errmsg2}</p>
               <p className={errmsg3 ? 'errmsg' : 'offscreen'}>{errmsg3}</p>

              {success &&  <p className='success'>ثبت نام شما با موفقیت انجام شد 
              <br />
              برای ادامه دادن لطفا وارد حساب کاربری خود شوید
              </p>}
             <div className="register__container__inside__inside">

               <Formik
                initialValues={initialValues}
                onSubmit={onSubmit}
                validationSchema={validationSchema}
                >
                  {
          formik=>{
            
            return(
      <div className='formik-div'>  
      <Form action="" className="register-form">
          <Formikcontrol control='input' name='name'  placeholder='نام کاربری' type='text' autoComplete='off'  />
          <Formikcontrol control='input' name='phone' placeholder='شماره موبایل'  type='text' autoComplete='off' />
          <Formikcontrol control='input' name='email' type='text' placeholder='ایمیل' autoComplete='off'  />
          <Formikcontrol control='input' name='password' type='password' placeholder='رمز عبور'  autoComplete='off' />
          <Formikcontrol control='radio' name='role' label='نوع' options={radioData} />
          <button type='submit'
          disabled={!formik.isValid}
          >
            {loading ? (
              <ClipLoader color={color} loading={loading} css={override} size={40} />
            ):(
              <p>
            عضویت
              </p>
            )}
          </button> 
      </Form>
      </div>   
            )
              }
                }
              </Formik>
              <div className="register__agreemnet">
                  <input type='checkbox' />
                  <label htmlFor="">
                      با قوانین و شرایط موافقم
                  </label>
              </div>
             </div>
           </div>
         </div>
         {modal && 
         <div className="signup__modal">
          <Modal modal={modal} setmodal={setmodal} />
         </div>
         }
    </>     
  );
}
