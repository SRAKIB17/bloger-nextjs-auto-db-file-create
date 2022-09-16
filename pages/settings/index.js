import React, { useContext } from 'react';
import SettingsBlog from '../../components/BLOG/Settings/SettingsBlog';
import Header from '../../components/Header/Header';
import LoadingSpin from '../../components/LoadingSpin';
import Settings from '../../components/Setting/Setting';
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
            <SettingsBlog />
        </div>
    );
};

export default Index;