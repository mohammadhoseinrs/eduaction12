import React, { useEffect, useState } from 'react'
import './SigninTeacher.css'
import {loginPending,loginSuccess,loginFailed} from './../../../features/loginSlice'
import { useDispatch , useSelector } from 'react-redux'
import { css } from "@emotion/react";
import ClipLoader from "react-spinners/ClipLoader";
import { getTeacherCourse, getuser, teacherLogin, userLogin } from '../../../api/userApi';
import { useNavigate } from 'react-router-dom';
const override = css`
  display: block;
  margin: 0 auto;
  border-color: white;
  font-weight:bold;
  border:5px solid white;
`;

export default function Signin({settogglesignin}) {
    const Navigate=useNavigate()
    const dispatch=useDispatch()
    const {isLoading,isAuth,error}=useSelector(state=>state.login)
    const [username,setUsername]=useState('')
    const [password,setPassword]=useState('')
    const [errmsg,setErrmsg]=useState(error)
    let [color, setColor] = useState("#ffffff");
    useEffect(()=>{
        setErrmsg(error)
    },[error])
     
    const handleonchange=(e)=>{
        const {name,value}=e.target

        switch(name){
            case 'username':
                setUsername(value)
                break;
            case 'password':
                setPassword(value)
                break;
                
                default:
                break;
        }
    }
    
    const handleOnSubmit=async(e)=>{
        e.preventDefault()
        if(!username , !password){
            return alert('error')
        }
        dispatch(loginPending())
        try{
            const isAuth = await teacherLogin({ name:username, password });
            console.log(isAuth);
            if(isAuth.data.status==='100'){
                return dispatch(loginFailed(isAuth.data.message))
            }

            getTeacherCourse(isAuth.data.id)
            dispatch(loginSuccess())
            Navigate('/teacherpanel/detail')
        }catch(error){
            dispatch(loginFailed(error.message))
            setErrmsg(error)
        }

    }
  return (
    <div className='signin'>
        <div className="register__container__inside__title">
                 ورود به عنوان استاد
        </div>
        {errmsg && <p className='signin__error'>{errmsg}</p>}
        <form className='signin__form' onSubmit={handleOnSubmit}>
            <div className="signin__form__1">
                <input type="text" name="username"
                onChange={handleonchange}
                value={username}
                 id="sigin__user"
                 placeholder='نام کاربری'
                 required
                 autoComplete='username'
                  />
            </div>
            <div className="signin__form__1">
                <input type="password" name="password"
                onChange={handleonchange}
                value={password}
                 id="sigin__pass"
                  placeholder='رمز عبور'
                  required
                  autoComplete='current-password'
                  />
            </div>
            <button className="signin__form__btn" >
                {isLoading ? (
                 <ClipLoader color={color} loading={isLoading} css={override} size={40} />
                ):(
                 <p>ورود</p>
                )}
            </button>
            <div className="signin__form__remeber">
            رمز عبور را فراموش کرده اید؟
            </div>
            <div className="teacher__signin">
            <p onClick={()=>settogglesignin(true)}>ورود به عنوان کاربر</p>
        </div>
        </form>
    </div>
  )
}
