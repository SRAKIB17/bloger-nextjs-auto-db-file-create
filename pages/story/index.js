import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import Header from '../../components/Header/Header';
import Post from '../../components/Post-NewsFeed/Post';
import RightMenu from '../../components/Story/RightMenu';
import { useRouter } from 'next/router'
import LoadingSpin from '../../components/LoadingSpin';

const Index = () => {
    const router = useRouter()
    const { cat } = router.query;
    const [shows, setShowPosts] = useState(3)
    const { data, refetch, isLoading } = useQuery(['userPost_id', cat, shows], () => axios.get(`/api/post/newpost?cat=${cat}&show=${shows}`))
    const posts = data?.data?.result
    const [getPost, setPost] = useState([])
    useEffect(() => {

        if (posts) {
            setPost(posts)
        }
    }, [posts])
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [cat])
    // useEffect(() => {
    //     const loadMorePost = (e) => {
    //         try {
    //             const storyScroll = document.getElementById('storyScroll')
    //             const scrollWindow = document.body.parentNode.scrollTop;
    //             const aa = scrollWindow - storyScroll.clientHeight + window.innerHeight + 300
    //             const getBodyOffsetHeight = document.documentElement.offsetHeight - window.innerHeight
    //             console.log(storyScroll.offsetHeight, getBodyOffsetHeight)
    //             if (aa >= 0) {
    //                 console.log(34534)
    //                 // window.scrollTo(0, scrollWindow - 300)
    //                 setShowPosts(shows + 2)
    //             }
    //             // else if (getBodyOffsetHeight > storyScroll.offsetHeight) {
    //             //     console.log(535)
    //             //     setShowPosts(shows + 5)
    //             // }
    //         }
    //         catch {

    //         }
    //     }

    //     window.onscroll = (e) => {
    //         loadMorePost(e)
    //     }
    //     window.onwheel = (e) => {
    //         loadMorePost(e)
    //     }
    // }, [cat,shows])
    return (
        <div>
            <Header />
            <div className='grid grid-cols-12 gap-2 bg-base-100'>
                <div className='hidden sm:block sm:col-span-4 md:col-span-4 text-justify lg:ml-16 p-1 relative bg-base-100'>
                    <div className='fixed h-[100vh] overflow-auto sm:w-[200px] md:max-w-[300px] lg:max-w-[350px] md:w-full'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, cumque adipisci nisi possimus nostrum porro atque temporibus rerum repellat. Maxime, cupiditate! Fuga nobis velit animi voluptatem quam quo ea rerum!
                    </div>
                </div>

                <div className='col-span-12 sm:mr-3 sm:col-start-5 sm:col-end-[-1] md:col-span-8 lg:col-span-5' id='storyScroll'>

                    <Post posts={getPost} refetch={refetch} />
                    
                    {
                        isLoading ||
                        <div className=" p-4 text-center">
                            <button
                                className='btn btn-primary btn-xs w-32 btn-outline mb-4'
                                onClick={() => setShowPosts(shows + 10)}
                            >
                                Next
                            </button>
                        </div>
                    }
                    {
                        isLoading &&
                        <div className='flex justify-center mt-40 p-5 h-[100vh]'>
                            <div className='animate-spin text-center border-r-4 w-40 h-40 rounded-[50%] border-red-600'>
                            </div>
                        </div>
                    }
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