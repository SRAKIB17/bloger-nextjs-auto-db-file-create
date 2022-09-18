import axios from 'axios';
import React, { useContext } from 'react';
import { useQuery } from 'react-query';
import { UserFullInfoProvider } from '../../../pages/_app';
import MapNotificationView from './MapNotificationView';

const Notification = () => {


    const { user, user_details, isLoading:userLoading, isAdmin } = useContext(UserFullInfoProvider);

    const { data, refetch, isLoading } = useQuery(['Inbox', user_details], () => axios.get(`/api/notification?user_id=${user_details?.userID}&email=${user_details?.email}`,
        {
            headers: {
                access_token: sessionStorage.getItem('accessAutoG'),
                token: localStorage.getItem('token')
            }
        }
    ))
    const notifications = data?.data;
    console.log(notifications)
    return (
        <div className='max-w-3xl mx-auto'>
            <div className='flex flex-col gap-3 mt-5 text-primary'>
                {
                    notifications?.map((notification, index) => <MapNotificationView notification={notification} key={index} />)
                }
            </div>
        </div>
    );
};

export default Notification;