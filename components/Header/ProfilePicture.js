import React, { useState } from 'react';

const ProfilePicture = () => {
    const [showMenuProfile, setShowMenuProfile] = useState(false)
    const ProfilePictureHandle = (e) => {
        const getProfileMenu = document.getElementById('profileLogOut');
        getProfileMenu.style.right = '5px'
    }
    return (
        <div>
            <div>
                <ul className="menu menu-horizontal p-0 flex items-center md:absolute md:right-0 md:top-0">

                    <li onMouseEnter={ProfilePictureHandle} onClick={ProfilePictureHandle} data-profile='profileLogOut'>
                        <button data-profile='profileLogOut'>
                            <div className="avatar " data-profile='profileLogOut'>
                                <div className="w-8 rounded-full ring ring-inherit ring-offset-base-100 ring-offset-1" data-profile='profileLogOut'>
                                    <img src="https://api.lorem.space/image/face?hash=3174" alt='' data-profile='profileLogOut'/>
                                </div>
                            </div>
                        </button>
                    </li>

                </ul>
            </div>
            <div className='border-double onClickProfileMenu right-0 bg-base-100 mt-[70px] rounded-b-lg shadow-2xl' id='profileLogOut'>
                <div className='p-3'>
                    <ul className="menu bg-base-100 w-56 rounded-box">
                        <li className="hover-bordered"><a>Item 1</a></li>
                        <li className="hover-bordered"><a>Hover me</a></li>
                        <li className="hover-bordered"><a>Item 3</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default ProfilePicture;