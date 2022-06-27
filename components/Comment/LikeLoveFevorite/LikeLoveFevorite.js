import React, { useEffect, useState } from 'react';
import { Comment, Like, Share, } from '../../ReactRSIcon/index'
import ShareOption from './ShareOption';
import styles from './LikeTransition.module.css'

const LikeLoveFavorite = ({ props: { showComment, setShowCommentSection } }) => {
    const [showLikeUnlikeLove, setShoLikeUnlikeLove] = useState(false)
    const handleLikeComponent = (e) => {
        setShoLikeUnlikeLove(true);
        document.getElementById('likeLoveFavorite').style.top = '-40px'
        document.getElementById('likeLoveFavorite').style.display = 'flex'
    }
    const onlyLikePostHandle = () => {
    }
    const [showShareOption, setShowShareOption] = useState(false)
    const shareOptionShowHandle = () => {

    }
    useEffect(() => {
        document.documentElement.onclick = (e) => {
            const getDIV = e.composedPath().slice(0, e.composedPath().length - 4).find(element => (element?.hasAttribute('data-likelovefavorite')))
            if (!getDIV) {
                document.getElementById('likeLoveFavorite').style.top = '0px'
                setTimeout(() => {
                    document.getElementById('likeLoveFavorite').style.top = '-40px'

                    document.getElementById('likeLoveFavorite').style.display = 'none'
                }, 100);
            }

        }
    }, [])
    return (
        <div>

            <div data-likelovefavorite='true' className={styles.shareOption + ' z-10 hidden absolute bg-base-100 left-0 border top-[-40px] w-36 rounded-md hover:shadow-md shadow-lg p-2'} id='likeLoveFavorite'>
                <button className='btn btn-xs btn-secondary ml-2 btn-outline' data-likelovefavorite='true'>
                    <Like />
                </button>
                <button className='btn btn-xs btn-secondary ml-2 btn-outline' data-likelovefavorite='true'>
                    <Like style={{ transform: 'rotate(180deg)' }} />
                </button>
                <button className='btn btn-xs btn-secondary ml-2 btn-outline' data-likelovefavorite='true'>
                    <Like style={{ transform: 'rotate(180deg)' }} />
                </button>
            </div>


            <div className='flex items-center justify-between'>
                <div >
                    <button onClick={shareOptionShowHandle} onMouseEnter={handleLikeComponent} className='btn btn-xs btn-secondary ml-2 btn-outline'>
                        <Like size='18' />
                    </button>
                    <button className='btn btn-xs btn-secondary ml-2 btn-outline'>
                        <Like size='18' style={{ transform: 'rotate(180deg)' }} />
                    </button>
                </div>
                <div>
                    <button onClick={() => setShowCommentSection(!showComment)} className={(showComment ? 'btn-primary' : 'btn-outline') + ' btn btn-xs btn-secondary ml-2 '}>
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
        </div >
    );
};

export default LikeLoveFavorite;