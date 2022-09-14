import React from 'react';

const InboxUserList = () => {
    return (
        <div className="drawer-side border-r">
            <label htmlFor="settingsMenuContent" className="drawer-overlay"></label>
            <ul
                className="menu p-4 overflow-y-auto w-64 rounded-md shadow-md  gap-1"
            >
                <li>
                    <button>
                        Rakibul islam
                    </button>
                </li>
            </ul>

        </div>
    );
};

export default InboxUserList;