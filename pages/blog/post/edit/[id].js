import axios from 'axios';
import { useRouter } from 'next/router';
import React from 'react';
import { useQuery } from 'react-query';
import EditPost from '../../../../components/BLOG/post/EditPost/EditPost';
import LoadingPost from '../../../../components/LoadingPost';

const Index = () => {
    const router = useRouter()
    const { id } = router.query;
    const { data, refetch, isLoading } = useQuery(['find-specific-story', id], () => axios.get(`/api/post/find-specific-story?post_id=${id}`,
        {
            headers: { access_token: sessionStorage.getItem('accessAutoG') }
        }
    ))
    const post = data?.data || {}
    return (
        <div>
            <div>
                {
                    isLoading &&
                    <div className='min-h-screen'>
                        <LoadingPost />
                    </div>
                }
                <div>
                    {
                        isLoading ||
                        <div>
                            <EditPost post={post} />
                        </div>
                    }
                </div>
            </div>
        </div>
    );
};

export default Index;

