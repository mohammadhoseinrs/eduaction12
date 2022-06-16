import React from 'react'
import './Finance.css'
import { NavLink ,Outlet } from 'react-router-dom';
import {MdOutlineAttachMoney} from 'react-icons/md'
import {RiBankCard2Fill} from 'react-icons/ri'
export default function Finance() {
  return (
    <div className='finance'>
        <div className="finnace__top">
            امورمالی
        </div>
        <div className="finance__header">
            <NavLink
            to='detail'>
                <MdOutlineAttachMoney />
                میزان فروش
             </NavLink>
             <NavLink
            to='account'>
                <RiBankCard2Fill />
                حساب بانکی
             </NavLink>
             <NavLink
             className={(Link)=>Link.isActive ?'.active' :''}
            to='/'>
                 بازگشت به سایت
             </NavLink>
        </div>

        <div className='finance__inner'>
            <Outlet />
        </div>

    </div>
  )
}
