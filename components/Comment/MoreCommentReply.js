/* eslint-disable @next/next/no-img-element */
import axios from 'axios';
import React, { useContext, useState } from 'react';
import { useQuery } from 'react-query';
import maleAvatar from '../../public/maleAvatar.png'
import femaleAvatar from '../../public/femaleAvatar.png'
import { UserFullInfoProvider } from '../../pages/_app';


const MoreCommentReply = ({ replyComment, isLoading }) => {
    const { post_id, userID, time, sort, reply, comment_id } = replyComment;
    const { user, user_details, isAdmin } = useContext(UserFullInfoProvider);

    const userInfo = useQuery(['public_profile', userID], () => axios.get(`/api/public_user_details/${userID}`,
        {
            headers: { access_token: sessionStorage.getItem('accessAutoG') }
        }));
    const reply_user_details = userInfo?.data?.data?.user_details;

    const [showFullReply, setFullReply] = useState(reply?.length >= 100 ? reply?.slice(0, 100) : reply)
    const handleShowFullReply = () => {
        if (showFullReply?.length === 100) {
            setFullReply(reply)
        }
        else {
            setFullReply(reply?.slice(0, 100))
        }
    }



    // for delete reply 
    const [deleteLoading, setDeleteLoading] = useState(false)
    const deleteCommentHandle = async (id) => {
        setDeleteLoading(true)
        const { data } = await axios.delete(`/api/post/comment-delete?email=${user_details?.email}&comment_id=${id}`, comment,
            {
                headers: {
                    access_token: sessionStorage.getItem('accessAutoG'),
                    token: localStorage.getItem('token')
                }
            }
        );
        if (data?.message === 'success') {
            // setErrMsg(<p className='text-green-600'>Success</p>)
            if (data?.result?.acknowledged) {
                // location.reload()
            }
        }
        else if (data?.message === 'error') {
            // setErrMsg(<p className='text-red-600'>{data?.error}</p>)
            alert('something is wrong')
        }
        setDeleteLoading(false)
    }

    return (
        <div>
            <div>
                <div className='pt-2 flex items-center border-t gap-1'>
                    <div className="avatar ">
                        <div className="w-5 rounded-full">
                            {
                                reply_user_details?.profile == '' ?
                                    <img
                                        src={reply_user_details?.gender == 'Female' ? femaleAvatar.src : maleAvatar?.src}
                                        alt=''
                                        className='w-full bg-base-100'
                                    />
                                    :
                                    <img
                                        src={reply_user_details?.profile}
                                        alt=''
                                    />
                            }
                        </div>
                    </div>
                    <div className='text-[14px] font-bold'>
                        <h6 className='m-0'>{reply_user_details?.name}</h6>
                    </div>

                </div>
                <div className='rounded-lg rounded-bl-3xl shadow-inner bg-base-200 pt-2 px-3 pb-2 m-1 mr-2'>
                    {/* -----------------------=======================-for comment  -------------------------------*/}
                    <div className=' overflow-auto w-full'>

                        <div className='w-full p-1'>
                            {
                                (isLoading ?
                                    <p className='animate-spin border-b-2 border-r-2 w-4 h-4 rounded-[50%]'>
                                    </p>
                                    :
                                    (<div className='break-words overflow-hidden text-sm'>
                                        {showFullReply}
                                    </div>)
                                )
                            }


                            {/* <div className=' text-[15px]' dangerouslySetInnerHTML={{ __html: showFullReply }}></div> */}

                        </div>
                        {
                            reply?.length >= 100 &&
                            <button
                                onClick={handleShowFullReply}
                                className='text-xs link-hover link-primary'
                            >
                                show
                                {
                                    showFullReply?.length === 100 ? ' more' : ' less'
                                }
                            </button>
                        }
                    </div>

                    {
                        ((userID == user_details?.userID && user?.user) || (isAdmin?.admin || user_details?.userID === post_id?.split('-')?.[1])) &&
                        <div>

                            <b className='text-xs p-1'>|</b>
                            {deleteLoading ||
                                < button
                                    className='link link-hover link-primary text-xs'
                                    onClick={() => deleteCommentHandle(comment_id)}
                                >
                                    delete
                                </button>
                            }
                            {
                                deleteLoading &&
                                < button
                                    className='link link-hover link-primary text-xs'
                                >
                                    <p className='animate-spin border-b-2 border-r-2 w-4 h-4 rounded-[50%]'>
                                    </p>

                                </button>
                            }
                        </div>
                    }
                </div>
            </div>
        </div>
    );
};

export default MoreCommentReply;