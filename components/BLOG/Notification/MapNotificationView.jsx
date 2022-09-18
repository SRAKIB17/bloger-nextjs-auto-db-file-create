/* eslint-disable @next/next/no-html-link-for-pages */
import axios from 'axios';
import React from 'react';
import { useQuery } from 'react-query';
import { Comment, Delete, Emoji, EmoticonLove, Like, NewsFeed, PreviewOn, WarningTriangleFilled, Writing } from '../../ReactRSIcon';
import Reply from '../hooks/comment_react/comment_replies/svg/Reply';
import timeAgoSince from '../hooks/function/timeAgoSince';
import Three_dots_vertical from '../post/hooks/Option/Three_dots_vertical';

const MapNotificationView = ({ notification }) => {
    const { userID, message, notifyFor, time, actionID, notifyURL } = notification;
    const timeSinceAgo = timeAgoSince(time);

    const { data } = useQuery(['public_profile', actionID], () => axios.get(`/api/public_user_details/${actionID}`,
        {
            headers: { access_token: sessionStorage.getItem('accessAutoG') }
        }));

    const userInfo = (data?.data?.user_details);

    const DeleteNotificationHandle = () => {
        console.log(34534534)
    }
    // REMOVE_WARNING
    return (
        <div>
            <div className='relative '>
                <a
                    href={notifyURL}
                    className="bg-base-200 p-4 block rounded-sm btn-ghost w-full"
                >
                    <span className='flex items-center justify-start gap-2 text-primary'>
                        {
                            notifyFor == "WARNING" &&
                            <WarningTriangleFilled size='20' color='red' />
                        }

                        {
                            notifyFor == "EDIT" &&
                            <Writing size='20' color='green' />
                        }
                        {
                            notifyFor == "DELETE" &&
                            <Delete size='20' color='red' />
                        }
                        {
                            notifyFor == "LOVE" &&
                            <>
                                <EmoticonLove size='20' color='red' />
                                <span>
                                    {userInfo?.name || 'Someone'}
                                </span>
                            </>
                        }
                        {
                            notifyFor == "LIKE" &&
                            <>
                                <Like color='#0081FE' size='20' />
                                <span>
                                    {userInfo?.name || 'Someone'}
                                </span>
                            </>
                        }
                        {
                            notifyFor == "UNLIKE" &&
                            <>
                                <Like color='#FE3C71' size='20' style={{ transform: 'rotate(180deg)' }} />
                                <span>
                                    {userInfo?.name || 'Someone'}
                                </span>
                            </>
                        }
                        {
                            notifyFor == "COMMENT" &&
                            <Comment color='#FE3C71' size='20' />
                        }
                        {
                            notifyFor == "REPLY" &&
                            <Reply size='20' color='#2BD566' />
                        }
                        {
                            notifyFor == "WELCOME" &&
                            <Emoji color='#FE3C71' size='20' />
                        }
                        <span className='text-[16px] md:text-[18px] text-left block'>
                            {message}
                        </span>
                    </span>
                    <span className='block text-left text-xs m-1'>
                        {timeSinceAgo}
                    </span>
                </a>

                <button
                    className=" absolute btn-ghost btn right-3 top-5 rounded-md"
                    onClick={() => DeleteNotificationHandle()}
                >
                    <Delete color='red' size='20' />
                </button>

            </div>
        </div>
    );
};

export default MapNotificationView;