import axios from 'axios';
import { useRouter } from 'next/router';
import React from 'react';
import { useQuery } from 'react-query';
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

    const userInfo = useQuery(['public_profile', userID], () => axios.get(`/api/public_user_details/${userID}`,
        {
            headers: { access_token: sessionStorage.getItem('accessAutoG') }
        }));
    const comment_user_details = userInfo?.data?.data?.user_details;
    const commentUserLoading = userInfo?.isLoading;

    return (
        <div>
            <div className='flex items-center gap-1 flex-wrap pl-1'>
                <button className='btn btn-secondary text-white  btn-sm font-extralight '>
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
                                    {'btn text-white  btn-sm font-extralight '
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
                    <h1 className='text-gray-700 sm:text-xl text-left'>
                        <button onClick={() => navigate(`/blog/post/${post_id}`)}>
                            {post_title}
                        </button>
                    </h1>
                    <div className=' opacity-80 text-2xs sm:text-sm flex items-center gap-2 pl-2'>
                        <span>
                            {timeAgo}
                        </span>
                        <b className='font-extrabold'>.</b>
                        <span className='flex items-center'>
                            posted by
                            <p className='ml-1 link-primary link-hover'>
                                <button onClick={() => navigate('/profile/' + comment_user_details?.userID)}>
                                    {comment_user_details?.name ? comment_user_details?.name : 'User'}
                                </button>
                            </p>
                        </span>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default TitleCat;