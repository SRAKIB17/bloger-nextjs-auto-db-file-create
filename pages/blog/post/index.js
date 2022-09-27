import axios from 'axios';
import { useRouter } from 'next/router';
import React, { useContext, useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import AdsRightSide from '../../../components/Ads/AdsRightSide';
import Pagination from '../../../components/BLOG/hooks/Pagination';
import PostBody from '../../../components/BLOG/post/PostBody';
import Sad from '../../../components/BLOG/SvgComponent/Sad';
import PageTitle from '../../../components/hooks/PageTitle';
import LoadingSpin from '../../../components/LoadingSpin';
import { UserFullInfoProvider } from '../../_app';

const Index = () => {

    const router = useRouter()
    const { cat, tag, page } = router.query;
    const [shows, setShowPosts] = useState(4)
    const [getPage, setGetPage] = useState(1);

    useEffect(() => {
        if (page) {
            setGetPage(eval(page));
        }
    }, [page])

    // const { data, refetch, isLoading } = useQuery(['userPost_id', cpage], () => axios.get(`/api/test?cat=${cat}&show=${shows}`))

    const { data, refetch, isLoading } = useQuery(['userPostAll', cat, shows, tag, getPage, page], () => axios.get(`/api/post/post?cat=${cat}&show=${shows}&tag=${tag}&page=${getPage}`,
        {
            headers: { access_token: sessionStorage.getItem('accessAutoG') }
        }
    ))

    // const posts = data?.data?.result
    const posts = data?.data?.posts || [];

    const count = data?.data?.count;

    const [getPost, setPost] = useState([]);
    useEffect(() => {
        if (posts?.length > 0) {
            setPost(posts)
        }
    }, [posts])
    const { title } = PageTitle()

    const [lastPage, setLastPage] = useState(4)
    useEffect(() => {
        const divided = Math.ceil(count / shows);
        setLastPage(divided);
    }, [count, shows])

    const pageHandle = (jump) => {
        router.query.page = jump;
        router.push(router)
        setGetPage(eval(jump))
        router.push(router)
        router.prefetch(router);
    }

    const { user, user_details, isLoading: userLoading, isAdmin } = useContext(UserFullInfoProvider);
    if (userLoading) {
        return <div className='min-h-screen'>
            <LoadingSpin />
        </div>
    }
    return (
        <div className='grid grid-cols-12 pt-1'>
            <div className='col-span-12  lg:col-span-8  2xl:col-span-8 mb-20'>
                <div className='flex flex-col gap-4 min-h-screen'>

                    {
                        (isLoading && posts?.length > 0) ?
                            <div>
                                <LoadingSpin />
                            </div>
                            :
                            <>
                                {
                                    getPost?.map((post, index) => <PostBody post={post} key={index} refetch={refetch} />)
                                }
                                <div className={((isLoading && getPost?.length == 0) ? " " : ' shadowEachPost ') + ' rounded-sm     p-4'}>

                                    {/* ********** NOT FOUND ************ */}
                                    {
                                        !isLoading && getPost?.length == 0 &&
                                        <div className='text-2xl flex justify-center items-center text-gray-400 h-80'>
                                            <div className='flex items-center gap-4'>
                                                <Sad />
                                                <span>
                                                    No post found
                                                </span>
                                            </div>
                                        </div>
                                    }
                                    {/* *******************PAGINATION************ */}
                                    {
                                        isLoading ?
                                            <div className='mt-10'>
                                                <LoadingSpin />
                                            </div>
                                            :
                                            getPost?.length == 0 ||
                                            <Pagination
                                                lastPage={lastPage}
                                                page={getPage}
                                                pageHandle={pageHandle}
                                            />
                                    }
                                </div>
                            </>
                    }

                </div>
            </div>
            <div className='hidden ml-2 pl-4 shadow-md lg:block col-span-12 lg:col-span-4  2xl:col-span-4 text-justify'>
                <AdsRightSide />
            </div>
        </div>
    );
};

export default Index;