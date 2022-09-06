/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from 'react';

const PostTheme = () => {
    const [postTheme, setPostTheme] = useState('')
    useEffect(() => {
        const postTheme = localStorage.getItem('postTheme')
        setPostTheme(postTheme)
    }, [])


    const savePostThemeHandle = (e) => {
        e.preventDefault()
        localStorage.setItem('postTheme', e.target.postTheme.value)
        alert('save change')
    }
    return (
        <div>
            <form onSubmit={savePostThemeHandle}>

                <div className=" m-6 flex flex-col gap-4">

                    <div className='flex gap-3 flex-col'>
                        <div className='flex items-center gap-2'>
                            <input
                                type="radio"
                                name="postTheme"
                                id='default'
                                className="radio radio-accent"
                                checked value='default' />
                            <label htmlFor="default">
                                Default
                            </label>
                        </div>
                        <div className='ml-4'>
                            <img src='/settings/post/theme/default.png' alt="" className='w-full md:max-w-md border rounded-sm h-full' />
                        </div>
                    </div>




                    <div className='flex gap-3 flex-col'>
                        <div className='flex items-center gap-2'>
                            <input
                                type="radio"
                                name="postTheme"
                                id='Post with body'
                                className="radio radio-accent"
                                checked value='post_with_body'
                            />
                            <label htmlFor="Post with body">
                                Post with body
                            </label>
                        </div>
                        <div className='ml-4'>
                            <img src='/settings/post/theme/post with body.png' alt="" className='w-full md:max-w-md border rounded-sm h-full' />
                        </div>
                    </div>

                    <div>
                        <button className='btn btn-primary btn-sm text-white'>
                            Save
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default PostTheme;