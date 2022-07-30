import React, { useEffect, useRef, useState } from 'react';
import Docs from './Docs';

const Help = () => {


    function CloseHelpMenu() {
        document.getElementById("HelpMenu").style.width = "0";
    }
    const [showDocumentation, setShowDocumentation] = useState(false);
    return (
        <div>
            <div id="HelpMenu" style={{ overflow: 'hidden', paddingTop: '0px' }} className=' bg-base-100 '>
                <div>
                    <button onClick={() => setShowDocumentation(!showDocumentation)} className='btn btn-primary btn-outline btn-xs mt-4 ml-16 absolute'>Shortcut Tag Documentation</button>
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