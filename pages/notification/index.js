import React, { useContext } from 'react';
import Notification from '../../components/BLOG/Notification/Notification';
import LoadingSpin from '../../components/LoadingSpin';
import { UserFullInfoProvider } from '../_app';

const Index = () => {
    const { user, user_details, isLoading, isAdmin } = useContext(UserFullInfoProvider);
    if (isLoading) {
        return <div className='min-h-screen'>
            <LoadingSpin />
        </div>
    }
    return (
        <div className='min-h-screen'>
            <Notification />
        </div>
    );
};

export default Index;