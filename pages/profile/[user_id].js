import React from 'react';
import Header from '../../components/Header/Header';
import Profile from '../../components/profile/Profile';
import PublicProfile from '../../components/PublicProfile/PublicProfile';

const index = () => {
    return (
        <div>
            <Header/>
            <PublicProfile/>
        </div>
    );
};

export default index;