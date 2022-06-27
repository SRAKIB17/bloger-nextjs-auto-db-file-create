import React, { useState } from 'react';

const CommentList = ({ comment: commentBody }) => {
    const { name, post_id, email, userID, comment, time } = commentBody
    const [moreComment, setMoreComment] = useState(false);

    return (
        <div>
            <div className='border-t-2 border-b-1' id={post_id}>
                {/* ------------------------------------------for profile picture  ----------------------------*/}
                <div className='mt-2 flex gap-1'>
                    <div className="avatar ">
                        <div className="w-8 rounded-full">
                            <img src="https://api.lorem.space/image/face?hash=3174" alt='' />
                        </div>
                    </div>
                    <div className='text-xl font-bold'>
                        <h6 className='m-0'>{name}</h6>
                    </div>
                </div>
                <div className='rounded-3xl shadow-inner bg-base-200 pt-2 px-3 pb-2 m-1 mr-2'>
                    {/* -----------------------=======================-for comment  -------------------------------*/}
                    <div className=' overflow-auto w-full'>

                        <div className='w-fit'>
                            <div dangerouslySetInnerHTML={{ __html: comment }}></div>
                        </div>
                        {
                            moreComment &&
                            <button className={'commentShowMoreBtn ' + (darkMode ? 'text-light' : 'text-dark')}
                                onClick={loadFullCommentHandle}
                            >See {seeMore ? ' More' : ' Less'} ..</button>
                        }
                    </div>
                </div>

            </div>
        </div>

    );
};

export default CommentList;