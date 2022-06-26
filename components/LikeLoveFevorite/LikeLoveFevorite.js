import React from 'react';
import { Like, Unlike } from '../ReactRSIcon/index'

const LikeLoveFevorite = () => {
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
    return (
        <div className='relative'>
            <div className='absolute top-0 bg-base-100 w-full hidden z-[1000]' id='likeLoveFavorite'>
                <button className='btn btn-xs btn-secondary ml-2 btn-outline'>
                    <Like />
                </button>
                <button className='btn btn-xs btn-secondary ml-2 btn-outline'>
                    <Like style={{ transform: 'rotate(180deg)' }} />
                </button>
            </div>
            <div className='flex items-center justify-between'>
                <div >
                    <button onMouseLeave={handleLikeComponent} onMouseEnter={handleLikeComponent} className='btn btn-xs btn-secondary ml-2 btn-outline'>
                        <Like />
                    </button>
                    <button className='btn btn-xs btn-secondary ml-2 btn-outline'>
                        <Like style={{ transform: 'rotate(180deg)' }} />
                    </button>
                    <button className='btn btn-xs btn-secondary ml-2 btn-outline'>b-3</button>
                </div>
                <div>
                    <button className='btn btn-xs btn-secondary ml-2 btn-outline'>b-2</button>
                    <button className='btn btn-xs btn-secondary ml-2 btn-outline'>b-2</button>
                </div>
                <div>
                    <button className='btn btn-xs btn-secondary ml-2 btn-outline'>b-2</button>
                    <button className='btn btn-xs btn-secondary ml-2 btn-outline'>b-2</button>
                </div>
            </div>
        </div>
    );
};

export default LikeLoveFevorite;