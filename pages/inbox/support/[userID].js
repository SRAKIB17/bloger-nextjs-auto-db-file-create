import { useRouter } from 'next/router';
import React, { useContext, useEffect } from 'react';
import Header from '../../../components/Header/Header';
import usePrivatePageCheckUser from '../../../components/hooks/checkUser/privatePageCheckUser';
import LoadingSpin from '../../../components/LoadingSpin';
import SupportInbox from '../../../components/SupportInbox/SupportInbox';
import { UserFullInfoProvider } from '../../_app';

const Support = () => {
    const { user, user_details, isLoading, isAdmin } = useContext(UserFullInfoProvider);
    const router = useRouter()
    const asPath = router?.asPath;
    const { userID } = router.query;
    const navigate = (path) => {
        router.push(path)
        router.prefetch(path)
    }


    useEffect(() => {
        if (!isAdmin.admin && !user?.user) {
            navigate('/login?return_url=/inbox/support/' + userID)
        }
        else if (user?.user) {
            navigate('/')
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isAdmin])

    usePrivatePageCheckUser(asPath)
    return (
        <div>
            <Header />
            {
                (isAdmin?.admin && !isLoading) ?
                    <div>
                        <SupportInbox />
                    </div>
                    :
                    <div>
                        <div className='bg-white'>
                            <div className='flex items-center justify-around flex-col'>
                                <video loop autoPlay className='h-auto w-auto'>
                                    <source src='/404.mp4' />
                                </video>
                                <button className='btn btn-xl font-extralight btn-primary text-white' onClick={() => navigate('/')}>
                                    Back To Home
                                </button>
                            </div>
                        </div>
                    </div>
            }
        </div >
    );
};

export default Support;