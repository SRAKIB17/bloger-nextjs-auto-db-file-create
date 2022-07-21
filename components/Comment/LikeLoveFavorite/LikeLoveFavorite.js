import React, { useContext, useEffect, useState } from 'react';
import { Comment, EmoticonLove, Like, Share, } from '../../ReactRSIcon/index'
import ShareOption from './ShareOption';
import { useRouter } from 'next/router';
import styles from './LikeTransition.module.css'
import LikeUserList from './LikeUsersList';
import GuestCommentLikeLogin from '../../Login/GuestCommentLikeLogin';

import Login from '../../Login/Login';
import { UserFullInfoProvider } from '../../../pages/_app';

const LikeLoveFavorite = ({ props: { showCommentHandle, post_id, TotalComment } }) => {
    // const [showLikeUnlikeLove, setShoLikeUnlikeLove] = useState(false)
    // const handleLikeComponent = (id) => {
    //     // setShoLikeUnlikeLove(true);
    //     document.getElementById('likeLoveFavorite' + post_id).style.top = '-1px'
    //     document.getElementById('likeLoveFavorite' + post_id).style.display = 'flex'
    // }
    const { user, user_details, isLoading } = useContext(UserFullInfoProvider)

    const [showShareOption, setShowShareOption] = useState(false)
    const router = useRouter()
    const navigate = (path) => {
        router.push(path)
        router.prefetch(path)
    }
    const [likePost, setLikePost] = useState(false);
    const [unLikePost, setUnLikePost] = useState(false);
    const [lovePost, setLovePost] = useState(false);

    const likeLovePostObject = {
        post_id: post_id,
        likeUnlike:
        {
            userID: 53453555,
            rating: 'like'
        }
    }
    const LikeUnlikeLovePostHandle = (mode) => {
        if (user?.user) {
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
                userID: '53454'
            }
            console.log(ratingPostId)
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

            {/* <div data-likelovefavorite='true' className={styles.shareOption + ' z-10 hidden absolute bg-base-100 left-0 border top-[-1px] w-36 rounded-md hover:shadow-md shadow-lg p-2'} id={'likeLoveFavorite' + post_id}>
                <button className='btn btn-xs btn-primary ml-2 btn-outline'>
                    <Like />
                </button>
                <button className='btn btn-xs btn-primary ml-2 btn-outline' >
                    <Like style={{ transform: 'rotate(180deg)' }} />
                </button>
                <button className='btn btn-xs btn-primary ml-2 btn-outline' >
                    <Like style={{ transform: 'rotate(180deg)' }} />
                </button>
            </div> */}


            <div className='p-1  border-t flex items-center justify-between font-mono' >
                <div className='flex relative cursor-pointer' onClick={() => showLikeUnlikeUser(post_id)} >
                    <button
                        className='bg-[#00ff00] p-1 rounded-[50%] btn-disabled relative'
                    >
                        <Like color='white' size='14' />
                    </button>
                    <button
                        className='bg-[#ff2020] p-1 rounded-[50%] btn-disabled relative left-[-4px]'
                    >
                        <Like color='white' size='14' style={{ transform: 'rotate(180deg)' }} />
                    </button>
                    <button
                        onClick={() => LikeUnlikeLovePostHandle('unlike')}
                        className='bg-[#ff00f2] p-1 rounded-[50%] btn-disabled relative left-[-6px]'
                    >
                        <EmoticonLove size='14' color='white' />
                    </button>
                    <h1 className='text-gray-500  text-[14px]'>5345</h1>
                </div>
                <div className='mr-3 text-[14px] text-gray-500 cursor-pointer' onClick={() => showCommentHandle(post_id)}>
                   {
                    TotalComment + ' comment'
                   }
                </div>
            </div>

            {/* show like love unlike  user list  */}
            <div className={(styles.showLikeUnlikeUser) + ' overflow-hidden ' + (styles.likeUnlikeUserList)} id={'showLikeUnlikeUser' + post_id}>
                {
                    user?.user &&
                    <LikeUserList post_id={post_id} />
                }
                {
                    user?.user ||
                    <GuestCommentLikeLogin />
                }
            </div>

            <div className='relative border-b p-2 border-t z-50 bg-base-100'>
                <div className='flex items-center justify-between'>
                    <div>
                        <button
                            onClick={() => LikeUnlikeLovePostHandle('like')}
                            className='btn btn-xs btn-primary ml-2 btn-outline'
                        >
                            <Like size='18' color={likePost ? '#00ff00' : 'grey'} />
                        </button>
                        <button
                            onClick={() => LikeUnlikeLovePostHandle('unlike')}
                            className='btn btn-xs btn-primary ml-2 btn-outline'
                        >
                            <Like size='18' color={unLikePost ? '#ff2020' : 'grey'} style={{ transform: 'rotate(180deg)' }} />
                        </button>
                        <button
                            onClick={() => LikeUnlikeLovePostHandle('love')}
                            className='btn btn-xs btn-primary ml-2 btn-outline'
                        >
                            <EmoticonLove color={lovePost ? '#ff00f2' : 'grey'} size='19' />
                        </button>
                    </div>
                    <div>
                        <button
                            title='Comment'
                            onClick={() => showCommentHandle(post_id)}
                            id={'showCommentButton' + post_id}
                            className='btn-primary btn-outline btn btn-xs  ml-2 '
                        >
                            <Comment size='18' color='currentColor' />
                        </button>
                    </div>
                    <div onMouseEnter={() => setShowShareOption(!showShareOption)} onMouseLeave={() => setShowShareOption(!showShareOption)} >
                        <button
                            className='btn btn-xs btn-primary ml-2 btn-outline'
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