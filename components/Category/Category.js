import axios from 'axios';
import React, { useState } from 'react';
import category from './Category.module.css'
import { useRouter } from 'next/router';
import styles from '../profile/NewPost/NewPost.module.css'


const Category = () => {

    function closeCategoryModal() {
        document.getElementById("OpenCategoryModal").style.width = "0";
    }
    const badge = [' btn-primary', ' btn-secondary', ' btn-accent', ' btn-info', ' btn-warning', ' btn-accent', ' btn-success'];

    const showTagsHandleMouseEnter = (id, event) => {
        try {
            if (event.type === 'mouseenter') {
                document.getElementById(id).style.height = '100%'
            }
            else if (event.type === 'mouseleave') {
                document.getElementById(id).style.height = '0px'
            }
        }
        catch {

        }
    }
    const router = useRouter()
    const navigate = (url) => {
        router.push(url)
        router.prefetch(url)
    }
    return (
        <div>

            <div id="OpenCategoryModal" className={styles.NewPostNav + ' bg-base-100 '}>

                <a href="#" className={styles.closebtn} onClick={closeCategoryModal}>&times;</a>
                <div className='w-full h-full overflow-auto p-4 border-t-2'>
                    <ul className="menu menu-vertical p-0 flex-col gap-1">
                        {
                            [...Array(6).keys()].map(i =>

                                <div key={i} onMouseLeave={(event) => showTagsHandleMouseEnter('html-' + i, event)} onMouseEnter={(event) => showTagsHandleMouseEnter('html-' + i, event)}>
                                    <li className='btn btn-outline btn-primary text-left rounded-md'>
                                        Html
                                    </li>

                                    <div className={category.showTags} id={'html-' + i} >
                                        <div onClick={() => navigate('/story?cat=html')} className={"m-2 btn btn-xs btn-outline cursor-pointer " + badge[Math.floor(Math.random() * badge.length)]}>
                                            Html
                                        </div>
                                        <div className='flex flex-wrap gap-2 ml-6 p-2'>
                                            {
                                                [...Array(9).keys()].map(a =>
                                                    <div onClick={() => navigate('/story?cat=html')} key={a} className={"btn btn-xs btn-outline cursor-pointer " + badge[Math.floor(Math.random() * badge.length)]}>Html css</div>
                                                )
                                            }
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                    </ul>
                </div>
            </div>

        </div>
    );
};

export default Category;