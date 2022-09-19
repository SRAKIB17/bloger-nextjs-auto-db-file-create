import axios from 'axios';
import React, { useContext, useState } from 'react';
import { useQuery } from 'react-query';
import { UserFullInfoProvider } from '../../../pages/_app';
import LoadingSpin from '../../LoadingSpin';
import { Delete } from '../../ReactRSIcon';
import MapNotificationView from './MapNotificationView';

const Notification = () => {


    const { user, user_details, isLoading: userLoading, isAdmin } = useContext(UserFullInfoProvider);

    const { data, refetch, isLoading } = useQuery(['NOTIFICATIONS', user_details], () => axios.get(`/api/notification?user_id=${user_details?.userID}&email=${user_details?.email}`,
        {
            headers: {
                access_token: sessionStorage.getItem('accessAutoG'),
                token: localStorage.getItem('token')
            }
        }
    ))
    const notifications = data?.data;

    const [clear_notificationLoading, setNotificationClear] = useState(false)

    const deleteAllNotificationHandle = async () => {
        setNotificationClear(true)
        const data = await axios.delete(`/api/notification/clear_notification?user_id=${user_details?.userID}&email=${user_details?.email}`,
            {
                headers: {
                    access_token: sessionStorage.getItem('accessAutoG'),
                    token: localStorage.getItem('token')
                }
            }
        )
        refetch()
        const result = data?.data
        if (result?.acknowledged) {
            refetch()
            setNotificationClear(false)
        }
        else {
            alert('something is wrong')
        }
        setNotificationClear(false)
    }
    return (
        <div className='max-w-3xl mx-auto'>
            <div className='flex flex-col gap-3 mt-5 text-primary'>
                <div className='flex justify-end'>
                    {
                        clear_notificationLoading ?
                            <span

                                className='btn cursor-pointer text-red-600 flex gap-1 items-center btn-ghost capitalize btn-sm'
                            >
                                <span>
                                    <Delete />
                                </span>
                                <span>
                                    Clear Notification
                                </span>
                                <span className='absolute'>
                                    <p className='border-r-2 border-b-2 border-primary h-5 w-5 rounded-full animate-spin'>

                                    </p>
                                </span>
                            </span>
                            :
                            <button
                                onClick={() => deleteAllNotificationHandle()}
                                className='btn text-red-600 flex gap-1 items-center btn-ghost capitalize btn-sm'
                            >
                                <span>
                                    <Delete />
                                </span>
                                <span>
                                    Clear Notification
                                </span>
                            </button>}
                </div>
                {
                    isLoading ?
                        <div className='mt-4'>
                            <LoadingSpin />
                        </div>
                        :
                        notifications?.map((notification, index) => <MapNotificationView notification={notification} refetch={refetch} key={index} />)
                }
            </div>
        </div>
    );
};

export default Notification;