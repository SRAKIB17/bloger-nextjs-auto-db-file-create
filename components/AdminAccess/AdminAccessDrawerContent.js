import React from 'react';

const AdminAccessDrawerContent = ({ props }) => {
    const { selectOptionAccess, setSelectOptionAccess } = props
    const setSelectOptionAccessHandle = (option) => {
        setSelectOptionAccess(option)
    }
    return (
        <>
            <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content gap-1">
                {/* <!-- Sidebar content here --> */}
                <li className={selectOptionAccess == 'allUser' ? 'bg-secondary text-white rounded-md' : ''} onClick={() => setSelectOptionAccessHandle('allUser')}>
                    <a>All User</a>
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

export default AdminAccessDrawerContent;