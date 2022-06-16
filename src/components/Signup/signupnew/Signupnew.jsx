import React, { useEffect, useState } from 'react'
import './Signupnew.css'

const USER_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
const EMAIL_REGEX=/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
const PHONE_REGEX=/^(\\+98|0)?9\\d{9}$/;

export default function Signupnew() {
    const [user, setUser] = useState('');
    const [validName, setValidName] = useState(false);
    const [userFocus, setUserFocus] = useState(false);

    const [email, setEmail] = useState('');
    const [validEmail, setValidEmail] = useState(false);
    const [emailFocus, setEmailFocus] = useState(false);

    const [phoneNumber,setPhoneNumber] = useState('');
    const [validPhoneNumber, setValidPhoneNumber] = useState(false);
    const [phoneNumberFocus, setPhoneNumberFocus] = useState(false);


    const [pwd, setPwd] = useState('');
    const [validPwd, setValidPwd] = useState(false);
    const [pwdFocus, setPwdFocus] = useState(false);

    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        setValidName(USER_REGEX.test(user));
    }, [user])

    useEffect(() => {
        setValidEmail(EMAIL_REGEX.test(pwd));
    }, [email])
    useEffect(() => {
        setValidPhoneNumber(PHONE_REGEX.test(pwd));
    }, [phoneNumber])
    useEffect(() => {
        setValidPwd(PWD_REGEX.test(pwd));
    }, [pwd])

    useEffect(() => {
        setErrMsg('');
    }, [user, pwd])

  return (
    <section className='signupnew'>
        <div className="signupnew__title">
            ثبت نام
        </div>
        <p className={errMsg ? "errmsg" : "offscreen"}>{errMsg}</p>
        <form className='signupnew__form' >
            <input type="text"
             placeholder='نام کاربری'
             autoComplete="off"
             onChange={(e) => setUser(e.target.value)}
             value={user}
             onFocus={() => setUserFocus(true)}
             onBlur={() => setUserFocus(false)}
             />
             <p id="uidnote" className={userFocus && user && !validName ? "instructions" : "offscreen"}>
                            4 to 24 characters.<br />
                            Must begin with a letter.<br />
                            Letters, numbers, underscores, hyphens allowed.
            </p>
            <input type="text" placeholder='شماره موبایل' />
            <input type="text" placeholder='ایمیل' />
            <input type="password" placeholder='رمز عبور'  />
            <button>عضویت</button>
        </form>
    </section>
  )
}
