import React, { useEffect, useRef, useState } from 'react';
import styles from '../profile/NewPost/NewPost.module.css'
import Docs from './Docs';


const Help = () => {


    function CloseHelpMenu() {
        document.getElementById("HelpMenu").style.width = "0";
    }



    // console.log(data)
    return (
        <div>
            <div id="HelpMenu" style={{ overflow: 'hidden', paddingTop: '0px' }} className={styles.NewPostNav + ' bg-base-100 '}>
                <a href="#" className={styles.closebtn} onClick={CloseHelpMenu}>&times;</a>
                <div className='mt-[50px] pb-[70px] h-full overflow-auto p-4 hideScrollBar'>
                    <div>
                        <button className='btn btn-primary'>Documentation</button>
                        <div>
                            <Docs />
                        </div>



                        <button className='btn btn-primary'>Documentation</button>



                    </div>
                </div>
            </div>
        </div>
    );
};



export default Help;