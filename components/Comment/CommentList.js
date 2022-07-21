import React, { useContext, useState } from 'react';
import axios from 'axios'
import MoreCommentReply from './MoreCommentReply';
import { useQuery } from 'react-query';
import { UserFullInfoProvider } from '../../pages/_app';

const CommentList = ({ comment: commentBody, replySetHandle }) => {
    const { post_id, userID, comment, time, comment_id } = commentBody;
    const userInfo = useQuery(['public_profile', userID], () => axios.get(`/api/public_user_details/${userID}`,
        {
            headers: { access_token: sessionStorage.getItem('accessAutoG') }
        }));
    const comment_user_details = userInfo?.data?.data?.user_details;

    // GET REPLY 
    const { user, user_details, isAdmin } = useContext(UserFullInfoProvider);
    const { data, refetch, isLoading } = useQuery(['ReplyList'], () => axios.get(`/api/post/comments-reply?comment_id=${comment_id}&email=${user_details?.email}`,
        {
            headers: {
                access_token: sessionStorage.getItem('accessAutoG'),
                token: localStorage.getItem('token')
            }
        }
    ));
    console.log(data?.data)
    const repliesBody = data?.data?.result || []
    console.log(repliesBody)



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
    return (
        <div>
            <div className='border-t' id={post_id}>
                {/* ------------------------------------------for profile picture  ----------------------------*/}
                <div className='mt-2 flex items-center gap-1'>
                    <div className="avatar ">
                        <div className="w-5 rounded-full">
                            <img src={comment_user_details?.profile} alt='' />
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

                </div>
                {/* -----------------------------------------for show more reply  ----------------*/}
                {

                    showReply &&
                    <div className='ml-4 border-l-[3px] rounded-bl-3xl mb-3 pl-1 pt-1'>
                        {
                            repliesBody?.map(reply => <MoreCommentReply key={reply?._id} replyComment={reply} />)
                        }
                    </div>
                }
            </div>
        </div >

    );
};

export default CommentList;