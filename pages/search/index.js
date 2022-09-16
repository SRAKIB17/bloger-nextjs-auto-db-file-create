import { useRouter } from 'next/router';
import React, { useContext, useEffect } from 'react';
import LoadingSpin from '../../components/LoadingSpin';
import { UserFullInfoProvider } from '../_app';


const Index = () => {
    const router = useRouter()
    useEffect(() => {
        router.replace('/')
    }, [])
    const { user, user_details, isLoading, isAdmin } = useContext(UserFullInfoProvider);
    if (isLoading) {
        return <div className='min-h-screen'>
            <LoadingSpin />
        </div>
    }
    return (
        <div>

        </div>
    );
};

export default Index;