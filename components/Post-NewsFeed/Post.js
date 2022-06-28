import React from 'react';
import PostMap from './PostMap';

const Post = ({ posts, refetch }) => {
    return (
        <div className='flex flex-col gap-2 sm:gap-3'>
            {
                posts && posts?.map((post, index) => <PostMap key={post?._id} post={post} refetch={refetch} />)
            }
        </div>
    );
};

export default Post;