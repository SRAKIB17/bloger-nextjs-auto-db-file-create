/* eslint-disable @next/next/no-img-element */
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import ReactBtnList from '../../hooks/comment_react/react/ReactBtnList';
import TitleCat from '../hooks/TitleCat';

const Default = ({ post, refetch }) => {

    const { _id, comments, category, image, postBodyCss, postBodyJs, postBody, postRefMode, post_id, post_title, short_description, thumbnail, time, userID } = post


    useEffect(() => {
        window.onclick = () => {
            try {
                const iframes = document.getElementsByTagName('iframe');
                for (const iframe of iframes) {
                    iframe.style.height = iframe.contentWindow.document.documentElement.scrollHeight + 'px'
                }
            }
            catch {

            }
        }
    }, [])
    const [showDescription, setDescription] = useState(short_description?.slice(0, 120))
    const showFullDescriptionHandle = () => {
        setDescription(showDescription?.length <= 120 ? short_description : short_description?.slice(0, 120))
    }

    const router = useRouter()
    return (
        <div className=' shadowEachPost rounded-sm p-4 sm:p-5 bg-gray-50' >

            <div className='flex flex-col md:flex-row gap-4 items-center'>
                <img
                    src={Boolean(thumbnail) ? thumbnail : '/blogThumbnailDefault.svg'}
                    alt=""
                    className=' postBodyThumbnail'
                />

                <div className='postDescription'>
                    <TitleCat
                        post={post}
                    />
                    <div className='text-justify  ml-3'>
                        <div>
                            {showDescription}
                            {(showDescription?.length > 120) && 

                                <div>
                                    <button
                                        className='relative overflow-hidden w-full btn-lg bg-[#ebebeb] rounded-sm'
                                        onClick={() => router.replace(`/blog/post/${post_id}`)}
                                    >
                                        Continue Reading
                                        <p className='absolute top-0 opacity-10 text-justify overflow-hidden whitespace-pre-line'>
                                            {showDescription}
                                        </p>
                                    </button>
                                </div>
                            }
                            <button onClick={showFullDescriptionHandle} className='text-blue-500 link-hover text-sm'>
                                &nbsp;  show {' ' + ((showDescription?.length <= 120) ? ' more' : 'less')}
                            </button>

                        </div>
                    </div>

                    <div className='mt-2'>
                        <ReactBtnList post={post} refetch={refetch} />
                    </div>
                </div>
            </div >
        </div >
    );
};

export default Default;