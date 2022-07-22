/* eslint-disable @next/next/no-img-element */
import axios from 'axios';
import React, { useState } from 'react';
import { useQuery } from 'react-query';

const MoreCommentReply = ({ replyComment }) => {
    const { post_id, userID, time, sort, reply, comment_id } = replyComment;

    const userInfo = useQuery(['public_profile', userID], () => axios.get(`/api/public_user_details/${userID}`,
        {
            headers: { access_token: sessionStorage.getItem('accessAutoG') }
        }));
    const user_details = userInfo?.data?.data?.user_details;

    const [showFullReply, setFullReply] = useState(reply?.length >= 100 ? reply?.slice(0, 100) : reply)
    const handleShowFullReply = () => {
        if (showFullReply?.length === 100) {
            setFullReply(reply)
        }
        else {
            setFullReply(reply?.slice(0, 100))
        }
    }
    return (
        <div>
            <div>
                <div className='pt-2 flex items-center border-t gap-1'>
                    <div className="avatar ">
                        <div className="w-6 rounded-full">
                            {
                                user_details?.profile == '' ?
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
                    <div className='text-[14px] font-bold'>
                        <h6 className='m-0'>{user_details?.name}</h6>
                    </div>

                </div>
                <div className='rounded-lg rounded-bl-3xl shadow-inner bg-base-200 pt-2 px-3 pb-2 m-1 mr-2'>
                    {/* -----------------------=======================-for comment  -------------------------------*/}
                    <div className=' overflow-auto w-full'>

                        <div className='w-full p-1'>
                            <div className='break-words overflow-hidden text-sm'>
                                {showFullReply}
                            </div>
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
                </div>
            </div>
        </div>
    );
};

export default MoreCommentReply;