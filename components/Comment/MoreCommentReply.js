import React, { useState } from 'react';

const MoreCommentReply = ({ replyComment }) => {
    const { post_id, userID, time, sort, reply, comment_id } = replyComment;
    const name = 'Rakib'
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

                        <div className='w-fit p-1'>
                            <div className=' text-[15px]' dangerouslySetInnerHTML={{ __html: showFullReply }}></div>
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
        </div>
    );
};

export default MoreCommentReply;