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
import { Announcement, ArrowsRight, Line, WarningTriangle } from '../ReactRSIcon';
import AdsStory from '../Ads/AdsStory';
import timeSince from './TimeSince';
const PostMap = ({ post, refetch }) => {
    const { _id, category, image, postBodyCss, postBodyJs, postBody, postRefMode, post_id, post_title, short_description, thumbnail, time, userID } = post

    const [showCommentState, setShowComment] = useState(null);


    const getTimeSince = timeSince(time)

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
                                {
                                    user_details?.warning &&
                                    <div className="ml-[1px]">
                                        <WarningTriangle size="10" color="red" />
                                    </div>
                                }
                                {
                                    post?.postBy === 'admin' &&
                                    <Announcement size='16' className="badge h-4 text-white pl-2 pr-2 badge-secondary text-[10px] font-extralight" />
                                }

                            </h2>
                            <h1 className='flex mr-[2px] items-center flex-wrap text-[11px]'>
                                <div className='text-[10px] text-gray-500'>
                                    {
                                        getTimeSince
                                    }
                                </div>
                                <Line size='18' />
                                <div className='flex items-center'>
                                    <button className='link-primary link-hover ' onClick={() => navigate(`?cat=${category}`)}>
                                        {
                                            category
                                        }
                                    </button>
                                    {/* ***************FOR TAG SERIAL************ */}
                                    <ArrowsRight size='17' className='font-extrabold' />
                                    <div className='flex flex-wrap'>
                                        {
                                            (typeof post?.tags?.split === 'function') &&

                                            post?.tags?.split(',')?.map((tag, index) =>
                                                <>
                                                    {
                                                        index > 0 && <Line />
                                                    }
                                                    <button key={index + tag + category} className='link-primary link-hover ' onClick={() => navigate(`?cat=${category}&tag=${tag}`)}>
                                                        {
                                                            tag
                                                        }
                                                    </button>
                                                </>
                                            )
                                        }
                                    </div>
                                </div>
                            </h1>
                        </div>
                    </div>

                    {
                        <EditDeleteComponentMenu post={post} refetch={refetch} />
                    }
                </div>
                {/* --------------------------------------------------------------------------------------------------- */}
                <div className='card-body pb-2 pt-3 p-5' id={'postBodyCode' + post_id}>
                    <h2 className="card-title">{post_title}</h2>


                    {
                        postRefMode === 'video' &&
                        <>
                            <VideoPost
                                setShowComment={setShowComment}
                                showCommentState={showCommentState}
                                postBody={postBody} post_id={post_id}
                                short_description={short_description}
                                key={post_id} />
                        </>
                    }

                    {
                        postRefMode === 'text' &&
                        <>
                            <TextPost
                                postBody={postBody}
                                postBodyJs={postBodyJs}
                                postBodyCss={postBodyCss}
                                post_id={post_id}
                                postRefMode={postRefMode}
                                short_description={short_description}
                                key={post_id}
                                setShowComment={setShowComment}
                                showCommentState={showCommentState}
                                thumbnail={thumbnail}
                            />
                        </>

                    }

                    <div className='relative bg-base-100'>
                        <AdsStory />
                        <Comment_textarea post={post} refetch={refetch} setShowComment={setShowComment} showCommentState={showCommentState} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PostMap;

