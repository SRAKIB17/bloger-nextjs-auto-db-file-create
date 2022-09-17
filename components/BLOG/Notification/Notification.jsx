import React from 'react';
import MapNotificationView from './MapNotificationView';

const Notification = () => {
    const notifications = [
        {
            userID: '53453455',
            notifyURL: '34vsdm5645',
            message: 'Someone like your post',
            notifyFor: 'COMMENT',
            actionID: '543554',
            time: new Date()
        },
        {
            userID: '53453455',     
            notifyURL: '34vsdm5645',
            message: 'Someone like your post',
            notifyFor: 'WARNING',
            actionID: '543554',
            time: new Date()
        },
        {
            userID: '53453455',
            notifyURL: '34vsdm5645',
            message: 'Someone like your post',
            notifyFor: 'EDIT',
            actionID: '543554',
            time: new Date()
        },
        {
            userID: '53453455',
            notifyURL: '34vsdm5645',
            message: 'Someone like your post',
            notifyFor: 'DELETE',
            actionID: '543554',
            time: new Date()
        },
        {
            userID: '53453455',
            notifyURL: '34vsdm5645',
            message: 'Someone like your post',
            notifyFor: 'UNLIKE',
            actionID: '543554',
            time: new Date()
        },
        {
            userID: '53453455',
            notifyURL: '34vsdm5645',

            message: 'Someone like your post',
            notifyFor: 'LOVE',
            actionID: '543554',
            time: new Date()
        },
        {
            userID: '53453455',
            notifyURL: '34vsdm5645',
            message: 'Someone like your post',
            notifyFor: 'LIKE',
            actionID: '543554',
            time: new Date()
        },
        {
            userID: '53453455',
            notifyURL: '34vsdm5645',
            message: 'Someone like your post',
            notifyFor: 'WELCOME',
            actionID: '543554',
            time: new Date()
        },
        {
            userID: '53453455',
            notifyURL: '34vsdm5645',
            message: 'Someone like your post',
            notifyFor: 'REPLY',
            actionID: '543554',
            time: new Date()
        },
    ]
    return (
        <div className='max-w-3xl mx-auto'>
            <div className='flex flex-col gap-3 mt-5'>
                {
                    notifications?.map((notification, index) => <MapNotificationView notification={notification} key={index} />)
                }
            </div>
        </div>
    );
};

export default Notification;