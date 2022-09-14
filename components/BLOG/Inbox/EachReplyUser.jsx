/* eslint-disable @next/next/no-img-element */
import React from 'react';
import timeAgoSince from '../hooks/function/timeAgoSince';

const EachReplyUser = ({ messageBody, user_details }) => {
    const { adminId, support_id, userID, adminReply, message, time } = messageBody;

    const getTimeSince = timeAgoSince(time);

    return (
        <div>
            <div className=' flex justify-start items-start mt-2 mb-2 w-full'>
                <div className="w-5 h-5  border-gray-400 overflow-hidden mr-1">
                    {
                        (user_details?.profile == '' || !user_details?.profile) ?
                            <img
                                src={user_details?.gender == 'Female' ? 'femaleAvatar.png' : "maleAvatar.png"}
                                alt=''
                                className='w-full bg-base-100 rounded-full border-2'
                            />
                            :
                            <img
                                src={user_details?.profile}
                                alt=''
                                className='w-full bg-base-100 rounded-full border-2'
                            />
                    }
                </div>

                <div className='bg-base-200  p-3 w-full max-w-[80%] shadow-inner rounded-lg rounded-br-3xl'>
                    {
                        messageBody?.emoji &&
                        <div>
                            <img src={messageBody?.emoji} alt="" className='h-auto max-w-[128px]' />
                        </div>
                    }
                    <div className='text-sm'>
                        <div dangerouslySetInnerHTML={{ __html: message }}></div>
                    </div>
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
            <div className='pl-4'>
                <p className='text-[10px] '>
                    {
                        time && getTimeSince
                    }
                </p>
            </div>
        </div>
    );
};

export default EachReplyUser;