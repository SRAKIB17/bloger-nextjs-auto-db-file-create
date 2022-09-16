/* eslint-disable @next/next/no-img-element */
/* eslint-disable react-hooks/exhaustive-deps */
import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { useQuery } from 'react-query';

import { useRouter } from 'next/router';
import LoadingSpin from '../../../LoadingSpin';
import LoadingFlowCircle from '../../../LoadingFlowCircle';
import ViewUser from './ViewUser';
import { UserFullInfoProvider } from '../../../../pages/_app';

const AllUser = () => {
    const { user, user_details, isLoading, isAdmin } = useContext(UserFullInfoProvider);
    const [page, setPage] = useState(1)
    const [limit, setLimit] = useState(20)
    const { data, isLoading: adminUserListLoading, refetch } = useQuery(['adminALlUser', page, limit, user_details], () => axios.get(`/api/admin/all-user/?show=${page * limit}&email=${user_details?.email}`,
        {
            headers: {
                access_token: sessionStorage.getItem('accessAutoG'),
                token: localStorage.getItem('token')
            }
        }
    ))
    const router = useRouter()
    const userList = data?.data?.result || []
    const [getUsers, setUsers] = useState([]);
    useEffect(() => {
        if (userList?.length > 0) {
            setUsers(userList)
        }
    }, [userList])

    const pageHandle = () => {
        router.query.page = page + 1;
        setPage(page + 1)
        router.push(router)
        router.prefetch(router);
    }
    return (
        <div className='overflow-auto min-h-screen '>
            <div>
                <div>
                    {
                        getUsers?.map(user => <ViewUser key={user?.userID} user={user} refetch={refetch} isLoadingAbout={adminUserListLoading} />)
                    }

                    {
                        adminUserListLoading ||
                        <div className=" p-4 mt-2 text-center w-full bg-base-100">
                            <button
                                className='btn btn-primary lg:btn-sm btn-xs w-32 btn-outline mb-4'
                                onClick={() => pageHandle()}
                            >
                                Next
                            </button>
                        </div>
                    }
                    {
                        (adminUserListLoading && getUsers.length === 0) &&
                        <div className='flex flex-col justify-between pt-40 bg-base-100 h-[100vh] items-center'>
                            <div>
                                <LoadingSpin />
                            </div>
                        </div>
                    }
                    {
                        (adminUserListLoading && getUsers.length !== 0) && <div className='flex flex-col justify-between pt-4 bg-base-100 pb-4 items-center'>

                            <div>
                                <LoadingFlowCircle />
                            </div>
                        </div>
                    }
                </div>
            </div>
        </div>
    );
};




export default AllUser;
