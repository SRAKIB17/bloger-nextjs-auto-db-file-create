/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react';
import { useRouter, withRouter } from 'next/router';
import useUserCheck from './useUserCheck';


const usePrivatePageCheckUser = (backPath) => {
    console.log(backPath)
    const router = useRouter()
    /* --------------------------path router navigate--------------------*/
    try {
        const navigate = (path) => {
            router.push(path)
            router.prefetch(path)
        }
        const { user } = useUserCheck()
        if (!user.user) {
            navigate('/login?red_url=' + backPath)
        }
       
    }
    catch {

    }
    return 0
};

export default usePrivatePageCheckUser;