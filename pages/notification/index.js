import Head from 'next/head';
import { useRouter } from 'next/router';
import React, { useContext } from 'react';
import PageDetailsSEO from '../../components/BLOG/hooks/PageDetailsSEO';
import Notification from '../../components/BLOG/Notification/Notification';
import usePrivatePageCheckUser from '../../components/hooks/checkUser/privatePageCheckUser';
import LoadingSpin from '../../components/LoadingSpin';
import { UserFullInfoProvider } from '../_app';

const Index = () => {
    const { user, user_details, isLoading, isAdmin } = useContext(UserFullInfoProvider);
    const asPath = useRouter()?.asPath
    usePrivatePageCheckUser(asPath)
    if (isLoading) {
        return <div className='min-h-screen'>
            <LoadingSpin />
        </div>
    }
    const { title } = PageDetailsSEO()
    return (
        <div className='min-h-screen'>
            <Head>

                <title>
                    {title+" "}/ Notification    
                </title>
            </Head>
            <Notification />
        </div>
    );
};

export default Index;