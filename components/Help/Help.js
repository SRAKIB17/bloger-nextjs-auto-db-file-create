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
    const [showDocumentation, setShowDocumentation] = useState(false)
    return (
        <div>
            <div id="HelpMenu" style={{ overflow: 'hidden', paddingTop: '0px' }} className={styles.NewPostNav + ' bg-base-100 '}>
                <div>
                    <button onClick={() => setShowDocumentation(!showDocumentation)} className='btn btn-primary btn-outline btn-xs mt-4 ml-16 absolute'>Shortcut Tag Documentation</button>
                    <a href="#" className={styles.closebtn} onClick={CloseHelpMenu}>&times;</a>
                </div>

                <div className='mt-[60px] pb-[70px] border-t-2 h-full overflow-auto p-4 hideScrollBar'>
                    <div>
                        {/*-------------------------- for Documentation  -----------------*/}
                        {
                            showDocumentation &&
                            <div
                                id='shortcutDocsTags'
                                className='overflow-auto font-serif'>
                                <Docs />
                            </div>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};



export default Help;