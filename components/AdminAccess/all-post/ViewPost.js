import axios from 'axios';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import WarningProfile from '../../hooks/WarningProfile';
import DeletePost from '../../Post-NewsFeed/DeletePost/DeletePost';
import EditPostFormTextArea from '../../Post-NewsFeed/EditPostByUserAndAdmin/EditPostFormTextArea';
import timeSince from '../../Post-NewsFeed/TimeSince';
import { Announcement, ArrowsRight, Delete, Line, MessageDotDotDot, Writing } from '../../ReactRSIcon';

const ViewPost = ({ post, isLoadingAbout, refetch }) => {
    const { _id, category, image, postBodyCss, postBodyJs, postBody, postRefMode, post_id, post_title, short_description, thumbnail, time, userID } = post
    const getTimeSince = timeSince(time)
    const userInfo = useQuery(['public_profile', userID], () => axios.get(`/api/public_user_details/${userID}`,
        {
            headers: { access_token: sessionStorage.getItem('accessAutoG') }
        }));
    const user_details = userInfo?.data?.data?.user_details;

    const router = useRouter()
    const navigate = (path) => {
        router.push(path)
        router.prefetch(path)
    }
    const [showShortDescription, setShortDescription] = useState(null)
    const showShortDetailsHandle = () => {
        if (showShortDescription) {
            setShortDescription(null)
        }
        else {
            setShortDescription(short_description?.slice(0, 200) + '. . . . . . . . .')
        }
    }
    const [deleteUserLoading, setDeleteUserLoading] = useState(null)
    const [deletePost, setDeletePost] = useState(null);
    const [editPost, setEditPost] = useState(null);
    return (
        <div className='relative'>
            <div>
                <div className='p-2 shadow-md border-b-2 border-gray-500'>
                    <div>
                        <div className='flex justify-between items-center'>
                            <h1 className='text-xl font-bold'>
                                {
                                    post_title
                                }
                            </h1>
                            <div className='flex gap-[2px]'>
                                {/* Messaging */}
                                <button className='btn btn-success btn-outline btn-xs' onClick={() => navigate('/inbox/support/' + userID)}>
                                    <MessageDotDotDot />
                                </button>
                                {/* INFORMATION */}
                                <button
                                    className={(editPost ? ' text-white ' : 'btn-outline') + ' btn btn-info  btn-xs'}
                                    onClick={() => setEditPost(post_id)}
                                >
                                    <Writing />
                                </button>
                                {/* Delete User */}
                                {
                                    deleteUserLoading ?
                                        <button className='btn btn-warning btn-outline btn-xs'>
                                            <Delete />
                                            <p className='absolute animate-spin border-b-2 border-r-2 w-4 h-4 rounded-[50%]'>
                                            </p>
                                        </button>
                                        :
                                        <button className='btn btn-warning btn-outline btn-xs' onClick={() => setDeletePost({ post_id, userID, post_title })}>
                                            <Delete />
                                        </button>
                                }
                            </div>
                        </div>

                        <div className='flex mr-[2px] items-center flex-wrap text-[11px]'>
                            <div className='text-[10px] text-gray-500'>
                                {
                                    getTimeSince
                                }
                            </div>
                            <Line size='18' />
                            <div>
                                <h2
                                    onClick={() => navigate(`/profile/${userID}`)}
                                    className="flex items-center cursor-pointer mb-[2px] gap-[1px] link-primary link-hover text-[10px]"
                                >
                                    {
                                        user_details?.name || 'User'
                                    }
                                    <WarningProfile user_details={user_details} size='10' />
                                </h2>
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
                        </div>
                    </div>
                    <div>
                        <button className='btn-xs rounded-md btn-secondary btn-outline font-extralight' onClick={showShortDetailsHandle}>
                            {
                                (showShortDescription ? "Hide " : "Show ") + "Description"
                            }
                        </button>
                    </div>
                    <div className='text-sm text-justify'>
                        {
                            showShortDescription &&
                            <>
                                {showShortDescription}
                                <button
                                    onClick={() => navigate('/story/' + post_id)}
                                    className='btn-xs rounded-md btn-primary btn-outline font-extralight'>
                                    view post
                                </button>
                            </>
                        }

                    </div>
                </div>

                {/* ***********COMPONENT*************** */}
                {
                    (editPost) &&
                    <div className='min-h-[500px]'>
                        <EditPostFormTextArea post={post} setEditPost={setEditPost} refetch={refetch} />
                    </div>
                }
                {
                    (deletePost) &&
                    <div className=''>
                        <DeletePost props={{ deletePost, setDeletePost, refetch }} />
                    </div>
                }
            </div>
        </div>
    );
};


export default ViewPost;