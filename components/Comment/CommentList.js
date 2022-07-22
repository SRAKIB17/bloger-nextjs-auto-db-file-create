/* eslint-disable @next/next/no-img-element */
import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios'
import MoreCommentReply from './MoreCommentReply';
import { useQuery } from 'react-query';
import { UserFullInfoProvider } from '../../pages/_app';
import maleAvatar from '../../public/maleAvatar.png'
import femaleAvatar from '../../public/femaleAvatar.png'


const CommentList = ({ comment: commentBody, replySetHandle }) => {
    const { post_id, userID, comment, time, comment_id } = commentBody;
    const userInfo = useQuery(['public_profile', userID], () => axios.get(`/api/public_user_details/${userID}`,
        {
            headers: { access_token: sessionStorage.getItem('accessAutoG') }
        }));
    const comment_user_details = userInfo?.data?.data?.user_details;

    // GET REPLY 
    const { user, user_details, isAdmin } = useContext(UserFullInfoProvider);
    const { data, refetch, isLoading } = useQuery(['ReplyList', comment_id, user_details], () => axios.get(`/api/post/comments-reply?comment_id=${comment_id}&email=${user_details?.email}`,
        {
            headers: {
                access_token: sessionStorage.getItem('accessAutoG'),
                token: localStorage.getItem('token')
            }
        }
    ));

    const repliesBody = data?.data?.result || []
    useEffect(() => {
        window.onclick = () => {
            refetch()
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])


    const [moreComment, setMoreComment] = useState(true);



    const [showReply, setShowReply] = useState(false);

    const [showFullComment, setFullComment] = useState(comment?.length >= 100 ? comment?.slice(0, 100) : comment)
    const handleShowFullComment = () => {
        if (showFullComment?.length === 100) {
            setFullComment(comment)
        }
        else {
            setFullComment(comment?.slice(0, 100))
        }
    }
    const replyComment = (id, comment_id, name) => {
        try {
            replySetHandle({ name: name, comment_id: comment_id }, id);
            console.log(post_id)
            document.getElementById('commentTextArea' + id).focus()
        }
        catch {

        }

    }


    // FOR COMMENT DELETE BY ADMIN POST USER AND USER WHO COMMENT THIS 
    // comment-delete

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

    if (isLoading) {
        return
    }
    return (
        <div>
            <div className='border-t' id={post_id}>
                {/* ------------------------------------------for profile picture  ----------------------------*/}
                <div className='mt-2 flex items-center gap-1'>
                    <div className="avatar ">
                        <div className="w-5 rounded-full">
                            {
                                comment_user_details?.profile == '' ?
                                    <img
                                        src={comment_user_details?.gender == 'Female' ? femaleAvatar.src : maleAvatar?.src}
                                        alt=''
                                        className='w-full bg-base-100'
                                    />
                                    :
                                    <img
                                        src={comment_user_details?.profile}
                                        alt=''
                                    />
                            }
                        </div>
                    </div>
                    <div className='text-[14px] font-bold'>
                        <h6 className='m-0'>{comment_user_details?.name}</h6>
                    </div>

                </div>
                <div className='rounded-lg rounded-bl-3xl shadow-inner bg-base-200 pt-2 px-3 pb-2 m-1 mr-2'>
                    {/* -----------------------=======================-for comment  -------------------------------*/}
                    <div className=' overflow-auto w-full'>

                        <div className='w-full'>
                            {/* <div className='break-words text-[15px]' dangerouslySetInnerHTML={{ __html: showFullComment }}></div> */}
                            <div className='break-words overflow-hidden text-sm'>
                                {showFullComment}
                            </div>
                            {
                                comment?.length >= 100 && <button
                                    onClick={handleShowFullComment}
                                    className='text-xs link-hover link-primary'>
                                    show
                                    {
                                        showFullComment?.length === 100 ? ' more' : ' less'
                                    }
                                </button>
                            }
                        </div>

                    </div>

                </div>
                {/*--------------- for reply count and handle show more  reply  -------------------*/}
                <div className='flex items-center'>
                    {
                        repliesBody?.length > 0 &&
                        <div>

                            < button
                                className='link ml-4 link-hover link-primary text-xs'
                                onClick={() => setShowReply(!showReply)}
                            >
                                {repliesBody?.length + ' '}  Reply
                            </button>

                            <b className='text-xs p-1'>|</b>
                        </div>
                    }
                    <div>
                        < button
                            className='link link-hover link-primary text-xs'
                            onClick={() => replyComment(post_id, comment_id, comment_user_details?.name)}
                        >
                            Reply
                        </button>
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
                {/* -----------------------------------------for show more reply  ----------------*/}
                {

                    showReply &&
                    <div className='ml-4 border-l-[3px] rounded-bl-3xl mb-3 pl-1 pt-1'>
                        {
                            repliesBody?.map(reply => <MoreCommentReply key={reply?._id} replyComment={reply} isLoading={isLoading}/>)
                        }
                    </div>
                }
            </div>
        </div >

    );
};

export default CommentList;