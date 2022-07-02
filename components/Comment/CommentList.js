import React, { useState } from 'react';
import MoreCommentReply from './MoreCommentReply';

const CommentList = ({ comment: commentBody }) => {
    const { post_id, userID, comment, time } = commentBody
    const [moreComment, setMoreComment] = useState(true);
    const getMoreComment = [

        {
            _id: 8,
            post_id: 13,
            userID: 42342343,
            time: Date(),
            sort: '',
            comment_id: 45345455435435,
            reply: 'flsdjflsdjflsdjflsdfjksdlkfsdf'
        },
        {
            _id: 8,
            post_id: 13,
            userID: 42342343,
            time: Date(),
            sort: '',
            comment_id: 45345455435435,
            reply: 'ipsum dolor sit, amet consectetur adipisicing elit. Ipsa tenetur, vel, architecto unde ex quos, distinctio vero et commodi quia expedita pariatur? Eveniet, quod nostrum impedit illo earum exercitationem consequuntur?Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt laborum aliquid nihil, architecto quod fugit, hic cumque explicabo facilis iste perspiciatis tem'
        },
        {
            _id: 8,
            post_id: 13,
            userID: 42342343,
            time: Date(),
            sort: '',
            comment_id: 45345455435435,
            reply: `
            <video width="320" height="240"  preload="auto" controls muted poster="http://rakib17.hexat.com/icon/busy.gif" loop autoplay>
                <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4">
                <source src="movie.ogg" type="video/ogg">
                Your browser does not support the video tag.
            </video>    `


        },

    ]

    const name = 'rakib'
    const [showReply, setShowReply] = useState(false)
    const [showFullComment, setFullComment] = useState(comment?.length >= 100 ? comment?.slice(0, 100) : comment)
    const handleShowFullComment = () => {
        if (showFullComment?.length === 100) {
            setFullComment(comment)
        }
        else {
            setFullComment(comment?.slice(0, 100))
        }
    }
    return (
        <div>
            <div className='border-t' id={post_id}>
                {/* ------------------------------------------for profile picture  ----------------------------*/}
                <div className='mt-2 flex items-center gap-1'>
                    <div className="avatar ">
                        <div className="w-8 rounded-full">
                            <img src="https://api.lorem.space/image/face?hash=3174" alt='' />
                        </div>
                    </div>
                    <div className='text-[14px] font-bold'>
                        <h6 className='m-0'>{name}</h6>
                    </div>

                </div>
                <div className='rounded-3xl shadow-inner bg-base-200 pt-2 px-3 pb-2 m-1 mr-2'>
                    {/* -----------------------=======================-for comment  -------------------------------*/}
                    <div className=' overflow-auto w-full'>

                        <div className='w-fit'>
                            <div className='break-words text-[15px]' dangerouslySetInnerHTML={{ __html: showFullComment }}></div>
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
                {/* for reply count and handle show more  reply  */}
                {
                    getMoreComment?.length > 0 &&
                    <div>

                        < button
                            className='link ml-4 link-hover link-primary text-xs'
                            onClick={() => setShowReply(!showReply)}
                        >
                            {getMoreComment?.length + ' '}  Reply
                        </button>
                        < button
                            className='link ml-4 link-hover link-primary text-xs'
                            onClick={() => setShowReply(!showReply)}
                        >
                            {getMoreComment?.length + ' '}  Reply
                        </button>
                    </div>
                }
                {/* for show more reply  */}
                {

                    showReply &&
                    <div className='ml-4 border-l-4 rounded-bl-3xl mb-3 pl-1 pt-1'>
                        {
                            getMoreComment?.map(reply => <MoreCommentReply key={reply?._id} replyComment={reply} />)
                        }
                    </div>
                }
            </div>
        </div >

    );
};

export default CommentList;