import React, { useContext, useEffect, useState } from 'react';
import { Comment, EmoticonLove, Like, Share, } from '../../ReactRSIcon/index'
import ShareOption from './ShareOption';
import { useRouter } from 'next/router';
import styles from './LikeTransition.module.css'
import LikeUserList from './LikeUsersList';
import GuestCommentLikeLogin from '../../Login/GuestCommentLikeLogin';

import Login from '../../Login/Login';
import { UserFullInfoProvider } from '../../../pages/_app';
import axios from 'axios';

const LikeLoveFavorite = ({ props: { showCommentHandle, TotalComment, post, refetch } }) => {
    const { post_id } = post;

    const { user, user_details } = useContext(UserFullInfoProvider)

    const [showShareOption, setShowShareOption] = useState(false)
    const router = useRouter()
    const navigate = (path) => {
        router.push(path)
        router.prefetch(path)
    }
    const [likePost, setLikePost] = useState(false);
    const [unLikePost, setUnLikePost] = useState(false);
    const [lovePost, setLovePost] = useState(false);

    useEffect(() => {
        const getRating = post?.react?.find(react => react.userID == user_details?.userID)
        if (getRating?.rating) {
            const mode = getRating?.rating;
            switch (mode) {
                case 'like':
                    setLovePost(false)
                    setUnLikePost(false)
                    setLikePost(true)
                    break;
                case 'unlike':
                    setLovePost(false)
                    setLikePost(false)
                    setUnLikePost(true)
                    break;
                case 'love':
                    setUnLikePost(false)
                    setLikePost(false)
                    setLovePost(true)
                    break;
                default:
                    break;
            }
        }
    }, [post, user_details?.userID])
    const [reactLoading, setReactLoading] = useState(null)
    const LikeUnlikeLovePostHandle = async (mode) => {
        if (user?.user) {
            setReactLoading(true)
            let rating;
            switch (mode) {
                case 'like':
                    setLovePost(false)
                    setUnLikePost(false)
                    rating = likePost ? '' : 'like'
                    setLikePost(!likePost)
                    break;
                case 'unlike':
                    setLovePost(false)
                    setLikePost(false)
                    rating = unLikePost ? '' : 'unlike'
                    setUnLikePost(!unLikePost)
                    break;
                case 'love':
                    setUnLikePost(false)
                    setLikePost(false)
                    rating = lovePost ? '' : 'love'
                    setLovePost(!lovePost)
                    break;

                default:
                    break;
            }
            const ratingPostId = {
                rating: rating,
                post_id: post_id,
                userID: user_details?.userID
            }
            console.log(ratingPostId);
            const { data } = await axios.post(`/api/post/post-react?email=${user_details?.email}`, ratingPostId,
                {
                    headers: {
                        access_token: sessionStorage.getItem('accessAutoG'),
                        token: localStorage.getItem('token')
                    }
                }
            );

            if (data?.message === 'success') {
                refetch()
                // setErrMsg(<p className='text-green-600'>Success</p>)
                console.log('534534543534534545345345345345345345')
                if (data?.result?.acknowledged) {
                    setReactLoading(null)
                }
            }
            else if (data?.message === 'error') {
                refetch()
                setLovePost(false)
                setUnLikePost(false)
                setLikePost(false)
            }
            setReactLoading(null)
        }
        else {
            navigate('/login?')
        }
    }
    // useEffect(() => {
    //     setLikePost(true)
    // }, [])
    const showLikeUnlikeUser = (id) => {
        try {
            const showLikeUnlikeUser = document.getElementById('showLikeUnlikeUser' + id);
            // -------------------------for comment section 0----------------------------------------
            const showComment = document.getElementById('commentShow' + id)
            const commentForm = document.getElementById('commentForm' + id)
            const showCommentButton = document.getElementById('showCommentButton' + id)
            showComment.style.height = '0px'
            commentForm.style.height = '0px'
            try {
                commentForm.childNodes[0].childNodes[0].style.borderTopWidth = '0px'
            }
            catch {

            }
            showCommentButton.className = ' btn-outline btn btn-xs btn-primary ml-2 '
            //-------------------------------------------------------------------------------------
            if (showLikeUnlikeUser.offsetHeight <= 2) {
                showLikeUnlikeUser.style.height = '500px'
                showLikeUnlikeUser.style.overflow = 'auto'
                showLikeUnlikeUser.style.borderTopWidth = '1px'
            }
            else {
                showLikeUnlikeUser.style.height = '0px'
                showLikeUnlikeUser.style.overflow = 'hidden'
                showLikeUnlikeUser.style.borderTopWidth = '0px'
            }
        }
        catch {

        }
    }


    return (
        <div className='relative'>


            <div className='p-1  border-t flex items-center justify-between font-mono' >
                <div className='flex relative cursor-pointer' onClick={() => showLikeUnlikeUser(post_id)} >
                    <button
                        className='bg-[#00ff00] p-1 rounded-[50%] btn-disabled relative w-5 h-5'
                    >
                        <Like color='white' size='12' />
                    </button>
                    <button
                        className='bg-[#ff2020] p-1 rounded-[50%] btn-disabled relative w-5 h-5 left-[-4px]'
                    >
                        <Like color='white' size='12' style={{ transform: 'rotate(180deg)' }} />
                    </button>
                    <button
                        onClick={() => LikeUnlikeLovePostHandle('unlike')}
                        className='bg-[#ff00f2] p-1 rounded-[50%] btn-disabled relative w-5 h-5 left-[-6px]'
                    >
                        <EmoticonLove size='12' color='white' />
                    </button>
                    <h1 className='text-gray-500  text-[14px]'>{post?.react?.length || 0}</h1>
                </div>
                <div className='mr-3 text-[14px] text-gray-500 cursor-pointer' onClick={() => showCommentHandle(post_id)}>
                    {
                        (TotalComment + ' comment')
                    }

                </div>
            </div>

            {/* show like love unlike  user list  */}
            <div className={(styles.showLikeUnlikeUser) + ' overflow-hidden ' + (styles.likeUnlikeUserList)} id={'showLikeUnlikeUser' + post_id}>
                {
                    user?.user &&
                    <LikeUserList post={post} />
                }
                {
                    user?.user ||
                    <GuestCommentLikeLogin />
                }
            </div>

            <div className='relative border-b p-2 border-t z-50 bg-base-100'>
                <div className='flex items-center justify-between'>
                    <div>
                        {/* ************FOR LIKE *************************** */}
                        {
                            !reactLoading ?
                                <button
                                    onClick={() => LikeUnlikeLovePostHandle('like')}
                                    className='btn relative btn-xs btn-primary ml-2 btn-outline h-5 w-8'
                                >
                                    <Like size='18' color={likePost ? '#00ff00' : 'grey'} />
                                </button>
                                :
                                <button
                                    className='btn relative btn-xs btn-primary ml-2 btn-outline h-5 w-8'
                                >
                                    <Like size='18' color={likePost ? '#00ff00' : 'grey'} />
                                    <p className='absolute animate-spin border-b-2 border-r-2 w-4 h-4 rounded-[50%]'>
                                    </p>
                                </button>

                        }
                        {/* ************FOR UNLIKE *************************** */}
                        {
                            !reactLoading ?
                                <button
                                    onClick={() => LikeUnlikeLovePostHandle('unlike')}
                                    className='btn btn-xs btn-primary ml-2 btn-outline h-5 w-8'
                                >
                                    <Like size='18' color={unLikePost ? '#ff2020' : 'grey'} style={{ transform: 'rotate(180deg)' }} />
                                </button>
                                :
                                <button
                                    className='btn relative btn-xs btn-primary ml-2 btn-outline h-5 w-8'
                                >
                                    <Like size='18' color={unLikePost ? '#ff2020' : 'grey'} style={{ transform: 'rotate(180deg)' }} />
                                    <p className='absolute animate-spin border-b-2 border-r-2 w-4 h-4 rounded-[50%]'>
                                    </p>
                                </button>

                        }
                        {/* ************FOR lOVE *************************** */}
                        {
                            !reactLoading ?
                                <button
                                    onClick={() => LikeUnlikeLovePostHandle('love')}
                                    className='btn btn-xs btn-primary ml-2 btn-outline h-5 w-8'
                                >
                                    <EmoticonLove color={lovePost ? '#ff00f2' : 'grey'} size='19' />
                                </button>
                                :
                                <button
                                    className='btn relative btn-xs btn-primary ml-2 btn-outline h-5 w-8'
                                >
                                    <EmoticonLove color={lovePost ? '#ff00f2' : 'grey'} size='19' />
                                    <p className='absolute animate-spin border-b-2 border-r-2 w-4 h-4 rounded-[50%]'>
                                    </p>
                                </button>

                        }

                    </div>
                    <div>
                        <button
                            title='Comment'
                            onClick={() => showCommentHandle(post_id)}
                            id={'showCommentButton' + post_id}
                            className='btn-primary btn-outline btn btn-xs  ml-2 h-5 w-8 '
                        >
                            <Comment size='18' color='currentColor' />
                        </button>
                    </div>
                    <div onMouseEnter={() => setShowShareOption(!showShareOption)} onMouseLeave={() => setShowShareOption(!showShareOption)} >
                        <button
                            className='btn btn-xs btn-primary ml-2 btn-outline w-8 h-5'
                        >
                            <Share size='18' />
                        </button>
                        {
                            showShareOption &&
                            <div className={styles.shareOption}>
                                <ShareOption post_id={post_id} />
                            </div>
                        }
                    </div>

                </div>
            </div>



        </div >
    );
};

export default LikeLoveFavorite;