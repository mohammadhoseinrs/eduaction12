import React from 'react'
import './Blogdetailmainleft.css'
import {BiSearch} from 'react-icons/bi'
import gallery1 from './../../../Assets/images/blog/gallery-01.jpeg'

export default function Blogdetailmainleft() {
  return (
    <section className='bdml'>
        <section className='bdml__container'>

            <div className="bdml__search">
                <div className="bdml__search__inner">
                    <h5>جست و جو</h5>
                    <form className="bdml__search__inner__content">
                        <input type="text" placeholder='جست و جو...' />
                        <button>
                            <BiSearch />
                        </button>
                    </form>
                </div>
            </div>


            <div className="bdml__cat">
                <h5>دسته بندی</h5>
                <ul className="bdml__cat__content">
                    <li>
                        <div>
                            <p> فرانت اند</p>
                            <span>(4)</span>
                        </div>
                    </li>

                    <li>
                        <div>
                            <p> فرانت اند</p>
                            <span>(4)</span>
                        </div>
                    </li>

                    <li>
                        <div>
                            <p> فرانت اند</p>
                            <span>(4)</span>
                        </div>
                    </li>

                    <li>
                        <div>
                            <p> فرانت اند</p>
                            <span>(4)</span>
                        </div>
                    </li>

                    <li>
                        <div>
                            <p> فرانت اند</p>
                            <span>(4)</span>
                        </div>
                    </li>

                    <li>
                        <div>
                            <p> فرانت اند</p>
                            <span>(4)</span>
                        </div>
                    </li>
                    
                </ul>
            </div>


            <div className="bdml__lastblog">
                <h5>آخرین مقالات</h5>
                <div className="bdml__lastblog__content">
                    <div className="bdml__lastblog__content__post">
                        <div className="bdml__lastblog__content__post__right">
                            <img src={gallery1} alt="" />
                        </div>
                        <div className="bdml__lastblog__content__post__left">
                            <p>1401/02/20</p>
                            <h6>چگونه پایتون را آپدیت کنیم؟</h6>
                        </div>
                    </div>

                    <div className="bdml__lastblog__content__post">
                        <div className="bdml__lastblog__content__post__right">
                            <img src={gallery1} alt="" />
                        </div>
                        <div className="bdml__lastblog__content__post__left">
                            <p>1401/02/20</p>
                            <h6>چگونه پایتون را آپدیت کنیم؟</h6>
                        </div>
                    </div>

                    <div className="bdml__lastblog__content__post">
                        <div className="bdml__lastblog__content__post__right">
                            <img src={gallery1} alt="" />
                        </div>
                        <div className="bdml__lastblog__content__post__left">
                            <p>1401/02/20</p>
                            <h6>چگونه پایتون را آپدیت کنیم؟</h6>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bdml__fav__cat">
                <h5>محبوب ترین تگ ها </h5>
                <div className="bdml__fav__cat__inner">
                    <p>فرانت</p>
                    <p>طراحی</p>
                    <p>بک</p>
                    <p>فرانت</p>
                    <p>فرانت</p>
                    <p>فرانت</p>
                    <p>فرانت</p>
                </div>
            </div>
        </section>
    </section>
  )
}
