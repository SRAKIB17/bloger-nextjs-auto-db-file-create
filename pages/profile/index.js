import React, { useContext, useEffect, useState } from 'react';
import EditProfile from '../../components/BLOG/Profile/EditProfile';
import EditUploadPhoto from '../../components/BLOG/Profile/EditUploadPhoto';
import ProfileInfoSection from '../../components/BLOG/Profile/ProfileInfoSection';
import UserPost from '../../components/BLOG/Profile/UserPost';
import usePrivatePageCheckUser from '../../components/hooks/checkUser/privatePageCheckUser';
import LoadingSpin from '../../components/LoadingSpin';
import { UserFullInfoProvider } from '../_app';

const Index = () => {
    // usePrivatePageCheckUser('/profile')
    const { user, user_details, isLoading, isAdmin } = useContext(UserFullInfoProvider);

    usePrivatePageCheckUser('/profile');

    // const [showPage, setShowPage] = useState('uploadPhoto')
    const [showPage, setShowPage] = useState('post')
    if (isLoading) {
        return <div className='min-h-screen'>
            <LoadingSpin />
        </div>
    }
    return (
        <div className='pt-1'>
            <div className='grid grid-cols-12 gap-4 md:gap-0 '>
                <div className='col-span-12 lg:col-span-4  shadowEachPost '>
                    <ProfileInfoSection user_id={user_details?.userID} setShowPage={setShowPage} user={user?.user} />
                </div>
                <div className=' col-span-12 lg:ml-4 lg:col-span-8 overflow-auto hideScrollBar lg:h-screen'>
                    {
                        showPage == 'post' &&
                        <UserPost user_id={user_details?.userID} />
                    }
                    {
                        showPage == 'editProfile' &&
                        <EditProfile setShowPage={setShowPage} />
                    }
                    {
                        showPage == 'uploadPhoto' &&
                        <EditUploadPhoto setShowPage={setShowPage} />
                    }
                </div>

            </div>
        </div>
    );
};

export default Index;
