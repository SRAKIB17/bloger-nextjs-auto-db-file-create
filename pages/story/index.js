/* eslint-disable react-hooks/exhaustive-deps */
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import Header from '../../components/Header/Header';
import Post from '../../components/Post-NewsFeed/Post';
import { useRouter } from 'next/router'
import LoadingSpin from '../../components/LoadingSpin'
import Login from '../../components/Login/Login';
import LoadingFlowCircle from '../../components/LoadingFlowCircle';
import RightSideLg from '../../components/Post-NewsFeed/RightSideLg';
import LeftSideLg from '../../components/Post-NewsFeed/LeftSideLg';
import PostMap from '../../components/Post-NewsFeed/PostMap';

const Index = () => {
    const router = useRouter()
    const { cat, tag, page } = router.query;
    const [shows, setShowPosts] = useState(10)
    const [getPage, setGetPage] = useState(1)

    const pageHandle = () => {
        router.query.page = getPage + 1;
        setGetPage(getPage + 1)
        router.push(router)
        router.prefetch(router);
    }
    // const { data, refetch, isLoading } = useQuery(['userPost_id', cpage], () => axios.get(`/api/test?cat=${cat}&show=${shows}`))

    const { data, refetch, isLoading } = useQuery(['userPostAll', cat, shows, tag, page], () => axios.get(`/api/post/story?cat=${cat}&show=${shows * getPage}&tag=${tag}`,
        {
            headers: { access_token: sessionStorage.getItem('accessAutoG') }
        }
    ))

    // const posts = data?.data?.result
    const posts = data?.data || []
    const [getPost, setPost] = useState([]);
    useEffect(() => {
        if (posts?.length > 0) {
            setPost(posts)
        }
    }, [posts])

    return (
        <div className='h-[100vh]'>
            <Header />



            <div className='grid grid-cols-12 gap-2'>
                <div className='hidden md:block sm:col-span-4 md:col-span-4 lg:col-span-3 text-justify lg:ml-16 p-1 relative bg-base-100'>
                    <div className=''>
                        {/* <div className='fixed h-[100vh] overflow-auto sm:w-[200px] md:w-full lg:max-w-[350px] lg:pr-[8rem] md:max-w-[300px] md:pr-[7rem]'> */}
                        <LeftSideLg />
                    </div>
                </div>

                <div className='col-span-12 md:mr-0 sm:col-end-[-1] md:col-span-8 lg:col-span-7' id='storyScroll'>

                    {
                        // !isLoading || typeof getPost?.map === 'function'
                        !isLoading
                            ?
                            getPost?.map((post, index) => <PostMap key={post?._id} post={post} refetch={refetch} />)
                            :
                            ''
                    }

                    {
                        isLoading ||
                        <div className=" p-4 mt-2 text-center w-full bg-base-100">
                            <button
                                className='btn btn-primary lg:btn-sm btn-xs w-32 btn-outline mb-4'
                                onClick={() => pageHandle()}
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