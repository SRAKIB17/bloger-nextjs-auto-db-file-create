/* eslint-disable react-hooks/rules-of-hooks */
import React, { useContext } from 'react';
import { useRouter, withRouter } from 'next/router';
import LoadingSpin from '../../LoadingSpin';
import { UserFullInfoProvider } from '../../../pages/_app';


const usePrivatePageCheckUser = (backPath) => {

    const router = useRouter()
    /* --------------------------path router navigate--------------------*/
    try {
        const navigate = (path) => {
            router.push(path)
            router.prefetch(path)
        }
        const { user, user_details, isLoading } = useContext(UserFullInfoProvider)

        if (isLoading) {
            return <LoadingSpin />
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