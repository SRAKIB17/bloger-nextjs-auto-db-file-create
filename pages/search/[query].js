/* eslint-disable @next/next/no-img-element */
/* eslint-disable react-hooks/exhaustive-deps */
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import Header from '../../components/Header/Header';
import { useQuery } from 'react-query';
import axios from 'axios';
import LoadingFlowCircle from '../../components/LoadingFlowCircle';
import timeSince from '../../components/Post-NewsFeed/TimeSince';
import { Announcement, ArrowsRight, Camera, Line } from '../../components/ReactRSIcon';

const Search = () => {
    const router = useRouter()
    const { query } = router.query
    const { page } = router.query;
    const [shows, setShowPosts] = useState(10)
    const [getPage, setGetPage] = useState(1)

    useEffect(() => {
        const laptopSearchField = document.getElementById("laptopSearchField")
        laptopSearchField.value = query;
        try {
            const mobileSearchField = document.getElementById("mobileSearchField")
            mobileSearchField.value = query;
            console.log(mobileSearchField)
        }
        catch {

        }
    }, [])
    const pageHandle = () => {
        router.query.page = getPage + 1;
        setGetPage(getPage + 1)
        router.push(router)
        router.prefetch(router);
    }
    // const { data, refetch, isLoading } = useQuery(['userPost_id', cpage], () => axios.get(`/api/test?cat=${cat}&show=${shows}`))

    const { data, refetch, isLoading } = useQuery(['search', shows, page, query], () => axios.get(`/api/post/search?show=${shows * getPage}&query=${query}`,
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
        <div>
            <div>
                <Header />
            </div>
            <div className='min-h-screen overflow-auto bg-base-100 lg:ml-16'>

                {
                    // !isLoading || typeof getPost?.map === 'function'
                    !isLoading
                        ?
                        getPost?.map((post, index) => <ViewSearchResult key={post?._id} post={post} refetch={refetch} />)
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
        </div>
    );
};

export default Search;

const ViewSearchResult = ({ post }) => {
    const { _id, category, image, postBodyCss, postBodyJs, postBody, postRefMode, post_id, post_title, short_description, thumbnail, time, userID } = post

    const [showCommentState, setShowComment] = useState(null);

    const router = useRouter()
    const navigate = (path) => {
        router.push(path)
        router.prefetch(path)
    }
    const getTimeSince = timeSince(time);
    const userInfo = useQuery(['public_profile', userID], () => axios.get(`/api/public_user_details/${userID}`,
        {
            headers: { access_token: sessionStorage.getItem('accessAutoG') }
        }));
    const user_details = userInfo?.data?.data?.user_details;
    return (
        <div>
            <div>
                <div className="p-4 bg-base-200 shadow-md border-b-[2px] overflow-hidden">
                    <div className="">
                        <div className="text-center lg:text-left">
                            <div className={' w-full h-fit transition-all text-justify'} id={'postBody' + post_id} style={{ width: '100%' }}>
                                <div className='w-full'>
                                    <div className='float-left'>
                                        {/* ----thumbnail------------ */}
                                        {
                                            (postRefMode === 'text' && thumbnail) ?
                                                <div className='mr-4'>
                                                    <figure>
                                                        <img
                                                            src={thumbnail}
                                                            alt=""
                                                            className='w-[100px] h-[100px] rounded-md border-2'
                                                        />
                                                    </figure>
                                                </div>
                                                :
                                                <div className='mr-4'>
                                                    <Camera size='100' className="border-2 rounded-md" />
                                                </div>
                                        }
                                    </div>
                                    {/* style={{ width: '100%', wordWrap: "break-word", whiteSpace: 'pre-line' }} */}
                                    <div>
                                        <div>
                                            <div>
                                                <h1 className='text-2xl font-extrabold relative flex w-fit'>
                                                    {post_title}
                                                    {
                                                        post?.postBy === 'admin' &&
                                                        <div className='absolute top-[-10px] right-[-15px]'>
                                                            <Announcement size='10' className="badge h-[10px] text-white ml-[2px] pr-[2px] pl-[2px] badge-secondary text-[10px] font-extralight" />
                                                        </div>
                                                    }
                                                </h1>
                                                <div>
                                                    <h1 className='flex mr-[2px] items-center flex-wrap text-[11px]'>
                                                        <div className='text-[10px] flex items-center '>
                                                            <h2 className=' text-gray-500 '>
                                                                {
                                                                    getTimeSince
                                                                }
                                                            </h2>
                                                            <Line size='18' />
                                                            <h2
                                                                onClick={() => profileNavigate(`/profile/${userID}`)}
                                                                className="link-hover link-primary cursor-pointer"
                                                            >
                                                                {
                                                                    "by " + user_details?.name || 'User'
                                                                }


                                                            </h2>
                                                        </div>
                                                        <Line size='18' />
                                                        <div className='flex items-center'>
                                                            <button className='link-primary link-hover ' onClick={() => navigate(`?cat=${category}`)}>
                                                                {
                                                                    category
                                                                }
                                                            </button>
                                                            {/* ***************FOR TAG SERIAL************ */}
                                                            <ArrowsRight size='17' className='font-extrabold' />
                                                            <div className='flex flex-wrap'>
                                                                {
                                                                    (typeof post?.tags?.split === 'function') &&

                                                                    post?.tags?.split(',')?.map((tag, index) =>
                                                                        <>
                                                                            {
                                                                                index > 0 && <Line />
                                                                            }
                                                                            <button key={index + tag + category} className='link-primary link-hover ' onClick={() => navigate(`?cat=${category}&tag=${tag}`)}>
                                                                                {
                                                                                    tag
                                                                                }
                                                                            </button>
                                                                        </>
                                                                    )
                                                                }

                                                            </div>
                                                        </div>
                                                    </h1>
                                                </div>
                                            </div>
                                            {
                                                short_description?.slice(0, 300) + ' . . . . . . . .  . . . . .  . . .  .'
                                            }
                                            <button className='btn btn-xs btn-outline btn-secondary ml-4' onClick={() => navigate('/story/' + post_id)}>
                                                see full post
                                            </button>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}