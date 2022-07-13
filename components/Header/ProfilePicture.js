/* eslint-disable @next/next/no-img-element */
import React, { useState } from 'react';
import { useRouter } from 'next/router'
import loginProfile from '../../public/loginAvatar.png'
import useUserCheck from '../hooks/checkUser/useUserCheck';
import maleAvatar from '../../public/maleAvatar.png'
import femaleAvatar from '../../public/femaleAvatar.png'

const ProfilePicture = () => {
    const { user } = useUserCheck()
    const [showMenuProfile, setShowMenuProfile] = useState(false)
    const ProfilePictureHandle = (e) => {
        const getProfileMenu = document.getElementById('profileLogOut');
        getProfileMenu.style.right = '5px'
    }

    const router = useRouter();
    // console.log(pathname.route = '/story')
    // console.log(useRouter())
    const navigate = (path) => {
        router.new = 'profile'
        router.push(path)
        router.prefetch(path)
    }
    const logOut = () => {
        localStorage.removeItem('token')
        document.cookie = `login=`
        location.reload()
    }
    return (
        <div>
            <div>
                <ul className="menu menu-horizontal p-0 flex items-center md:absolute md:right-0 md:top-0">
                    {
                        user?.user &&

                        <li onMouseEnter={ProfilePictureHandle} onClick={ProfilePictureHandle} data-profile='profileLogOut'>
                            <button data-profile='profileLogOut'>
                                <div className="avatar " data-profile='profileLogOut'>
                                    <div className="w-[28px] rounded-full ring ring-inherit ring-offset-base-100 ring-offset-1" data-profile='profileLogOut'>
                                        <img src={femaleAvatar?.src} alt='' data-profile='profileLogOut' />
                                    </div>
                                </div>
                            </button>
                        </li>
                    }
                    {/* ******************************************* for guest***************************************** */}
                    {
                        user?.user ||
                        <li>
                            <button onClick={() => navigate('/login')}>
                                <div className="avatar ">
                                    <div className="w-[28px] rounded-full ring ring-inherit ring-offset-base-100 ring-offset-1" data-profile='profileLogOut'>
                                        <img src={loginProfile.src} alt="" width='30' />
                                    </div>
                                </div>
                            </button>
                        </li>
                    }
                    {/* *********************************************************************************************** */}

                </ul>
            </div>

            {
                user?.user &&
                <div className='border-double onClickProfileMenu right-0 bg-base-100 mt-[70px] rounded-b-lg shadow-2xl' id='profileLogOut'>
                    <div className='p-3'>
                        <ul className="menu bg-base-100 w-56 rounded-box">
                            <li className="hover-bordered"><button onClick={() => navigate('/profile')}>Profile</button></li>
                            <li className="hover-bordered"><button onClick={() => logOut()}>Log out</button></li>
                        </ul>
                    </div>
                </div>
            }
        </div>
    );
};

export default ProfilePicture;