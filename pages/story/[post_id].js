import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import Header from '../../components/Header/Header';
import { useRouter } from 'next/router'
import LoadingSpin from '../../components/LoadingSpin'
import Login from '../../components/Login/Login';
import LoadingFlowCircle from '../../components/LoadingFlowCircle';
import RightSideLg from '../../components/Post-NewsFeed/RightSideLg';
import PostMap from '../../components/Post-NewsFeed/PostMap';

const Index = () => {
    const router = useRouter();
    const { post_id } = router.query;
    // find-specific-story
    const { data, refetch, isLoading } = useQuery(['find-specific-story', post_id], () => axios.get(`/api/post/find-specific-story?post_id=${post_id}`,
        {
            headers: { access_token: sessionStorage.getItem('accessAutoG') }
        }
    ))
    const post = data?.data || {}
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <div className='h-[100vh] '>
            <Header />

            <div className='grid grid-cols-12'>
                <div className='lg:ml-[70px] col-span-12 lg:col-span-10 lg:mr-1' id='storyScroll'>

                    {
                        isLoading &&
                        <div className='relative flex flex-col justify-center items-center'>
                            <div className='absolute top-14 z-[10]'>
                                <LoadingFlowCircle />
                            </div>
                        </div>
                    }
                    <PostMap key={post_id} post={post} />

                </div>

                <div className='col-span-2 bg-base-100'>
                    <div className='fixed h-full overflow-auto text-justify p-2'>
                        <RightSideLg />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Index;