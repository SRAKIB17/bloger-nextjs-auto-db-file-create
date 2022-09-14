import React from 'react';

const InboxUserList = ({ showSpecificUserMessageHandle, userList = [] }) => {

    return (
        <div className="drawer-side border-r">
            <label htmlFor="settingsMenuContent" className="drawer-overlay"></label>
            <ul
                className="menu p-4 overflow-y-auto w-64 rounded-md shadow-md bg-base-100 gap-1"
            >
                {
                    userList?.map((id, index) => {

                        return (
                            <li key={index}>
                                <button onClick={() => showSpecificUserMessageHandle(id)}>
                                    Rakibul islam
                                </button>
                            </li>
                        )
                    })
                }
            </ul>

        </div>
    );
};

export default InboxUserList;