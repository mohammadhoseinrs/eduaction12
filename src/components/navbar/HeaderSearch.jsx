import React, { useEffect } from 'react'
import './HeaderSearch.css'
import {GrFormClose , GrSearch} from 'react-icons/gr'
import FramerMotion from '../../FramerMotion'
export default function HeaderSearch({openSearch , setopenSearch}) {
    useEffect(() => {
        if (openSearch) {
          document.body.style.overflow = 'hidden'
        }
        return ()=>{
            document.body.style.overflow = 'unset'
        }
      }, [openSearch])
  return (
    <div className='headerserach'>
        <div className="headerserach__closebtn" onClick={()=>setopenSearch(false)}>
            <GrFormClose />
        </div>
        <div className="headerserach__search">
            <form action="" className="headerserach__search__form">
                <input type="text" className="headerserach__search__input" />
                <button className="headerserach__search__btn">
                    <GrSearch size={25} />
                </button>
            </form>
        </div>
    </div>
  )
}
