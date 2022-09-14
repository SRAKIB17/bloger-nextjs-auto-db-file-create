/* eslint-disable @next/next/no-img-element */
import axios from 'axios';
import React, { useEffect } from 'react';
import { useQuery } from 'react-query';
import EachReplyOwner from './EachReplyOwner';
import EachReplyUser from './EachReplyUser';


const EachMessageBody = ({ messageBody }) => {
    const { adminId, support_id, userID, adminReply, message, time } = messageBody;

    // const onloadMessageSupport = (id) => {
    //     const iframe = document.getElementById('supportInboxMsgBody' + id);
    //     iframe.style.height = iframe.contentWindow.document.documentElement.scrollHeight + 'px';
    //     iframe.contentWindow.document.body.style.textAlign = 'justify'
    // }
    const getProfileIcon = adminReply ? adminId : userID
    const inboxUserInfo = useQuery(['inboxUserIdMessageBody', getProfileIcon], () => axios.get(`/api/public_user_details/${getProfileIcon}`,
        {
            headers: { access_token: sessionStorage.getItem('accessAutoG') }
        }));
    const user_details = inboxUserInfo?.data?.data?.user_details;
    const isLoading = inboxUserInfo.isLoading;
    return (
        <div>
            <div className='w-full text-sm' id='supportInboxBody'>
                {
                    // adminReply &&
                    <div className='flex flex-col'>
                        <EachReplyUser messageBody={messageBody} user_details={user_details} />
                    </div>
                }
                {
                    // adminReply ||
                    <div>
                        <EachReplyOwner
                            messageBody={messageBody}
                            user_details={user_details} />
                    </div>

                }
            </div>
        </div>
    );
};


export default EachMessageBody;