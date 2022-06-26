import React, { useState } from 'react';

const CommentList = ({ comment: commentBody }) => {
    const { name, post_id, email, userID, comment, time } = commentBody
    const [moreComment, setMoreComment] = useState(false);

    return (
        <div>
            <div className='flex items-start' id={post_id}>
                <div className='mt-2'>
                    <div className="avatar ">
                        <div className="w-8 rounded-full">
                            <img src="https://api.lorem.space/image/face?hash=3174" alt='' />
                        </div>
                    </div>

                </div>
                <div className='rounded-3xl shadow-inner bg-base-200 pt-2 px-3 pb-2 m-1 mr-2'>
                    <div className='text-xl font-bold'>
                        <h6 className='m-0'>{name}</h6>
                    </div>
                    <div className=' overflow-auto w-full md:max-w-md sm:max-w-sm max-w-xs'>

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