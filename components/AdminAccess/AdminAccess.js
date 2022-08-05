import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import LoadingSpin from '../LoadingSpin';
import styles from './adminAccess.module.css'
import { MenuBarLeft } from '../ReactRSIcon';
import AdminAccessDrawerContent from './AdminAccessDrawerContent';
import AllUser from './all-user/AllUser';
import { UserFullInfoProvider } from '../../pages/_app';
import usePrivatePageCheckUser from '../hooks/checkUser/privatePageCheckUser';
import AllPost from './all-post/AllPost';

const AdminAccess = ({ setAdminAccess }) => {
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

    usePrivatePageCheckUser(asPath)
    return (
        <div>
            <div className={styles.AdminAccess + " bg-base-100 min-h-screen overflow-auto pt-14"}>
                <div>
                    <a href="#" className={styles.closebtn} onClick={closeCategoryModal}>&times;</a>
                </div>
                <div className='border-t-2 p-4 border-gray-500'>
                    <div className="drawer drawer-mobile">
                        <input id="adminDrawer" type="checkbox" className="drawer-toggle" />

                        <div className="drawer-content ">
                            {/* <!-- Page content here --> */}
                            <div className='flex justify-end sticky top-0 z-[100]'>
                                <label
                                    htmlFor="adminDrawer"
                                    className="btn btn-secondary btn-sm drawer-button lg:hidden mr-4 mt-1 text-white"
                                >
                                    <MenuBarLeft />
                                </label>
                            </div>


                            {/* *********CONTENT********* */}
                            <div className='min-h-screen mb-16 overflow-auto'>
                                {
                                    selectOptionAccess === 'allUser' &&
                                    <AllUser />
                                }
                                {/* ****ALL POST*************** */}
                                {
                                    selectOptionAccess === 'allPost' &&
                                    <AllPost />
                                }
                            </div>
                        </div>
                        <div className="drawer-side border-r-2 min-h-screen overflow-auto border-gray-500">
                            <label htmlFor="adminDrawer" className="drawer-overlay"></label>
                            <AdminAccessDrawerContent props={{ selectOptionAccess, setSelectOptionAccess }} />
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default AdminAccess;
