/* eslint-disable @next/next/no-img-element */
/* eslint-disable react-hooks/exhaustive-deps */
import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import About from '../../PublicProfile/About';

import { useRouter } from 'next/router';
import { UserFullInfoProvider } from '../../../pages/_app';
import LoadingSpin from '../../LoadingSpin';
import ViewUser from './ViewUser';

const AllUser = () => {
    const { user, user_details, isLoading, isAdmin } = useContext(UserFullInfoProvider);
    const [page, setPage] = useState(1)
    const [limit, setLimit] = useState(5)
    const { data, isLoading: adminUserListLoading } = useQuery(['adminALlUser', page, limit, user_details], () => axios.get(`/api/admin/all-user/?show=${page * limit}&email=${user_details?.email}`,
        {
            headers: {
                access_token: sessionStorage.getItem('accessAutoG'),
                token: localStorage.getItem('token')
            }
        }
    ))
    const userList = data?.data?.result || []
    const [getPost, setPost] = useState([]);
    useEffect(() => {
        if (userList?.length > 0) {
            setPost(userList)
        }
    }, [userList])
    return (
        <div>
            <div>
                <div>
                    {
                        adminUserListLoading ? <LoadingSpin /> :
                            getPost?.map(user => <ViewUser key={user?.userID} user={user} isLoadingAbout={adminUserListLoading} />)
                    }
                </div>
            </div>
        </div>
    );
};




export default AllUser;
