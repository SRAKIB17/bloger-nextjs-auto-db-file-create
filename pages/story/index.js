import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import Header from '../../components/Header/Header';
import Post from '../../components/Post-NewsFeed/Post';
import RightMenu from '../../components/Story/RightMenu';
import { useRouter } from 'next/router'
import LoadingSpin from '../../components/LoadingSpin'
import Login from '../../components/Login/Login';
import LoadingFlowCircle from '../../components/LoadingFlowCircle';

const Index = () => {
    const router = useRouter()
    const { cat, tag } = router.query;
    const [shows, setShowPosts] = useState(10)
    const { data, refetch, isLoading } = useQuery(['userPost_id', cat, shows], () => axios.get(`/api/post/newpost?cat=${cat}&tag=${tag}&show=${shows}`))

    // const { data, refetch, isLoading } = useQuery(['userPost_id', cat, shows], () => axios.get(`/api/test?cat=${cat}&show=${shows}`))

    const posts = data?.data?.result
    // const posts = data?.data
    const [getPost, setPost] = useState([])
    useEffect(() => {
        if (posts) {
            setPost(posts)
        }
    }, [posts])
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [cat, tag])

    return (
        <div className='h-[100vh]'>
            <Header />

            <div className='grid grid-cols-12 gap-2'>
                <div className='hidden sm:block sm:col-span-4 md:col-span-4 text-justify lg:ml-16 p-1 relative bg-base-100'>
                    <div className='fixed h-[100vh] overflow-auto sm:w-[200px] md:max-w-[300px] lg:max-w-[350px] md:w-full'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, cumque adipisci nisi possimus nostrum porro atque temporibus rerum repellat. Maxime, cupiditate! Fuga nobis velit animi voluptatem quam quo ea rerum!
                    </div>
                </div>

                <div className='col-span-12 sm:mr-3 md:mr-0 sm:col-start-5 sm:col-end-[-1] md:col-span-8 lg:col-span-5' id='storyScroll'>

                    <Post posts={getPost} refetch={refetch} />

                    {
                        isLoading ||
                        <div className=" p-4 mt-2 text-center w-full bg-base-100">
                            <button
                                className='btn btn-primary lg:btn-sm btn-xs w-32 btn-outline mb-4'
                                onClick={() => setShowPosts(shows + 10)}
                            >
                                Next
                            </button>
                        </div>
                    }
                    {
                        (isLoading && getPost.length === 0) &&
                        <div className='flex flex-col justify-between pt-40 bg-base-100 h-[100vh] items-center'>
                            <div>
                                <LoadingFlowCircle />
                            </div>
                        </div>
                    }
                    {
                        (isLoading && getPost.length !== 0) && <div className='flex flex-col justify-between pt-4 bg-base-100 pb-4 items-center'>
                            
                            <div>
                                <LoadingFlowCircle />
                            </div>
                        </div>
                    }

                </div>

                <div className=' col-span-3 hidden lg:block relative bg-base-100 p-3'>
                    <div className='fixed h-full overflow-auto text-justify p-2'>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Index;