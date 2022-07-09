import React from 'react';
import { useRouter, withRouter } from 'next/router';
import useUserCheck from './useUserCheck';


const usePrivatePageCheckUser = () => {
    const router = useRouter()
    /* --------------------------path router navigate--------------------*/
    const navigate = (path) => {
        router.push(path)
        router.prefetch(path)
    }
    const { user } = useUserCheck()
    if (!user.user) {
        navigate('/login')
    }
};

export default usePrivatePageCheckUser;