import { useRouter } from 'next/router';
import React from 'react';
import { Comment } from '../../../../ReactRSIcon';

const CommentBtn = ({ post_id, TotalComment, showCommentHandle }) => {
    const router = useRouter()
    const navigate = (path) => {
        router.replace()
    }
    return (
        <div>
            <div className='flex items-center'>
                <button
                    title='Comment'
                    onClick={() => showCommentHandle(post_id)}
                    id={'showCommentButton' + post_id}
                    className='btn relative btn-xs bg-[#DDDDDD] rounded-3xl text-[16px]  sm:text-xl'
                    rel="noreferrer"
                >
                    <span className='flex items-center gap-1'>
                        <Comment color='currentColor' size='16'/>
                        <p className='font-extralight text-sm'>
                            {TotalComment}
                        </p>
                    </span>
                </button>
                {/* <BookmarkPost post={post} refetch={refetch}/> */}
            </div>
        </div>
    );
};

export default CommentBtn;