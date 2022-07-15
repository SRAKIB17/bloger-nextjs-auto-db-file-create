/* eslint-disable react-hooks/rules-of-hooks */
import React, { useContext } from 'react';
import Header from '../../components/Header/Header';
import Login from '../../components/Login/Login';
import { useRouter } from 'next/router';
import LoadingSpin from '../../components/LoadingSpin';
import { UserFullInfoProvider } from '../_app';

const index = () => {
    const { user, user_details, isLoading } = useContext(UserFullInfoProvider)
    
    const router = useRouter();
    const { return_url } = router.query
    const navigate = (path) => {
        router.push(path)
        router.prefetch(path)
    }
    if (isLoading) {
        return (
            <div className='bg-base-100 h-[100vh] w-full'>
                <Header />
                <div className='mt-40'>
                    <LoadingSpin />
                </div>
            </div>
        )
    }
    if (return_url && user?.user) {
        navigate(return_url)
    }
    else if (!return_url && user?.user) {
        navigate('/')
    }
    return (
        <div className='w-full h-full bg-base-100'>
            <Header />
            {
                user?.user ||
                <Login />
            }

        </div>
    );
};

export default index;