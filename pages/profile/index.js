import React, { useContext, useEffect } from 'react';
import ProfileInfoSection from '../../components/BLOG/Profile/ProfileInfoSection';
import UserPost from '../../components/BLOG/Profile/UserPost';
import Header from '../../components/Header/Header';
import usePrivatePageCheckUser from '../../components/hooks/checkUser/privatePageCheckUser';
import Profile from '../../components/profile/Profile';
import { UserFullInfoProvider } from '../_app';

const Index = () => {
    // usePrivatePageCheckUser('/profile')
    const { user, user_details } = useContext(UserFullInfoProvider)
    usePrivatePageCheckUser('/profile');
    console.log(user_details)

    return (
        <div>
            <div className='grid grid-cols-12 gap-4 md:gap-0 '>
                <div className='col-span-12 md:col-span-4  shadowEachPost '>
                    <ProfileInfoSection user_id={user_details?.userID} />
                </div>
                <div className=' col-span-12 md:ml-4 md:col-span-8 overflow-auto hideScrollBar md:h-screen'>
                    <UserPost user_id={user_details?.userID} />
                </div>

            </div>
        </div>
    );
};

export default Index;