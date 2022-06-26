import React from 'react';
import { Like, Unlike } from '../ReactRSIcon/index'

const LikeLoveFevorite = () => {
    const handleLikeComponent = () => {
        alert('r5454')
    }
    return (
        <div className='flex items-center justify-between'>
            <div >
                <button onMouseEnter={handleLikeComponent} className='btn btn-xs btn-secondary ml-2 btn-outline'>
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
    );
};

export default LikeLoveFevorite;