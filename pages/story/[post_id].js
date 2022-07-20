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
        <div className='h-[100vh]'>
            <Header />

            <div className='grid grid-cols-12 gap-2'>
                <div className='hidden sm:block sm:col-span-4 md:col-span-4 text-justify lg:ml-16 p-1 relative bg-base-100'>
                    <div className='fixed h-[100vh] overflow-auto sm:w-[200px] md:max-w-[300px] lg:max-w-[350px] md:w-full'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, cumque adipisci nisi possimus nostrum porro atque temporibus rerum repellat. Maxime, cupiditate! Fuga nobis velit animi voluptatem quam quo ea rerum!
                    </div>
                </div>

                <div className='col-span-12 sm:mr-3 md:mr-0 sm:col-start-5 sm:col-end-[-1] md:col-span-8 lg:col-span-6' id='storyScroll'>
                    <PostMap key={post_id} post={post} />
                </div>

                <div className=' col-span-2 hidden lg:block relative bg-base-100 p-3'>
                    <div className='fixed h-full overflow-auto text-justify p-2'>
                        <RightSideLg />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Index;