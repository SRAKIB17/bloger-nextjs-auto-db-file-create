/* eslint-disable @next/next/no-img-element */
import { useRouter } from 'next/router';
import React from 'react';
import { Setting } from '../../ReactRSIcon';

const ProfilePicHeader = () => {
    const router = useRouter()
    const navigate = path => {
        router.replace(path)
    }

    
    return (
        <div>
            <label tabIndex="0" className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                    <img src="https://placeimg.com/80/80/people" />
                </div>
            </label>
            <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                <li>
                    <button
                        className='flex gap-2 '
                        onClick={() => navigate('settings')}
                    >
                        <span>
                            <img src="/svg/profile.svg" alt="" className='w-4' />
                        </span>
                        <span>
                            Profile
                        </span>
                    </button>
                </li>

                <li>
                    <button
                        className='buttonSpin flex gap-2 '
                        onClick={() => navigate('settings')}
                    >
                        <span>
                            <img src="/svg/setting_interface_gear.svg" alt="" className='w-4' />
                        </span>
                        <span>
                            Support Inbox
                        </span>
                    </button>
                </li>
                <li>
                    <button
                        className='buttonSpin flex gap-2 '
                        onClick={() => navigate('settings')}
                    >
                        <span>
                            <img src="/svg/setting_interface_gear.svg" alt="" className='w-4' />
                        </span>
                        <span>
                            New Post
                        </span>
                    </button>
                </li>
                <li>
                    <button
                        className='buttonSpin flex gap-2 '
                        onClick={() => navigate('settings')}
                    >
                        <span>
                            <img src="/svg/setting_interface_gear.svg" alt="" className='w-4' />
                        </span>
                        <span>
                            Announcement
                        </span>
                    </button>
                </li>
                <li>
                    <button
                        className='buttonSpin flex gap-2 '
                        onClick={() => navigate('settings')}
                    >
                        <span>
                            <img src="/svg/setting_interface_gear.svg" alt="" className='w-4' />
                        </span>
                        <span>
                            Settings
                        </span>
                    </button>
                </li>
                <li>
                    <button
                        className=' flex gap-2 '
                        onClick={() => navigate('settings')}
                    >
                        <span>
                            <img src="/svg/log-out.svg" alt="" className='w-4' />
                        </span>
                        <span>
                            Log out
                        </span>
                    </button>
                </li>

            </ul>
        </div>
    );
};

export default ProfilePicHeader;