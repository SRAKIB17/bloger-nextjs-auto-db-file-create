import React, { useState } from 'react';
import { MenuBar, MenuBarSquare } from '../../ReactRSIcon';
import CommonContent from './Drawer/SetContent/Common/CommonContent';
import PostContent from './Drawer/SetContent/Post/PostContent';
import Common from './Drawer/Settings/Common';
import Post from './Drawer/Settings/Post';
import SettingsAllDropdown from './SettingsAllDropdown';
import Right_arrow from './SvgComponent/Right_arrow';

const SettingsBlog = () => {
    const [content, setContent] = useState('Code Highlight');
    const [settings, setSettings] = useState('Common Settings');



    return (
        <div className='p-4 pb-0'>

            <div className="drawer drawer-mobile">
                <input id="settingsDrawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col ">
                    {/* <!-- Page content here --> */}
                    <div className=''>
                        <div className='flex lg:justify-end justify-between items-center'>
                            <label
                                htmlFor="settingsDrawer"
                                className="btn btn-ghost drawer-button lg:hidden"
                            >
                                <Right_arrow size='24' strokeWidth='10' />
                            </label>
                            <div className='flex items-center gap-1 opacity-50 text-2xs flex-wrap sm:text-[16px]'>
                                <span>
                                    Settings
                                </span>
                                <Right_arrow />
                                <span>
                                    {settings}
                                </span>
                                <Right_arrow />
                                <span>
                                    {content}
                                </span>
                            </div>
                            
                            <div className=''>
                                <SettingsAllDropdown setSettings={setSettings} />
                            </div>
                        </div>
                    </div>
                    {/* *****************CONTENT ********************** */}

                    <div>
                        {/* ********* FOR COMMON SETTINGS************* */}
                        <div>
                            <CommonContent content={content} />
                        </div>

                        {/* ***********FOR POST *************** */}
                        <div>
                            <PostContent content={content} />
                        </div>
                    </div>
                </div>
                <div className="drawer-side shadowEachPost h-full">
                    <label htmlFor="settingsDrawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 overflow-y-auto w-64 bg-[#201B4E] text-white gap-1">
                        {/* <!-- Sidebar content here --> */}
                        {
                            settings === 'Common Settings' &&
                            <Common setContent={setContent} />
                        }
                        {
                            settings === "Post" &&
                            <Post setContent={setContent} />
                        }
                    </ul>

                </div>
            </div>

            {/* <CommonSettingsBlog /> */}


            <div>

            </div>
        </div>
    );
};

export default SettingsBlog;