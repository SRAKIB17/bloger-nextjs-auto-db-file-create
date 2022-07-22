import React, { useContext, useEffect, useRef, useState } from 'react';
import classTagShortcutInput from '../hooks/hooks/useFindClassAttr';
import styles from './Comment.module.css'
import LikeLoveFavorite from './LikeLoveFavorite/LikeLoveFavorite';
import CommentList from './CommentList';
import GuestCommentLikeLogin from '../Login/GuestCommentLikeLogin';
import Login from '../Login/Login'
import { UserFullInfoProvider } from '../../pages/_app';
import { useQuery } from 'react-query';
import axios from 'axios';

const Comment_textarea = ({ post_id }) => {
    // const { user, user_details, isLoading, isAdmin } = useContext(UserFullInfoProvider);
    // const asPath = useRouter()?.asPath
    // usePrivatePageCheckUser(asPath)

    const CommentTextareaRef = useRef();
    const { user, user_details, isAdmin } = useContext(UserFullInfoProvider);
    const { data, refetch, isLoading } = useQuery(['commentList', post_id], () => axios.get(`/api/post/comment?post_id=${post_id}&email=${user_details?.email}`,
        {
            headers: {
                access_token: sessionStorage.getItem('accessAutoG'),
                token: localStorage.getItem('token'),
                session_token: sessionStorage.getItem('accessAutoG')
            }
        }
    ));

    useEffect(() => {
        window.onclick = () => {
            refetch()
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const commentBody = data?.data?.result || []
    const TotalComment = commentBody?.length;
    const shortcutKeyboard = (e) => {
        // classTagShortcutInput(e, textareaRef)
    }
    const onchangeInput = (e) => {
        heightAutoHandle(e)
        classTagShortcutInput(e, CommentTextareaRef)
    }
    const heightAutoHandle = (e) => {
        e.target.style.height = 'auto';
        if (e.target.scrollHeight < 200) {
            e.target.style.height = e.target.scrollHeight + 'px'
        }
        else {
            e.target.style.height = 200 + 'px'
        }
    }
    // ----------------------------------for show commnet toggle and auto height increase-------------------------------
    const showCommentHandle = (id) => {
        refetch()

        try {

            const showComment = document.getElementById('commentShow' + id)
            const commentForm = document.getElementById('commentForm' + id)
            const showCommentButton = document.getElementById('showCommentButton' + id)
            //---------------------------------for like comment hide =============-----------------------
            const showLikeUnlikeUser = document.getElementById('showLikeUnlikeUser' + id);
            showLikeUnlikeUser.style.height = '0px'
            showLikeUnlikeUser.style.overflow = 'hidden'
            showLikeUnlikeUser.style.borderTopWidth = '0px'
            //----------------------------------------------------------------------------------
            if (showComment.offsetHeight <= 2) {
                commentForm.style.height = '100%'
                try {
                    commentForm.childNodes[0].childNodes[0].style.borderTopWidth = '1px'
                }
                catch {

                }
                showComment.style.height = '500px'
                // document.getElementById('commentTextArea' + id).focus()
                showCommentButton.className = 'btn-primary btn btn-xs  ml-2 '
            }
            else {
                showComment.style.height = '0px'
                commentForm.style.height = '0px'
                commentForm.childNodes[0].childNodes[0].style.borderTopWidth = '0px'
                showCommentButton.className = ' btn-outline btn btn-xs btn-primary ml-2 '
            }
        }
        catch {

        }
    }

    //------------------------------------------------------------------------------------------
    //......--------------------------------------------- for reply a comment a auto show name -----------------------------------
    const [replyNow, setReplyNow] = useState(null)
    const replySetHandle = (targetComment, id) => {
        try {
            document.getElementById('commentTextArea' + id).focus()
        }
        catch {

        }
        setReplyNow(targetComment)
    }

    const [errMsg, setErrMsg] = useState('')
    const [sendCommentLoading, setSendCommentLoading] = useState(null)
    const postCommentHandler = async (e) => {
        e.preventDefault()
        setSendCommentLoading(true)
        if (replyNow?.comment_id) {
            const replyBody = {
                post_id: post_id,
                userID: user_details?.userID,
                time: Date(),
                sort: '',
                comment_id: replyNow?.comment_id,
                reply: CommentTextareaRef.current.value
            }
            const { data } = await axios.post(`/api/post/comments-reply?email=${user_details?.email}`, replyBody,
                {
                    headers: {
                        access_token: sessionStorage.getItem('accessAutoG'),
                        token: localStorage.getItem('token')
                    }
                }
            );

            if (data?.message === 'success') {
                refetch()
                setErrMsg(<p className='text-green-600'>Success</p>)
                if (data?.result?.acknowledged) {
                    refetch()
                    e.target.reset();
                    setReplyNow(null)
                }
            }
            else if (data?.message === 'error') {
                setErrMsg(<p className='text-red-600'>{data?.error}</p>)
            }
        }

        // FOR COMMENT 
        else {
            const comment = {
                post_id: post_id,
                userID: user_details?.userID,
                comment: CommentTextareaRef.current.value,
                time: Date(),
                sort: '',
                comment_id: 2,
                likeUnlike: []
            }
            const { data } = await axios.post(`/api/post/comment?email=${user_details?.email}`, comment,
                {
                    headers: {
                        access_token: sessionStorage.getItem('accessAutoG'),
                        token: localStorage.getItem('token')
                    }
                }
            );

            if (data?.message === 'success') {
                refetch()
                setErrMsg(<p className='text-green-600'>Success</p>)
                if (data?.result?.acknowledged) {
                    refetch()
                    e.target.reset()
                }
            }
            else if (data?.message === 'error') {
                setErrMsg(<p className='text-red-600'>{data?.error}</p>)
            }
        }

        // for loading 
        setSendCommentLoading(null)
    }

    if (isLoading) {
        return
    }

    return (
        <div>
            <div className='mb-1'>
                {/* -------------------------------------like unlike and show user who like this post---------------------------- */}
                <LikeLoveFavorite props={{ showCommentHandle, post_id, TotalComment }} />
            </div>

            {/* =--------------------------------------------for comment list and reply component---------------------------- */}
            <div id={'commentShow' + post_id} className={styles.showComment + ' overflow-auto hideScrollBar'}>
                <div className='ml-2 p-1 overflow-auto border-l-[3px] rounded-bl-3xl'>
                    {
                        user?.user &&
                        commentBody?.map(comment => <CommentList key={comment?.comment_id} replySetHandle={replySetHandle} comment={comment} />)
                    }
                    {
                        user?.user ||
                        <Login />
                        // <GuestCommentLikeLogin />
                    }
                </div>
            </div>

            {/* -----------------------------for comment form and comment auto hight----------------------------- */}
            <div id={'commentForm' + post_id} className={styles.showComment}>

                {
                    user?.user &&
                    <form className=' pt-4 mb-4' onSubmit={postCommentHandler} >
                        {/****************** for reply section when a user reply other this name show display ************************ */}
                        {
                            replyNow &&
                            <div className='mt-3 flex items-center mb-2 pl-3 pr-3 text-secondary bg-gray-100 w-fit rounded-3xl'>
                                <h1 className='text-xs'>@{replyNow?.name}</h1>
                                <div>
                                    <a href="#" onClick={() => setReplyNow(null)} className=' text-xl ml-2 hover:text-[grey]'>&times;</a>
                                </div>
                            </div>
                        }
                        <p className='text-red-600 text-xs p-1'>
                            {
                                errMsg
                            }
                        </p>

                        <div className="relative flex items-end pt-1 pl-3 mt-1">
                            <textarea ref={CommentTextareaRef}
                                id={'commentTextArea' + post_id}
                                className='input input-success w-full font-mono'
                                name="commentBody"
                                onBlur={onchangeInput}
                                onKeyUp={(e) => shortcutKeyboard(e)}
                                onChange={onchangeInput}
                                onInput={onchangeInput}
                                onCut={heightAutoHandle}
                                onPaste={heightAutoHandle}
                                onDrop={heightAutoHandle}
                                onKeyDown={heightAutoHandle}
                            >
                            </textarea>
                            <div className='align-bottom left-[50%] bottom-0'>
                                <button className='btn btn-sm btn-primary ml-2 text-xs w-fit text-white'>
                                    {
                                        sendCommentLoading ||
                                            replyNow?.comment_id ? "Reply" : "Comment"
                                    }
                                    {
                                        sendCommentLoading &&
                                        <p className='animate-spin border-b-2 border-r-2 w-4 h-4 rounded-[50%]'>
                                        </p>
                                    }
                                </button>
                            </div>
                        </div>
                    </form>
                }

            </div>
        </div>
    );
};

export default Comment_textarea;
