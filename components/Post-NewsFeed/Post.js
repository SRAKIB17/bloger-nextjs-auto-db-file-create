import React from 'react';
import PostMap from './PostMap';

const Post = ({ posts }) => {
    console.log(posts)
    return (
        <div className='flex flex-col gap-2 sm:gap-3'>
            {
                posts?.map((post, index) => <PostMap key={index} post={post} />)
            }
        </div>
    );
};

export default Post;