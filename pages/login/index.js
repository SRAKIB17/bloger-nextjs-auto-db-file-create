/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react';
import Header from '../../components/Header/Header';
import Home from '../../components/Home/Home';
import useUserCheck from '../../components/hooks/checkUser/useUserCheck';
import Login from '../../components/Login/Login';
import avat from '../../public/loginAvatar.png'
import { useRouter } from 'next/router';
import LoadingSpin from '../../components/LoadingSpin';

const index = () => {
    const { user, isLoading } = useUserCheck()
    const router = useRouter();
    const { return_url } = router.query
    const navigate = (path) => {
        router.push(path)
        router.prefetch(path)
    }
    if (isLoading) {
        return (
            <div className='bg-base-100 h-full w-full'>
                <LoadingSpin />
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