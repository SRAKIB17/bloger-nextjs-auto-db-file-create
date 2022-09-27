/* eslint-disable @next/next/no-img-element */
import React from 'react';

const LoadingPost = () => {
    return (
        <div className='flex flex-col gap-4'>
            <div>
                <img src="/post_loading.gif" alt="" className='w-full'/>
            </div>
            <div>
                <img src="/post_loading.gif" alt="" className='w-full'/>
            </div>
            <div>
                <img src="/post_loading.gif" alt="" className='w-full'/>
            </div>
        </div>
    );
};

export default LoadingPost;