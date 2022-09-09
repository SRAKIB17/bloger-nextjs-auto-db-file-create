import React from 'react';
import { Copy, Delete, Writing } from '../../../../ReactRSIcon';
import ForUserAdminOption from './ForUserAdminOption';
import GuestOption from './GuestOption';
import Three_dots_vertical from './Three_dots_vertical';

const OptionList = ({ post }) => {
    return (
        <div>
            <div className="dropdown dropdown-end ">
                <label
                    tabIndex={0}
                    className="btn-sm cursor-pointer btn btn-ghost"
                >
                    <Three_dots_vertical
                        size='18'
                        strokeWidth='1'
                    />
                </label>
                <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-sm w-52">
                    <ForUserAdminOption />
                    <GuestOption post={post} />
                </ul>
            </div>

        </div>
    );
};

export default OptionList;