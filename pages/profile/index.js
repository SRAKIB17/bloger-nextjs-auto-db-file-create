import React from 'react';
import Header from '../../components/Header/Header';
import usePrivatePageCheckUser from '../../components/hooks/checkUser/privatePageCheckUser';
import Profile from '../../components/profile/Profile';

const Index = () => {
    usePrivatePageCheckUser('/profile')
    return (
        <div>
            <Header/>
            <Profile/>
        </div>
    );
};

export default Index;