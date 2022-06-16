import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import {MdPersonOutline} from 'react-icons/md'
import FramerMotion from '../../../FramerMotion'
import shape2 from './../../../Assets/images/Home/shape-02.png'
import { Link } from 'react-router-dom'
export default function CatItem({cat}) {
  return (
    <FramerMotion>
    <Link to={`/allcourse/${cat.Tittle}`} className='catitem'>
        <div className="catitem__top">
          <img src={cat.Icon} alt="" />
            <p className='catitem__top__text'>
              {cat.NumberOfLesson}
            </p>
        </div>
        <div className="catitem__content">
            <h5 className='catitem__content__title'>
              {cat.Tittle}
            </h5>
            <p className='catitem__content__text'>
              {cat.Description}
            </p>
        </div>
    </Link>
    </FramerMotion>
  )
}
