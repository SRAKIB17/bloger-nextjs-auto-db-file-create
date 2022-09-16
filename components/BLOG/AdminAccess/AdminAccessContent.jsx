import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import styles from './adminAccess.module.css'

// import usePrivatePageCheckUser from '../hooks/checkUser/privatePageCheckUser';
import { UserFullInfoProvider } from '../../../pages/_app';
import AllUser from './all-user/AllUser';

const AdminAccessContent = ({ setAdminAccess }) => {
    const closeCategoryModal = () => {
        setAdminAccess(null)
    }
    const [selectOptionAccess, setSelectOptionAccess] = useState('allUser')

    const { user, user_details, isLoading, isAdmin } = useContext(UserFullInfoProvider);
    const router = useRouter()
    const asPath = router?.asPath;
    const { userID } = router.query;
    const navigate = (path) => {
        router.push(path)
        router.prefetch(path)
    }
    useEffect(() => {
        if (!isAdmin.admin) {
            navigate('/login?return_url=/inbox/support/' + userID)
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isAdmin])

    // usePrivatePageCheckUser(asPath)
    return (
        <div>
            <div className=" bg-base-100 min-h-screen overflow-auto pt-14">

                {/* *********CONTENT********* */}
                <div className='min-h-screen ml-4 mb-16 overflow-auto'>
                    {
                        // selectOptionAccess === 'allUser' &&
                        <AllUser />
                    }
                    {/* ****ALL POST*************** */}
                    {
                        // selectOptionAccess === 'allPost' &&
                        // <AllPost />
                    }
                </div>
            </div>

        </div>

    );
};

export default AdminAccessContent;
