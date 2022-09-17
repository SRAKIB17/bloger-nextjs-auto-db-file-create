import React from 'react';
import { Comment, Delete, Emoji, EmoticonLove, Like, NewsFeed, PreviewOn, WarningTriangleFilled, Writing } from '../../ReactRSIcon';
import Reply from '../hooks/comment_react/comment_replies/svg/Reply';
import timeAgoSince from '../hooks/function/timeAgoSince';
import Three_dots_vertical from '../post/hooks/Option/Three_dots_vertical';

const MapNotificationView = ({ notification }) => {
    const { userID, notifyID, message, notifyFor, time, actionID } = notification;
    const timeSinceAgo = timeAgoSince(time)
    return (
        <div>
            <div className='relative '>
                <button className="bg-base-200 p-4 rounded-sm btn-ghost w-full">
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
                            <EmoticonLove size='20' color='red' />
                        }
                        {
                            notifyFor == "LIKE" &&
                            <Like color='#0081FE' size='20' />
                        }
                        {
                            notifyFor == "UNLIKE" &&
                            <Like color='#FE3C71' size='20' style={{ transform: 'rotate(180deg)' }} />
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
                </button>

                <div className="dropdown absolute dropdown-left">
                    <label tabIndex={0} className=" absolute btn-ghost btn right-10 top-[18px] rounded-md">
                        <Three_dots_vertical size='20' />
                    </label>
                    <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-sm w-52">
                        <li>
                            <button>
                                <Delete color='red' />
                                Delete
                            </button>
                        </li>
                        <li>
                            <button>
                                <PreviewOn size='20' color='gold' />
                                View
                            </button>
                        </li>
                    </ul>
                </div>

            </div>
        </div>
    );
};

export default MapNotificationView;