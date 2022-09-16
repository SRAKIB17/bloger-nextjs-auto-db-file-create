import React from 'react';

const AdminAccessDrawerMenu = ({ selectOptionAccess, setSelectOptionAccess }) => {

    const setSelectOptionAccessHandle = (option) => {
        setSelectOptionAccess(option)
    }
    return (
        <>
            <ul className="menu p-4 overflow-y-auto w-64 bg-base-100 text-base-content gap-1">
                {/* <!-- Sidebar content here --> */}
                <li className={selectOptionAccess == 'allUser' ? 'bg-secondary text-white rounded-md' : ''} onClick={() => setSelectOptionAccessHandle('allUser')}>
                    <a>All User</a>
                </li>
                <li
                    className={selectOptionAccess == 'allPost' ? 'bg-secondary text-white rounded-md' : ''}
                    onClick={() => setSelectOptionAccessHandle('allPost')}>
                    <a>All Post</a>
                </li>

                {/* <li className={selectOptionAccess == 'allUser' ? 'bg-secondary text-white rounded-md' : ''} onClick={() => setSelectOptionAccessHandle('allUser')}>
                    <a>All User</a>
                </li>

                <li className={selectOptionAccess == 'allUser' ? 'bg-secondary text-white rounded-md' : ''} onClick={() => setSelectOptionAccessHandle('allUser')}>
                    <a>All User</a>
                </li>

                <li className={selectOptionAccess == 'allUser' ? 'bg-secondary text-white rounded-md' : ''} onClick={() => setSelectOptionAccessHandle('allUser')}>
                    <a>All User</a>
                </li> */}

            </ul>

        </>
    );
};

export default AdminAccessDrawerMenu;