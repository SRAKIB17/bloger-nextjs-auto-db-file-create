import React, { useContext } from 'react';
import NotFound from '../../components/BLOG/NotFound';
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
        <div>
            <NotFound />
        </div>
    );
};

export default Index;