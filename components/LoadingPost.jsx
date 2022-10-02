/* eslint-disable @next/next/no-img-element */
import React from 'react';

const LoadingPost = () => {
    return (
        <div className='flex flex-col gap-4 p-2'>
            <div>
                <img src="/post_loading.gif" alt="" className='w-full h-56 -z-10 '/>
            </div>
            <div>
                <img src="/post_loading.gif" alt="" className='w-full h-56 -z-10' />
            </div>
            <div>
                <img src="/post_loading.gif" alt="" className='w-full h-56 -z-10'/>
            </div>
        </div>
    );
};

export default LoadingPost;