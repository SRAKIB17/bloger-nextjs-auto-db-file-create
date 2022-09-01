import React, { useState } from 'react';
import autoJwtTokenGenerateForUserOrGuest from '../../../hooks/autoJwtTokenGenerateForUserOrGuest';
import { Comment } from '../../../ReactRSIcon';
import AllCommentList from './comment_replies/AllCommentList';


import CommentBtn from './react/CommentBtn';
import CommentHandler from './react/CommentHandler';
import LikeReact from './react/LikeReact';
import LoveReact from './react/LoveReact';
import ReactBtnList from './react/ReactBtnList';
import UnlikeReact from './react/UnikeReact';

import returnLikeLoveCommentHook from './returnLikeLoveCommentHook';

const SinglePostReactBtnListCommentForm = ({ post, refetch }) => {

    const { like, unlike, love, TotalComment, allReact, userList, setUserList } = returnLikeLoveCommentHook(post);
    const reactLoading = false;


    // SET COMMENT BODY AND COUNT TOTAL COMMENT
    const commentBody = post?.comments;

    const LikeUnlikeLovePostHandle = (react) => {
        console.log(react)

    }

    const [hideComment, setHideComment] = useState(null)
    const HideShowCommentRepliesHandler = (post_id) => {

    }

    const [replyNow, setReplyNow] = useState(null);
    return (
        <div className='mb-10'>
            {/**
            * FOR COMMENT, LIKE, UNLIKE, LOVE, SHARE,
            * 1. LIKE 
            * 2. UNLIKE, 
            * 3. LOVE
            * 
            */}
            <div className=' pl-1 mt-2'>
                <ReactBtnList post={post} refetch={refetch} />
            </div>

            <div id={'comment_replies' + post?.post_id} className='h-0 hideScrollBar border-t overflow-hidden relative'>
                {/**
                 * For comment 
                 * for react 
                 * for comment box
                 * for replies
                 */}
                {hideComment || <div className='mt-1'>
                    {
                        commentBody?.map((comment) => <AllCommentList
                            key={comment?.comment_id}
                            comment={comment}
                            post_id={post?.post_id}
                            refetch={refetch}
                            replySetHandle={setReplyNow}
                        />)
                    }
                </div>}
            </div>
            <div className='relative'>
                <div className=''>
                    {hideComment || <CommentHandler post_id={post?.post_id} replyNow={replyNow} setReplyNow={setReplyNow} />}
                </div>
            </div>
        </div>
    );
};

export default SinglePostReactBtnListCommentForm;