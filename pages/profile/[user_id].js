import { useRouter } from 'next/router';
import React, { useContext, useEffect, useState } from 'react';
import ProfileInfoSection from '../../components/BLOG/Profile/ProfileInfoSection';
import UserPost from '../../components/BLOG/Profile/UserPost';
import LoadingSpin from '../../components/LoadingSpin';
import { UserFullInfoProvider } from '../_app';

const Index = () => {
  const router = useRouter()
  const { user_id } = router.query
  // usePrivatePageCheckUser('/profile')

  const { user, user_details, isLoading, isAdmin } = useContext(UserFullInfoProvider);
  if (isLoading) {
    return <div className='min-h-screen'>
      <LoadingSpin />
    </div>
  }
  return (
    <div className='pt-1'>
      <div className='grid grid-cols-12 gap-4 md:gap-0 '>
        <div className='col-span-12 md:col-span-4  shadowEachPost '>
          <ProfileInfoSection user_id={user_id} />
        </div>

        <div className=' col-span-12 md:ml-4 md:col-span-8 overflow-auto hideScrollBar md:h-screen'>
          <UserPost user_id={user_id} />
        </div>
      </div>
    </div>
  );
};

export default Index;
