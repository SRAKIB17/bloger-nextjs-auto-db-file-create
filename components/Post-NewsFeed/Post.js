import React from 'react';
import PostMap from './PostMap';

const Post = () => {

    return (
        <div className='flex flex-col gap-2 sm:gap-3'>
            {
                [...Array(10).keys()].map(a=><PostMap key={a}/>)
            }
        </div>
    );
};

export default Post;