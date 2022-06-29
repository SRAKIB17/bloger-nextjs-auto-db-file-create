import React, { useEffect, useState } from 'react';
import { Comment, EmoticonLove, Like, Share, } from '../../ReactRSIcon/index'
import ShareOption from './ShareOption';
import styles from './LikeTransition.module.css'
import LikeUserList from './LikeUsersList';

const LikeLoveFavorite = ({ props: { showCommentHandle, post_id } }) => {
    // const [showLikeUnlikeLove, setShoLikeUnlikeLove] = useState(false)
    // const handleLikeComponent = (id) => {
    //     // setShoLikeUnlikeLove(true);
    //     document.getElementById('likeLoveFavorite' + post_id).style.top = '-1px'
    //     document.getElementById('likeLoveFavorite' + post_id).style.display = 'flex'
    // }

    const [showShareOption, setShowShareOption] = useState(false)

    const [likePost, setLikePost] = useState(false);
    const [unLikePost, setUnLikePost] = useState(false);
    const [lovePost, setLovePost] = useState(false);
    const onlyLikePostHandle = (mode) => {
        switch (mode) {
            case 'like':
                setLikePost(true)
                break;
            case 'unlike':
                setUnLikePost(true)
                break;
            case 'love':
                setLovePost(true)
                break;

            default:
                break;
        }
    }
    // useEffect(() => {
    //     setLikePost(true)
    // }, [])
    const showLikeUnlikeUser = (id) => {
        try {
            const showLikeUnlikeUser = document.getElementById('showLikeUnlikeUser' + id)
            if (showLikeUnlikeUser.offsetHeight <= 2) {
                showLikeUnlikeUser.style.height = '400px'
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
                        <Like color='white' size='15' />
                    </button>
                    <button
                        className='bg-[#ff2020] p-1 rounded-[50%] btn-disabled relative left-[-4px]'
                    >
                        <Like color='white' size='15' style={{ transform: 'rotate(180deg)' }} />
                    </button>
                    <button
                        onClick={() => onlyLikePostHandle('unlike')}
                        className='bg-[#ff00f2] p-1 rounded-[50%] btn-disabled relative left-[-6px]'
                    >
                        <EmoticonLove size='15' color='white'/>
                    </button>
                    <h1 className='text-gray-500'>5345</h1>
                </div>
                <div className='mr-3 text-gray-500 cursor-pointer' onClick={() => showCommentHandle(post_id)}>
                    20 comment
                </div>
            </div>
            <div className={(styles.showLikeUnlikeUser) + ' overflow-hidden ' + (styles.likeUnlikeUserList)} id={'showLikeUnlikeUser' + post_id}>
                <LikeUserList post_id={post_id} />
            </div>
            <div className='relative border-b p-2 border-t z-50 bg-base-100'>
                <div className='flex items-center justify-between'>
                    <div>
                        <button
                            onClick={() => onlyLikePostHandle('like')}
                            className='btn btn-xs btn-primary ml-2 btn-outline'
                        >
                            <Like size='18' color={likePost ? '#00ff00' : 'currentColor'} />
                        </button>
                        <button
                            onClick={() => onlyLikePostHandle('unlike')}
                            className='btn btn-xs btn-primary ml-2 btn-outline'
                        >
                            <Like size='18' color={unLikePost ? '#ff2020' : 'currentColor'} style={{ transform: 'rotate(180deg)' }} />
                        </button>
                        <button
                            onClick={() => onlyLikePostHandle('love')}
                            className='btn btn-xs btn-primary ml-2 btn-outline'
                        >
                            <EmoticonLove color={lovePost ? '#ff00f2' : 'currentColor'}  size='19' />
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
                    <div>
                        <button
                            onClick={() => setShowShareOption(!showShareOption)}
                            className='btn btn-xs btn-primary ml-2 btn-outline'
                        >
                            <Share size='18' />
                        </button>
                    </div>

                </div>
            </div>


            {
                showShareOption &&
                <div className={styles.shareOption}>
                    <ShareOption />
                </div>
            }
        </div >
    );
};

export default LikeLoveFavorite;