import React, { useEffect, useRef, useState } from 'react';
import styles from '../profile/NewPost/NewPost.module.css'
import Docs from './Docs';
import helpsStyle from './Help.module.css'

const Help = () => {


    function CloseHelpMenu() {
        document.getElementById("HelpMenu").style.width = "0";
    }


    // const [ShortcutDocs]
    // console.log(data)
    const showShortcutDocsTags = () => {

        try {
            const shortcutDocsTags = document.getElementById('shortcutDocsTags')
            if (shortcutDocsTags.offsetHeight <= 10) {
                shortcutDocsTags.style.height = '100%'

            }
            else {
                shortcutDocsTags.style.height = '0px'
            }
        }
        catch {

        }
    }
    return (
        <div>
            <div id="HelpMenu" style={{ overflow: 'hidden', paddingTop: '0px' }} className={styles.NewPostNav + ' bg-base-100 '}>
                <div>
                    <button onClick={showShortcutDocsTags} className='btn btn-primary btn-outline btn-xs mt-4 ml-16 absolute'>Shortcut Tag Documentation</button>
                    <a href="#" className={styles.closebtn} onClick={CloseHelpMenu}>&times;</a>
                </div>

                <div className='mt-[60px] pb-[70px] border-t-2 h-full overflow-auto p-4 hideScrollBar'>
                    <div>

                        <div id='shortcutDocsTags' className={helpsStyle.shortcutDocsTags + ' h-0 overflow-hidden font-serif'}>
                            <Docs />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};



export default Help;