/* eslint-disable react-hooks/exhaustive-deps */
import axios from 'axios';
import React, { useEffect, useId, useState } from 'react';
import { useQuery } from 'react-query'
const useUserCheck = () => {
    const jwt = require('jsonwebtoken');
    const [isLoading, setIsLoading] = useState(true);
    const [user, setUser] = useState({ user: false })
    const [user_details, setUserInfo] = useState(null)
    const [isAdmin, setIsAdmin] = useState({ admin: false })



    const jwtDecode = (token) => {
        try {
            return jwt.verify(token, 'dcab4733a9ce28bbb1a7a66d80a4097b')
        }
        catch (err) {
            return err;
        }
    }

    useEffect(() => {
        const run = async () => {
            setIsLoading(true)
            //GET USER EMAIL JWT TOKEN FROM LOCALSTORAGE
            try {
                const token = localStorage.getItem('token');
                const email = jwtDecode(token)?.jwtInfo?.email;

                //GET USER PASS CODE GET FROM COOKIES AND SPLIT , FIND PASS CODE
                const login_info = document.cookie.split(';').find(token => token.includes('login'))?.split('=')?.[1]
                const login_pass = jwtDecode(login_info)?.userInfo
                // IF EMAIL AND LOGIN_INFO GET THEN THIS CONDITION IS TRUE
                if (email && login_pass) {
                    const password = login_pass?.token;
                    const userId = login_pass?.userId;

                    // FORM SEND BACKEND API BY POST METHOD
                    const form = {
                        email: email,
                        password: password,
                        userId: userId
                    }

                    // eslint-disable-next-line react-hooks/rules-of-hooks
                    const { data } = await useQuery('userInfo', axios.post('/api/login_signup/check_user_auto_login', form, {
                        headers: {
                            'login_api_code': `dcab4733a9ce28bbb1a7a66d80a4097b`
                        }
                    }));
                    console.log(data)
                    //IF SUCCESS SET_USER TRUE
                    if (data?.success) {
                        setUserInfo(data?.user_details);
                        setIsAdmin(data?.user_details?.roll === 'admin' ? { admin: true } : { admin: false })
                        //for checkAdmin
                        setUser({ user: true });

                    }

                    //IF FAILED SET_USER TRUE
                    else {
                        setUser({ user: true });
                        // setUser({ user: false });
                    }
                }
                else {
                    setUser({ user: true });
                    // setUser({ user: false });
                }
                setIsLoading(null)
            }
            catch {
                setIsLoading(null)
            }
        }
        run().catch(console.dir)
        // console.log(login_info)
    }, [])

    return { user, isLoading, user_details, isAdmin }
};

export default useUserCheck;
