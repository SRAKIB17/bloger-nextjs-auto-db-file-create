/* eslint-disable react/no-unescaped-entities */
import React from 'react';

const DeletePost = ({ props: { deletePost, setDeletePost } }) => {
    return (
        <div className='h-60 w-full z-[30] absolute top-0 left-0 rounded-lg bg-base-300'>
            <div className='flex flex-col items-center justify-between mx-auto mt-20'>
                <h1 className='text-2xl text-warning'> Are You Sure?</h1>
                <div className='flex gap-4 mt-9'>
                    <button className='btn btn-sm bg-[#ff0000] text-white'>
                        Delete
                    </button>
                    <button className='btn btn-sm bg-[#00ff00] text-white'>
                        Cancel
                    </button>
                </div>
            </div>
        </div >
    );
};

export default DeletePost;