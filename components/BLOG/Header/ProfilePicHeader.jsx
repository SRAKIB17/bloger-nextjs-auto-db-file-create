import { useRouter } from 'next/router';
import React from 'react';

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
                    <button className="justify-between " onClick={() => navigate('/profile')}>
                        Profile
                        <span className="badge">New</span>
                    </button>
                </li>
                <li><a>Settings</a></li>
                <li><a>Logout</a></li>
            </ul>
        </div>
    );
};

export default ProfilePicHeader;