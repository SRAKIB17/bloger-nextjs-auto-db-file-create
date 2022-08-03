import axios from 'axios';
import React, { useState } from 'react';
import { useRouter } from 'next/router';
import LoadingSpin from '../LoadingSpin';
import styles from './adminAccess.module.css'
import { MenuBarLeft } from '../ReactRSIcon';
import AdminAccessDrawerContent from './AdminAccessDrawerContent';
import AllUser from './all-user/AllUser';

const AdminAccess = ({ setAdminAccess }) => {
    const closeCategoryModal = () => {
        setAdminAccess(null)
    }
    const [selectOptionAccess, setSelectOptionAccess] = useState('')
    return (
        <div>
            <div className={styles.AdminAccess + " bg-base-100 min-h-screen overflow-auto pt-14"}>
                <div>
                    <a href="#" className={styles.closebtn} onClick={closeCategoryModal}>&times;</a>
                </div>
                <div className='border-t-2 p-4 border-gray-500'>
                    <div className="drawer drawer-mobile">
                        <input id="adminDrawer" type="checkbox" className="drawer-toggle" />

                        <div className="drawer-content">
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
                            <div>
                                {
                                    selectOptionAccess === 'allUser' &&
                                    <AllUser />
                                }
                            </div>
                        </div>
                        <div className="drawer-side">
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
