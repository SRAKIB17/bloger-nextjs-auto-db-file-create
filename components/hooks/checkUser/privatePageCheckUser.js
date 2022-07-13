/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react';
import { useRouter, withRouter } from 'next/router';
import useUserCheck from './useUserCheck';
import LoadingSpin from '../../LoadingSpin';


const usePrivatePageCheckUser = (backPath) => {

    const router = useRouter()
    /* --------------------------path router navigate--------------------*/
    try {
        const navigate = (path) => {
            router.push(path)
            router.prefetch(path)
        }
        const { user, isLoading } = useUserCheck()
        if (isLoading) {
            return <LoadingSpin/>
        }
        if (!user.user) {
            navigate('/login?return_url=' + backPath)
        }

    }
    catch {

    }
    return 0
};

export default usePrivatePageCheckUser;