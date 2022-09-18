import axios from 'axios';
import React from 'react';
import { useQuery } from 'react-query';
import MapNotificationView from './MapNotificationView';

const Notification = () => {
    const post_id = 5345345343;
    const notificationsf = [
        {
            userID: '53453455',
            notifyURL: '/blog/post/' + post_id,
            message: 'Someone comment your post',
            notifyFor: 'COMMENT',
            actionID: '543554',
            time: new Date()
        },
        {
            userID: '53453455',
            notifyURL: '/inbox',
            message: 'Admin has warned you. See details',
            notifyFor: 'WARNING',
            actionID: '543554',
            time: new Date()
        },
        {
            userID: '53453455',
            notifyURL: '/inbox',
            message: 'Admin is editing your post. See details',
            notifyFor: 'EDIT',
            actionID: '543554',
            time: new Date()
        },
        {
            userID: '53453455',
            notifyURL: '/inbox',
            message: 'Admin is deleting your post. See details',
            notifyFor: 'DELETE',
            actionID: '543554',
            time: new Date()
        },
        {
            userID: '53453455',
            notifyURL: '/blog/post/' + post_id,
            message: 'Someone has given a unlike reaction to your post',
            notifyFor: 'UNLIKE',
            actionID: '543554',
            time: new Date()
        },
        {
            userID: '53453455',
            notifyURL: '/blog/post/' + post_id,
            message: 'Someone has given a love reaction to your post',
            notifyFor: 'LOVE',
            actionID: '543554',
            time: new Date()
        },
        {
            userID: '53453455',
            notifyURL: '/blog/post/' + post_id,
            message: 'Someone has given a like reaction to your post',
            notifyFor: 'LIKE',
            actionID: '543554',
            time: new Date()
        },
        {
            userID: '53453455',
            notifyURL: '/inbox',
            message: 'Welcome user. You can now access all features. See details',
            notifyFor: 'WELCOME',
            actionID: '543554',
            time: new Date()
        },
        {
            userID: '53453455',
            notifyURL: '/blog/post/' + post_id,
            message: 'Someone replied to a comment on your post',
            notifyFor: 'REPLY',
            actionID: '543554',
            time: new Date()
        },
    ]
    const user_details = {}
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