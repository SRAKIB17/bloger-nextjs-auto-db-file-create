import axios from 'axios';
import { useRouter } from 'next/router';
import React from 'react';
import { useQuery } from 'react-query';
import { Announcement, Line } from '../../../ReactRSIcon';
import timeAgoSince from '../../hooks/function/timeAgoSince';
import WarningUserProfile from '../../hooks/WarningUserProfile';
import OptionList from './Option/OptionList';

const TitleCat = ({ post, refetch }) => {
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
    const user_details = userInfo?.data?.data?.user_details;
    const commentUserLoading = userInfo?.isLoading;
    const path = router?.asPath?.split('/')
    const pathCheck = (path?.length == 4 && path[2] == 'post')

    return (
        <div className='flex flex-col justify-start items-start md:green'>
            <div className='flex items-center gap-[2px] sm:gap-1 flex-wrap pl-1 text-secondary'>
                <button className='btn btn-ghost btn-xs  link-hover   '
                    onClick={() => {
                        if (pathCheck) {
                            navigate(`/blog/post/?cat=${category}`);

                        }
                        else {
                            navigate(`?cat=${category}`);
                        }
                    }}
                >
                    {category}
                </button>


                <span className='flex flex-wrap text-xs gap-1'>
                    {
                        (typeof post?.tags?.split === 'function') &&

                        post?.tags?.split(',')?.map((tag, index) =>
                            <>
                                <p className='font-extrabold font-extrabold'>
                                    .
                                </p>
                                <button
                                    key={index + tag + category}
                                    className=' btn btn-ghost btn-xs   link-hover  '
                                    onClick={() => {
                                        if (pathCheck) {
                                            navigate(`/blog/post/?cat=${category}&tag=${tag}`)

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
            <div className='flex justify-between items-center w-full'>
                <div className='p-2'>
                    <span className='flex gap-[2px]'>
                        {
                            !pathCheck ?
                                <a
                                    // onClick={() => navigate(`/blog/post/${post_id}`)}
                                    href={`/blog/post/${post_id}`}
                                    target='_blank'
                                    className='sm:text-lg xl:text-xl text-left link-hover text-blue-600' rel="noreferrer"
                                >
                                    {post_title}
                                </a>
                                :
                                <span className='sm:text-lg xl:text-xl text-left  link-primary' rel="noreferrer"
                                >
                                    {post_title}
                                </span>
                        }
                        {
                            post?.postBy === 'admin' &&
                            <Announcement size='8' className="badge h-[10px] p-0 ml-1 text-white badge-primary pl-[2px] pr-[2px] text-[10px] font-extralight" />
                        }
                    </span>
                    <div className='mt-1 opacity-80 text-2xs sm:text-sm flex items-center gap-2'>
                        <span>
                            {timeAgo}
                        </span>
                        <b className='font-extrabold'>.</b>
                        <span className='flex items-center'>
                            posted by
                            <p className='ml-1 link-primary link-hover text-blue-800 btn btn-ghost btn-xs'>
                                <button onClick={() => navigate('/profile/' + userID)} >
                                    {user_details?.name ? user_details?.name : 'User'}
                                </button>
                                <WarningUserProfile user_details={user_details} size='12' />
                            </p>
                        </span>
                    </div>
                </div>

                <div>
                    <OptionList post={post} refetch={refetch} />
                </div>
            </div>
        </div >
    );
};

export default TitleCat;