import axios from 'axios';
import React from 'react';
import { useQuery } from 'react-query';
import Header from '../../components/Header/Header';
import Post from '../../components/Post-NewsFeed/Post';
import RightMenu from '../../components/Story/RightMenu';

const Index = () => {
    const { data } = useQuery('userPost_id', () => axios.get('/api/test'))
    console.log(data)
    const post = data?.data?.filter((post, index, arr) => {
        if (post?.postRefMode === 'video') {
            return arr;
        }

    })
    return (
        <div>
            <Header />
            <div className='grid grid-cols-12 gap-3'>
                <div className='hidden sm:block sm:col-span-4 md:col-span-4 text-justify lg:ml-16 p-1 relative bg-base-100'>
                    <div className='fixed h-[100vh] overflow-auto sm:w-[200px] md:max-w-[300px] lg:max-w-[350px] md:w-full'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, cumque adipisci nisi possimus nostrum porro atque temporibus rerum repellat. Maxime, cupiditate! Fuga nobis velit animi voluptatem quam quo ea rerum!
                    </div>
                </div>

                <div className='col-span-12 sm:mr-3 sm:col-start-5 sm:col-end-[-1] md:col-span-7 lg:col-span-6'>
                    <Post posts={post} />
                </div>

                <div className=' col-span-2 hidden lg:block relative'>
                    <div className='fixed h-full overflow-auto text-justify pr-3'>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium omnis ipsam repellat hic soluta explicabo consequuntur? Sed nobis dolore sit, minus illum ipsam laboriosam neque, voluptatem, deleniti voluptate amet praesentium?
                        <RightMenu />

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Index;