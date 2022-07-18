/* eslint-disable react-hooks/rules-of-hooks */
import React, { useContext } from 'react';
import { useRouter, withRouter } from 'next/router';
import LoadingSpin from '../../LoadingSpin';
import { UserFullInfoProvider } from '../../../pages/_app';
import private_access_token_client from '../api/verifyUser/private_access_token_client';
import logOutWhenGetErr from '../api/verifyUser/log-out-when-get-err';
const jwt = require('jsonwebtoken');


const usePrivatePageCheckUser = (backPath) => {
    const { logOutHandler } = logOutWhenGetErr()
    const router = useRouter();
    const { login_api_token } = private_access_token_client()
    const jwtDecode = (token) => {
        try {
            return jwt.verify(token, login_api_token)
        }
        catch (err) {
            return err;
        }
    }
    /* --------------------------path router navigate--------------------*/
    try {
        const { user, user_details, isLoading } = useContext(UserFullInfoProvider);
        const token = localStorage.getItem('token');
        const email = jwtDecode(token)?.jwtInfo?.email;

        const navigate = (path) => {
            router.push(path)
            router.prefetch(path)
        }

        if (isLoading) {
            return <LoadingSpin />
        }
        if (!user.user || (user_details?.email !== email)) {
            logOutHandler()
            location.reload()
            navigate('/login?return_url=' + backPath)
        }

    }
    catch {

    }
    return 0
};

export default usePrivatePageCheckUser;