/* eslint-disable react/no-unescaped-entities */
import axios from 'axios';
import React, { useContext, useState } from 'react';
import { UserFullInfoProvider } from '../../../pages/_app';
import usePrivatePageCheckUser from '../../hooks/checkUser/privatePageCheckUser';
import { useRouter } from 'next/router'

const DeletePost = ({ props: { deletePost, setDeletePost } }) => {
    console.log(deletePost)
    const { user, user_details, isLoading, isAdmin } = useContext(UserFullInfoProvider);
    const asPath = useRouter()?.asPath
    usePrivatePageCheckUser(asPath)
    const [errMsg, setErrMsg] = useState('')

    const [deleteLoading, setLoading] = useState(true)
    const deletePostHandler = async (id) => {
        const { data } = await axios.delete(`/api/post/delete-post?email=${user_details?.email}&post_id=${deletePost}`,
            {
                headers: {
                    access_token: sessionStorage.getItem('accessAutoG'),
                    token: localStorage.getItem('token')
                }
            });
        if (data?.message === 'success') {
            setErrMsg(<p className='text-green-600'>Success</p>)
            if (data?.result?.acknowledged) {
                location.reload()
                setDeletePost(null)
            }
        }
        else if (data?.message === 'error') {
            setErrMsg(<p className='text-red-600'>{data?.error}</p>)
        }

    }
    return (
        <div className='h-60 w-full z-[30] absolute top-0 left-0 rounded-lg bg-base-300'>
            <div className='relative flex flex-col items-center justify-between mx-auto mt-20'>
              
                <h1 className='text-2xl text-warning'> Are You Sure?</h1>
                <p className='text-red-600 text-center'>
                    {
                        errMsg
                    }
                </p>
                <div className='flex gap-4 mt-9'>
                    <button className='btn btn-sm bg-[#ff0000] text-white' onClick={deletePostHandler}>
                        Delete
                    </button>
                    <button className='btn btn-sm bg-[#00ff00] text-white' onClick={() => setDeletePost(null)}>
                        Cancel
                    </button>
                </div>
            </div>
        </div >
    );
};

export default DeletePost;