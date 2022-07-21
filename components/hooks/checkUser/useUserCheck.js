/* eslint-disable react-hooks/exhaustive-deps */
import axios from 'axios';
import React, { useEffect, useId, useState } from 'react';

const useUserCheck = () => {
    const jwt = require('jsonwebtoken');
    const [isLoading, setIsLoading] = useState(true);
    const [user, setUser] = useState({ user: false })
    const [user_details, setUserInfo] = useState(null)
    const [isAdmin, setIsAdmin] = useState({ admin: false })



    useEffect(() => {
        const run = async () => {
            setIsLoading(true)
            //GET USER EMAIL JWT TOKEN FROM LOCALSTORAGE
            try {
                const token = localStorage.getItem('token');
                //GET USER PASS CODE GET FROM COOKIES AND SPLIT , FIND PASS CODE
                const login_info = document.cookie.split(';').find(token => token.includes('login'))?.split('=')?.[1]
                // IF EMAIL AND LOGIN_INFO GET THEN THIS CONDITION IS TRUE
                if (token && login_info) {
                    // FORM SEND BACKEND API BY POST METHOD
                    const form = {
                        token: token,
                        login_info: login_info
                    }

                    const { data } = await axios.post('/api/login_signup/check_user_auto_login', form,
                        {
                            headers: { access_token: sessionStorage.getItem('accessAutoG') }
                        });

                    //IF SUCCESS SET_USER TRUE
                    if (data?.success) {
                        setUserInfo(data?.user_details);
                        setIsAdmin(data?.user_details?.roll === 'admin' ? { admin: true } : { admin: false })
                        //for checkAdmin
                        setUser({ user: true });

                    }

                    //IF FAILED SET_USER TRUE
                    else {
                        // setUser({ user: true });
                        setUser({ user: false });
                    }
                }
                else {
                    // setUser({ user: true });
                    setUser({ user: false });
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
