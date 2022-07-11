/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react';
import Header from '../../components/Header/Header';
import Home from '../../components/Home/Home';
import useUserCheck from '../../components/hooks/checkUser/useUserCheck';
import Login from '../../components/Login/Login';
import avat from '../../public/loginAvatar.png'

const index = () => {
    const { user } = useUserCheck()
    return (
        <div className='w-full h-full bg-base-100'>
            <Header />
            {
                user?.user ||
                <Login />
            }

            {
                user?.user &&
                <div className='md:ml-[4.75rem]'>
                    <Home />
                </div>
            }
        </div>
    );
};

export default index;