import { useRouter } from 'next/router';
import React, { useContext } from 'react';
import Header from '../../../components/Header/Header';
import usePrivatePageCheckUser from '../../../components/hooks/checkUser/privatePageCheckUser';
import LoadingSpin from '../../../components/LoadingSpin';
import SupportInbox from '../../../components/SupportInbox/SupportInbox';
import { UserFullInfoProvider } from '../../_app';

const Support = () => {
    const { user, user_details, isLoading, isAdmin } = useContext(UserFullInfoProvider);
    const asPath = useRouter()?.asPath
    usePrivatePageCheckUser(asPath)
    return (
        <div>

            <Header />
            {
                (user?.user && !isLoading) ?
                    <div>
                        <SupportInbox />
                    </div>
                    :
                    <div>
                        <LoadingSpin />
                    </div>
            }
        </div>
    );
};

export default Support;