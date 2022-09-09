import axios from 'axios';
import React from 'react';
import { useQuery } from 'react-query';
import LoadingSpin from '../../LoadingSpin';
import Right_arrow from '../Settings/SvgComponent/Right_arrow';
import styles from './header.module.css'

const Category = () => {
    const { data, refetch, isLoading } = useQuery(['categoryAll'], () => axios.get(`/api/post/category`,
        {
            headers: { access_token: sessionStorage.getItem('accessAutoG') }
        }
    ))
    const badge = [' btn-primary', ' btn-secondary', ' btn-accent', ' btn-info', ' btn-warning', ' btn-accent', ' btn-success'];

    const showTagsHandleMouseEnter = (id, event) => {
        try {
            if (event.type === 'mouseenter') {
                document.getElementById('category' + id).style.height = '100%'
            }
            else if (event.type === 'mouseleave') {
                document.getElementById('category' + id).style.height = '0px'
            }
        }
        catch {

        }
    }
    return (
        <>
            <ul className="menu  flex-col gap-1 bg-base-100 p-4">

                {
                    isLoading ?
                        <div className='bg-base-100'>
                            <LoadingSpin />
                        </div>
                        :
                        data?.data?.map((i, index) =>

                            <div key={i} >
                                <div className="collapse collapse-arrow bg-base-100  rounded-sm">
                                    <input
                                        type="checkbox"
                                        className='peer' />
                                    <div
                                        className="collapse-title bg-primary text-primary-content peer-checked:bg-base-100 peer-checked:text-base-content"
                                    >
                                        {i?.category}
                                    </div>
                                    <div
                                        className="collapse-content bg-primary text-primary-content  peer-checked:bg-base-100 peer-checked:text-base-content"
                                    >
                                        <ul
                                            className="menu bg-base-100 w-full"
                                        >
                                            <li className='flex flex-wrap gap-2 ml-6 p-2'>
                                                {
                                                    i?.tags?.map(tag =>
                                                        <a
                                                            onClick={() => navigate(`/story?cat=${i?.category}&tag=${tag}`)}
                                                            key={tag}
                                                            className={"btn btn-xs btn-outline cursor-pointer " + badge[Math.floor(Math.random() * badge.length)]}
                                                        >
                                                            {tag}
                                                        </a>
                                                    )
                                                }
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                            </div>
                        )
                }
            </ul>
        </>
    );
};

export default Category;