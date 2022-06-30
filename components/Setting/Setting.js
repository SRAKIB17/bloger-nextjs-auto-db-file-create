import React, { useEffect, useRef, useState } from 'react';
import styles from '../profile/NewPost/NewPost.module.css'
import CommonSetting from './CommonSetting';

const Settings = () => {


    function CloseHelpMenu() {
        document.getElementById("SettingsMenu").style.width = "0";
    }


    return (
        <div>
            <div id="SettingsMenu" style={{ overflow: 'hidden', paddingTop: '0px' }} className={styles.NewPostNav + ' bg-base-100 '}>
                <div>
                    <a href="#" className={styles.closebtn} onClick={CloseHelpMenu}>&times;</a>
                </div>

                <div className='mt-[60px] pb-[70px] border-t-2 h-full overflow-auto p-4 hideScrollBar'>
                    <div>
                        {/*-------------------------- for Documentation  -----------------*/}
                        <CommonSetting />
                    </div>
                </div>
            </div>
        </div>
    );
};



export default Settings;