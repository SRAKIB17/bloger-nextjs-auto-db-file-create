import axios from 'axios';
import React, { useState } from 'react';
import { useQuery } from 'react-query';
import { useRouter } from 'next/router'
import LoadingFlowCircle from '../LoadingFlowCircle';
import RightSideLg from '../Post-NewsFeed/RightSideLg';
import PostMap from '../Post-NewsFeed/PostMap';
import LeftSideLg from '../Post-NewsFeed/LeftSideLg';
import LeftSideNoticeComponent from './LeftSideNoticeComponent';


const Notice = () => {
    const router = useRouter()
    const { cat, tag } = router.query;
    const navigate = (path) => {
        router.push(path);
        router.prefetch(path);
    }
    const [shows, setShowPosts] = useState(10)

    const { data, refetch, isLoading } = useQuery(['adminPost', cat, shows], () => axios.get(`/api/post/admin-post?cat=${cat}&show=${shows}`,
        {
            headers: { access_token: sessionStorage.getItem('accessAutoG') }
        }
    ))
    const adminPost = data?.data;

    return (

        <div className='grid grid-cols-12 gap-2'>
            <div className='hidden sm:block sm:col-span-4 md:col-span-4 lg:col-span-4 text-justify lg:pl-16 p-1 relative bg-base-100'>
                <div className='absolute h-[100vh] overflow-auto sm:w-[200px] md:max-w-[300px] lg:max-w-[350px] md:w-full'>
                    <LeftSideNoticeComponent />
                </div>
            </div>

            <div className='col-span-12 sm:mr-3 md:mr-0 sm:col-start-5 sm:col-end-[-1] md:col-span-8 lg:col-span-5' id='storyScroll'>
                {
                    isLoading || typeof adminPost?.map === 'function'
                        ?
                        adminPost?.map((post, index) => <PostMap key={post?._id} post={post} refetch={refetch} />)
                        :
                        ''
                }

                {
                    isLoading ||
                    <div className=" p-4 mt-2 text-center w-full bg-base-100">
                        <button
                            className='btn btn-primary lg:btn-sm btn-xs w-32 btn-outline mb-4'
                            onClick={() => navigate('/admin/')}
                        >
                            See All
                        </button>
                    </div>
                }
                {
                    (isLoading && adminPost?.length === 0) &&
                    <div className='flex flex-col justify-between pt-40 bg-base-100 h-[100vh] items-center'>
                        <div>
                            <LoadingFlowCircle />
                        </div>
                    </div>
                }
                {
                    (isLoading && adminPost?.length !== 0) && <div className='flex flex-col justify-between pt-4 bg-base-100 pb-4 items-center'>

                        <div>
                            <LoadingFlowCircle />
                        </div>
                    </div>
                }
            </div>

            <div className=' col-span-3 hidden lg:block relative bg-base-100 p-3'>
                <div className='absolute h-full overflow-auto text-justify p-2'>
                    <RightSideLg />
                </div>
            </div>
        </div>
    );
};

export default Notice;