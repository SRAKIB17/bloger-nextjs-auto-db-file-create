import React from 'react';
import ShortcutEmmet from './DocsSpecificMenu/ShortcutEmmetContentMenu';

const DrawerMenuDocs = ({ setContent }) => {
    const showSubMenu = (e) => {
        console.log(e)
    }
    return (
        <div className="drawer-side">
            <label htmlFor="docsMenuContent" className="drawer-overlay"></label>
            <ul
                className="menu p-4 overflow-y-auto w-64 rounded-none shadow-md  gap-1 border-r-2"
            >
                <ShortcutEmmet setContent={setContent} />

            </ul>

        </div>
    );
};

export default DrawerMenuDocs;
