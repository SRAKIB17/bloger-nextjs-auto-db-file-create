/* eslint-disable @next/next/no-img-element */
import axios from 'axios';
import React, { useEffect } from 'react';
import { useQuery } from 'react-query';
import maleAvatar from '../../public/maleAvatar.png'
import femaleAvatar from '../../public/femaleAvatar.png'


const MessageBody = ({ messageBody }) => {
    const { adminId, support_id, userID, adminReply, message } = messageBody;

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
    console.log(messageBody)
    const user_details = inboxUserInfo?.data?.data?.user_details;
    const isLoading = inboxUserInfo.isLoading;
    return (
        <div>
            <div className='w-full' id='supportInboxBody'>
                {
                    adminReply &&
                    <div>
                        <div className=' flex justify-start items-start mt-2 mb-2 w-full'>
                            <div className="w-[16px] rounded-full border-2 border-gray-400 overflow-hidden">
                                {
                                    (user_details?.profile == '' || !user_details?.profile) ?
                                        <img
                                            src={user_details?.gender == 'Female' ? femaleAvatar.src : maleAvatar?.src}
                                            alt=''
                                            className='w-full bg-base-100'
                                        />
                                        :
                                        <img
                                            src={user_details?.profile}
                                            alt=''
                                        />
                                }
                            </div>

                            <div className='bg-base-200  p-3 w-full max-w-[80%] shadow-inner rounded-lg rounded-br-3xl'>
                                {
                                    messageBody?.emoji &&
                                    <div>
                                        <img src={messageBody?.emoji} alt="" />
                                    </div>
                                }
                                <div dangerouslySetInnerHTML={{ __html: message }}></div>
                                {/* <iframe
                                    data-supportibox='true'
                                    onLoad={() => onloadMessageSupport(userID + support_id)}
                                    scrolling='no'
                                    className='w-fit  text-center block '
                                    id={'supportInboxMsgBody' + (userID + support_id)}
                                    srcDoc={message}
                                    src="/api/preview"
                                    frameBorder="0"
                                ></iframe> */}
                            </div>
                        </div>
                    </div>
                }
                {
                    adminReply ||
                    <div>


                        <div className='relative flex w-full justify-end mt-1 mb-1 items-start'>
                            <div className='bg-base-200 flex p-3 shadow-inner w-full max-w-[80%]  rounded-lg rounded-bl-3xl'>
                                {/* <iframe
                                    onLoad={() => onloadMessageSupport(userID + support_id)}
                                    scrolling='no'
                                    className='w-fit overflow-auto'
                                    id={'supportInboxMsgBody' + (userID + support_id)}
                                    srcDoc={message}
                                    src="/api/preview"
                                    frameBorder="0"
                                ></iframe> */}
                                {/* <div dangerouslySetInnerHTML={{ __html: message }}></div> */}
                                <div className='break-words overflow-hidden text-sm'>
                                    {
                                        messageBody?.emoji &&
                                        <div className='pb-[2px]'>
                                            <img src={messageBody?.emoji} alt="" />
                                        </div>
                                    }
                                    {message}
                                </div>
                            </div>
                            <div className="avatar ml-1 mt-4">
                                <div className="w-[16px] rounded-full border-2 border-gray-400 overflow-hidden">
                                    {
                                        (user_details?.profile == '' || !user_details?.profile) ?
                                            <img
                                                src={user_details?.gender == 'Female' ? femaleAvatar.src : maleAvatar?.src}
                                                alt=''
                                                className='w-full bg-base-100'
                                            />
                                            :
                                            <img
                                                src={user_details?.profile}
                                                alt=''
                                            />
                                    }
                                </div>
                            </div>
                        </div>
                    </div>

                }
            </div>
        </div>
    );
};

export default MessageBody;