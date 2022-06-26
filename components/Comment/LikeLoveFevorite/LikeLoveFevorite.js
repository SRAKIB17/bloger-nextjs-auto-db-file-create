import React, { useState } from 'react';
import { Comment, Like, Share, } from '../../ReactRSIcon/index'
import ShareOption from './ShareOption';
import styles from './LikeTransition.module.css'

const LikeLoveFavorite = ({ props: { showComment, setShowCommentSection } }) => {
    const handleLikeComponent = (e) => {

        if (e.type === 'mouseenter') {
            const likeLoveFavorite = document.getElementById('likeLoveFavorite');
            likeLoveFavorite.style.display = 'block'
        }
        else if (e.type === 'mouseleave') {
            const likeLoveFavorite = document.getElementById('likeLoveFavorite');
            likeLoveFavorite.style.display = 'none'
        }


    }
    const [showShareOption, setShowShareOption] = useState(false)
    const shareOptionShowHandle = () => {

    }
    return (
        <div>
            <div className='absolute top-0 bg-base-100 w-full hidden z-[1000]' id='likeLoveFavorite'>
                <button className='btn btn-xs btn-secondary ml-2 btn-outline'>
                    <Like color='' />
                </button>
                <button className='btn btn-xs btn-secondary ml-2 btn-outline'>
                    <Like style={{ transform: 'rotate(180deg)' }} />
                </button>
            </div>
            <div className='flex items-center justify-between'>
                <div >
                    <button onMouseLeave={handleLikeComponent} onMouseEnter={handleLikeComponent} className='btn btn-xs btn-secondary ml-2 btn-outline'>
                        <Like size='18' />
                    </button>
                    <button className='btn btn-xs btn-secondary ml-2 btn-outline'>
                        <Like size='18' style={{ transform: 'rotate(180deg)' }} />
                    </button>
                </div>
                <div>
                    <button onClick={() => setShowCommentSection(!showComment)} className='btn btn-xs btn-secondary ml-2 btn-outline'>
                        <Comment size='18' />
                    </button>
                </div>
                <div>
                    <button onClick={() => setShowShareOption(!showShareOption)} className='btn btn-xs btn-secondary ml-2 btn-outline'>
                        <Share size='18' />
                    </button>
                </div>

            </div>
            {
                showShareOption &&
                <div className={styles.shareOption}>
                    <ShareOption />
                </div>
            }
        </div>
    );
};

export default LikeLoveFavorite;