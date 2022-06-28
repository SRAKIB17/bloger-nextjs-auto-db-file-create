import axios from 'axios';
import React, { useEffect } from 'react';
import { useQuery } from 'react-query';
import Header from '../../components/Header/Header';
import Post from '../../components/Post-NewsFeed/Post';
import RightMenu from '../../components/Story/RightMenu';
import { useRouter } from 'next/router'
import LoadingSpin from '../../components/LoadingSpin';

const Index = () => {
    const router = useRouter()
    const { cat } = router.query;

    const { data, refetch, isLoading } = useQuery('userPost_id', () => axios.get(`/api/post/newpost?cat=${cat}`))
    const posts = data?.data?.result
    if (isLoading) {
        return <LoadingSpin />
    }
    refetch()
    return (
        <div>
            <Header />
            <div className='grid grid-cols-12 gap-2'>
                <div className='hidden sm:block sm:col-span-4 md:col-span-4 text-justify lg:ml-16 p-1 relative bg-base-100'>
                    <div className='fixed h-[100vh] overflow-auto sm:w-[200px] md:max-w-[300px] lg:max-w-[350px] md:w-full'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, cumque adipisci nisi possimus nostrum porro atque temporibus rerum repellat. Maxime, cupiditate! Fuga nobis velit animi voluptatem quam quo ea rerum!
                    </div>
                </div>

                <div className='col-span-12 sm:mr-3 sm:col-start-5 sm:col-end-[-1] md:col-span-8 lg:col-span-5'>
                    <Post posts={posts} refetch={refetch} />
                </div>

                <div className=' col-span-3 hidden lg:block relative bg-base-100 p-3'>
                    <div className='fixed h-full overflow-auto text-justify p-2'>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium omnis ipsam repellat hic soluta explicabo consequuntur? Sed nobis dolore sit, minus illum ipsam laboriosam neque, voluptatem, deleniti voluptate amet praesentium?
                        <RightMenu />

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Index;