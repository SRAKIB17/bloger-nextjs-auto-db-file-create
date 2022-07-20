/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useId, useState } from 'react';
import Comment_textarea from '../Comment/Comment_textarea';
import { useRouter, withRouter } from 'next/router';
import styles from './PostMap.module.css'
import EditDeleteComponentMenu from './EditPostByUserAndAdmin/EditDeleteComponentMenu';
import maleAvatar from '../../public/maleAvatar.png'
import femaleAvatar from '../../public/femaleAvatar.png'
import { useQuery } from 'react-query'
import axios from 'axios';
import TextPost from './TextPost';
import VideoPost from './VideoPost'
const PostMap = ({ post, refetch }) => {
    const { category, image, postBodyCss, postBodyJs, postBody, postRefMode, post_id, post_title, short_description, sort, thumbnail, time, userID } = post
    const router = useRouter();
    const navigate = (path) => {
        router.push(path)
        router.prefetch(path)
        refetch()
    }
    const profileNavigate = (path) => {
        router.push(path)
        router.prefetch(path)
    }



    useEffect(() => {
        window.onresize = (e) => {
            const iframes = document.getElementsByTagName('iframe')
            for (const iframe of iframes) {
                try {
                    iframe.style.height = iframe.contentWindow.document.documentElement.scrollHeight + 'px';
                }
                catch {

                }
            }
        }
    }, []);


    const userInfo = useQuery(['public_profile', userID], () => axios.get(`/api/public_user_details/${userID}`,
        {
            headers: { access_token: sessionStorage.getItem('accessAutoG') }
        }));
    const user_details = userInfo?.data?.data?.user_details;
    return (
        <div>
            <div className=" card w-full bg-base-100 shadow-md md:rounded-md mt-2 rounded-none" id={'postMap' + post_id}>
                {/* -------------------------------------- for user configure --------------------------------------------- */}
                <div className='flex justify-between  border-b-[1px] m-3 items-center'>
                    <div className='flex gap-2 justify-start items-center '>
                        <div className='avatar p-2 mb-1'>
                            {/* --------------------------------------for profile avatar--------------------------------------- */}
                            <div
                                onClick={() => profileNavigate(`/profile/${userID}`)}
                                className="w-10 cursor-pointer h-10 rounded-full ring ring-inherit ring-offset-base-100 ring-offset-1"
                            >
                                {/* **********PROFILE AVATAR */}
                                {
                                    (user_details?.profile == '' || !user_details?.profile) ?
                                        <img
                                            src={user_details?.gender == 'Female' ? femaleAvatar.src : maleAvatar?.src}
                                            alt=''
                                            className='w-full bg-base-100'
                                        />
                                        :
                                        <img
                                            src={user_details?.profile}
                                            alt=''
                                        />
                                }
                            </div>
                        </div>
                        <div>
                            <h2
                                onClick={() => profileNavigate(`/profile/${userID}`)}
                                className="card-title cursor-pointer text-xl mb-1"
                            >
                                {
                                    user_details?.name || 'User'
                                }
                            </h2>
                            <h1 className='text-xs'>
                                {
                                    time
                                }
                                <b> | </b>
                                <button className='link-primary link-hover ' onClick={() => navigate(`?cat=${category}`)}>
                                    {
                                        category
                                    }
                                </button>
                            </h1>
                        </div>
                    </div>

                    {
                        <EditDeleteComponentMenu post={post} />
                    }
                </div>
                {/* --------------------------------------------------------------------------------------------------- */}
                <div className='card-body pb-2 pt-3 p-5' id={'postBodyCode' + post_id}>
                    <h2 className="card-title">{post_title}</h2>


                    {
                        postRefMode === 'video' &&
                        <>
                            <VideoPost postBody={postBody} post_id={post_id} short_description={short_description} key='453453454453' />
                        </>
                    }

                    {
                        postRefMode === 'text' &&
                        <>
                            <TextPost postBody={postBody} postBodyJs={postBodyJs} postBodyCss={postBodyCss} post_id={post_id} postRefMode={postRefMode} short_description={short_description} key='523252345345634534534' thumbnail={thumbnail} />
                        </>

                    }

                    <div className='relative bg-base-100'>
                        <Comment_textarea post_id={post_id} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PostMap;

// <h2
//                                 onClick={() => profileNavigate(`/story/${post_id}`)}
//                                 className="card-title text-xl mb-1 cursor-pointer"
//                             >
//                                 {post_title}
//                             </h2>
//                             {/* </h2> */}
//                             <h1 className='text-xs font-extralight'>
//                                 <button
//                                     className='link-primary link-hover '
//                                     onClick={() => profileNavigate(`/profile/${userID}`)}
//                                 >
//                                     {
//                                         user_details?.name || 'loading'
//                                     }
//                                 </button>
//                                 <b> | </b>
//                                 {
//                                     time
//                                 }
//                                 <b> | </b>
//                                 <button className='link-primary link-hover ' onClick={() => navigate(`? cat = ${category} `)}>
//                                     {
//                                         category
//                                     }
//                                 </button>
//                             </h1>