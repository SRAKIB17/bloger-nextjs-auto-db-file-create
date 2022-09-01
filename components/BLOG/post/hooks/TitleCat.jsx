import { useRouter } from 'next/router';
import React from 'react';
import { Line } from '../../../ReactRSIcon';
import timeAgoSince from '../../hooks/function/timeAgoSince';

const TitleCat = ({ post }) => {
    const router = useRouter()
    const { post_title, category, time, userID, post_id } = post
    const timeAgo = timeAgoSince(time)


    const badge = [' btn-primary', ' btn-secondary', ' btn-accent', ' btn-info', ' btn-warning', ' btn-accent', ' btn-success'];
    const navigate = (path) => {
       router.replace(path)
    }

    return (
        <div>
            <div className='flex items-center gap-1 flex-wrap'>
                <button className='btn btn-secondary text-white  btn-xs font-extralight '>
                    {category}
                </button>


                <span className='flex flex-wrap text-2xs gap-1'>
                    {
                        (typeof post?.tags?.split === 'function') &&

                        post?.tags?.split(',')?.map((tag, index) =>
                            <>
                                <button
                                    key={index + tag + category}
                                    className=
                                    {'btn text-white  btn-xs font-extralight '
                                        +
                                        badge[Math.floor(Math.random() * badge.length)]
                                    }
                                    onClick={() => {
                                        if ("pathCheck") {
                                            navigate(`/story/?cat=${category}&tag=${tag}`)

                                        }
                                        else {
                                            navigate(`?cat=${category}&tag=${tag}`)
                                        }
                                    }}
                                >
                                    {
                                        tag
                                    }
                                </button>
                            </>
                        )
                    }
                </span>
            </div>
            <div>
                <div className='p-2'>
                    <h1 className='text-gray-700 text-xl sm:text-2xl'>
                        <button onClick={() => navigate(`/blog/post/${post_id}`)}>
                            {post_title}
                        </button>
                    </h1>
                    <div className=' opacity-80 text-sm flex items-center gap-2'>
                        <span>
                            {timeAgo}
                        </span>
                        <b className='font-extrabold'>.</b>
                        <span className='flex items-center'>
                            posted by
                            <p className='ml-1 link-primary link-hover'>
                                Rakib
                            </p>
                        </span>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default TitleCat;