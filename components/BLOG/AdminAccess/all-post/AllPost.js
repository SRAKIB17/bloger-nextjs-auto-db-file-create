/* eslint-disable react-hooks/exhaustive-deps */
import axios from 'axios';
import { useRouter } from 'next/router';
import React, { useContext, useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { UserFullInfoProvider } from '../../../pages/_app';
import LoadingFlowCircle from '../../LoadingFlowCircle';
import LoadingSpin from '../../LoadingSpin';
import ViewPost from './ViewPost';

const AllPost = () => {
    const { user, user_details, isLoading, isAdmin } = useContext(UserFullInfoProvider);
    const [page, setPage] = useState(1)
    const [limit, setLimit] = useState(10)
    const { data, isLoading: adminPostAllLoading, refetch } = useQuery(['AllPOST', page, limit, user_details], () => axios.get(`/api/admin/all-post/?show=${page * limit}&email=${user_details?.email}`,
        {
            headers: {
                access_token: sessionStorage.getItem('accessAutoG'),
                token: localStorage.getItem('token')
            }
        }
    ))
    const router = useRouter()
    const postList = data?.data?.result || []
    const [getAllPost, setGetAllPost] = useState([]);
    useEffect(() => {
        if (postList?.length > 0) {
            setGetAllPost(postList)
        }
    }, [postList])

    const pageHandle = () => {
        router.query.page = page + 1;
        setPage(page + 1)
        router.push(router)
        router.prefetch(router);
    }
    return (
        <div className='overflow-auto min-h-screen'>
            <div>
                <div>
                    {
                        getAllPost?.map(post => <ViewPost key={post.post_id} post={post} refetch={refetch} isLoadingAbout={adminPostAllLoading} />)
                    }

                    {
                        adminPostAllLoading ||
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
                        (adminPostAllLoading && getAllPost.length === 0) &&
                        <div className='flex flex-col justify-between pt-40 bg-base-100 h-[100vh] items-center'>
                            <div>
                                <LoadingSpin />
                            </div>
                        </div>
                    }
                    {
                        (adminPostAllLoading && getAllPost.length !== 0) && <div className='flex flex-col justify-between pt-4 bg-base-100 pb-4 items-center'>

                            <div>
                                <LoadingFlowCircle />
                            </div>
                        </div>
                    }
                </div>
            </div>
        </div>
    );
};

export default AllPost;