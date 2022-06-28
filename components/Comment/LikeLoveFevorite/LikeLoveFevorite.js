import React, { useEffect, useState } from 'react';
import { Comment, Like, Share, } from '../../ReactRSIcon/index'
import ShareOption from './ShareOption';
import styles from './LikeTransition.module.css'

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
    const onlyLikePostHandle = (mode) => {
        switch (mode) {
            case 'like':
                setLikePost(true)
                break;
            case 'unlike':
                setUnLikePost(true)
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
                showLikeUnlikeUser.style.borderTopWidth = '1px'
            }
            else {
                showLikeUnlikeUser.style.height = '0px'
                showLikeUnlikeUser.style.borderTopWidth = '0px'
            }
            console.log(showLikeUnlikeUser.offsetHeight)
        }
        catch {

        }
    }

    return (
        <div>

            {/* <div data-likelovefavorite='true' className={styles.shareOption + ' z-10 hidden absolute bg-base-100 left-0 border top-[-1px] w-36 rounded-md hover:shadow-md shadow-lg p-2'} id={'likeLoveFavorite' + post_id}>
                <button className='btn btn-xs btn-secondary ml-2 btn-outline'>
                    <Like />
                </button>
                <button className='btn btn-xs btn-secondary ml-2 btn-outline' >
                    <Like style={{ transform: 'rotate(180deg)' }} />
                </button>
                <button className='btn btn-xs btn-secondary ml-2 btn-outline' >
                    <Like style={{ transform: 'rotate(180deg)' }} />
                </button>
            </div> */}


            <div className='p-2 border-t flex items-center justify-between font-mono' onClick={() => showLikeUnlikeUser(post_id)} >
                <div className='flex relative'>
                    <button className='bg-[#00ff00] p-1 rounded-[50%] btn-disabled relative'>
                        <Like color='white' size='15' />
                    </button>
                    <button className='bg-[#ff2020] p-1 rounded-[50%] btn-disabled relative left-[-4px]'>
                        <Like color='white' size='15' style={{ transform: 'rotate(180deg)' }} />
                    </button>
                    <h1 className='text-gray-500'>5345</h1>
                </div>
                <div className='mr-3 text-gray-500'>
                    20 comment
                </div>
            </div>
            <div className={styles.showLikeUnlikeUser} id={'showLikeUnlikeUser' + post_id}>

            </div>
            <div className=' border-b p-2 border-t'>
                <div className='flex items-center justify-between'>
                    <div>
                        <button onClick={() => onlyLikePostHandle('like')} className='btn btn-xs btn-secondary ml-2 btn-outline'>
                            <Like size='18' color={likePost ? '#00ff00' : 'currentColor'} />
                        </button>
                        <button onClick={() => onlyLikePostHandle('unlike')} className='btn btn-xs btn-secondary ml-2 btn-outline'>
                            <Like size='18' color={unLikePost ? '#ff2020' : 'currentColor'} style={{ transform: 'rotate(180deg)' }} />
                        </button>
                    </div>
                    <div>
                        <button onClick={() => showCommentHandle(post_id)} className={(true ? 'btn-primary' : 'btn-outline') + ' btn btn-xs btn-secondary ml-2 '}>
                            <Comment size='18' color='currentColor' />
                        </button>
                    </div>
                    <div>
                        <button onClick={() => setShowShareOption(!showShareOption)} className='btn btn-xs btn-secondary ml-2 btn-outline'>
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