import React, { useEffect, useState } from 'react';
import Category from '../Category/Category';
import Help from '../Help/Help';
import LoginAutoShow from '../Login/LoginAutoShow';
import { Category1, Info, Login, Moon, MoonEmpty, Setting, Sun, SupportInbox, Writing } from '../ReactRSIcon/index'
import Settings from '../Setting/Setting';
import SupportInboxComponent from '../SupportInbox/SupportInbox';

const SideLeftBar = () => {
    /** ------------------------------for dark mode state----------------------------- */
    const [dark, setDark] = useState(false);

    /** -------------------------------- show side left bar mouseenter or mouseleave and  
     * when mouse enter check side bar has title contain flex or none class 
     * see code 
     * -----------------------------------------------------------------------------------
    */
    const mouseShowOverHandle = (e) => {
        const sideLeftBar = document.getElementById('sideLeftBar');
        if (window.innerWidth >= 1024) {

            const sideLeftBarTitle = document.querySelectorAll('#sideLeftBarTitle')

            if (e.type === 'mouseenter') {
                sideLeftBar.style.width = '200px'
                setTimeout(() => {
                    sideLeftBarTitle.forEach(title => {
                        if (title.style.display === 'flex') {
                            title.style.display = 'none'
                        }
                        else {
                            title.style.display = 'flex'
                        }

                    })
                }, 50);
            }
            else if (e.type === 'mouseleave') {
                sideLeftBar.style.width = '64px'
                sideLeftBarTitle.forEach(title => {
                    if (title.style.display === 'flex') {
                        title.style.display = 'none'
                    }
                    else {
                        title.style.display = 'flex'
                    }

                })
            }
        }
        else {
            sideLeftBar.style.width = '200px'
        }
    }


    //**-----------------------------for mobile and tablet hidden manually hidden side bare  */
    const hiddenSideLeftBarHandle = () => {
        const sideLeftBar = document.getElementById('sideLeftBar')
        sideLeftBar.style.left = '-200px';
        const sideLeftBarTitle = document.querySelectorAll('#sideLeftBarTitle')
        setTimeout(() => {
            sideLeftBarTitle.forEach(title => {
                title.style.display = 'none'
            })
        }, 50);
    }

    //**-------------------for dark mode state declare and state change ------------------------------ */
    const darkMode = () => {

        const darkMode = window.localStorage.getItem('dark')
        if (darkMode) {
            setDark(false)
            document.body.removeAttribute('data-theme');
            window.localStorage.removeItem('dark')
        }
        else {
            setDark(true)
            document.body.setAttribute('data-theme', "night");
            window.localStorage.setItem('dark', true)
        }
    }


    useEffect(() => {
        //**-----------for dark mode  -----------------*/
        const darkMode = window.localStorage.getItem('dark')
        if (darkMode === 'true') {
            setDark(true)
            document.body.setAttribute('data-theme', "night")
        }
        //**-----------------------------------------------------
        /**----------window resize and change these style , class and other
         * 
        */
        window.onresize = () => {

            // ------------------------support inbox ------------------------
            const sendMessageSupportInboxForm = document.getElementById('sendMessageSupportInboxForm');
            document.getElementById('supportMessageBody').style.height = document.getElementById('SupportInbox').offsetHeight - (sendMessageSupportInboxForm.offsetHeight + 80) + 'px'
            //--------------------------------------------------------------------
            //----------when resize change automatic left side bar change layout-------------
            const sideLeftBarTitle = document.querySelectorAll('#sideLeftBarTitle')
            setTimeout(() => {
                sideLeftBarTitle.forEach(title => {
                    title.style.display = 'none'
                })
            }, 50);
            const sideLeftBar = document.getElementById('sideLeftBar')
            //for desktop
            if (window.innerWidth >= 1024) {
                sideLeftBar.style.width = '64px'
                sideLeftBar.style.left = '0px'
            }
            //for mobile
            else {
                sideLeftBar.style.width = '200px'
                sideLeftBar.style.left = '-200px'
            }
        }
    }, [])

    //--------------------open support inbox modal-------------------
    const OpenSupportInbox = () => {
        document.getElementById("SupportInbox").style.width = "100%";
    }
    //--------------------open help menu  modal-------------------
    const helpHandler = () => {
        document.getElementById("HelpMenu").style.width = "100%";
    }

    //---------------------------for open new post ------------------------
    const OpenNewPost = () => {
        document.getElementById("newPostClose").style.width = "100%";
    }
    //---------------------------for open new post ------------------------
    const openCategoryModal = () => {
        // document.getElementById("OpenCategoryModal").style.width = "100%";
        document.getElementById("OpenCategoryModal").style.width = "300px";
        document.getElementById("OpenCategoryModal").style.borderRightWidth = "1px";

    }
    const openSettingsModal = () => {
        document.getElementById("SettingsMenu").style.width = "100%";
    }
    return (
        <div id='sideLeftBar' onMouseLeave={mouseShowOverHandle} onMouseEnter={mouseShowOverHandle} className='sideLeftBarHiddenText border-r-2 h-full top-[60px] fixed bg-base-100 w-[200px] left-[-200px] lg:left-0  lg:w-16' >

            <button onClick={hiddenSideLeftBarHandle} className='btn btn-outline btn-warning btn-xs absolute lg:hidden right-[10px] hover:text-red-500'>X</button>
            <div className='flex flex-col  mt-4'>

                {/* for support inbox */}
                {
                    true &&
                    <>
                        <button onClick={OpenNewPost} className='hover:bg-base-200 p-3  rounded-lg active:bg-base-300 flex  items-center gap-1 md:text-xl'>
                            <Writing size='30' />
                            <p className='hidden' id='sideLeftBarTitle'>
                                New Post
                            </p>
                        </button>
                        {/* for support inbox */}
                        <button onClick={OpenSupportInbox} className='hover:bg-base-200 p-3  rounded-lg active:bg-base-300 flex  items-center gap-1 md:text-xl'>
                            <SupportInbox size='30' />
                            <p className='hidden' id='sideLeftBarTitle'>
                                Support Inbox
                            </p>
                        </button>

                    </>
                }
                {
                    false ||
                    <>
                        <button onClick={OpenSupportInbox} className='hover:bg-base-200 p-3  rounded-lg active:bg-base-300 flex  items-center gap-1 md:text-xl'>
                            <Login size='30' />
                            <p className='hidden' id='sideLeftBarTitle'>
                                Login
                            </p>
                        </button>
                    </>
                }

                {/* for category */}
                <button onClick={openCategoryModal} className='hover:bg-base-200 p-3  rounded-lg active:bg-base-300 flex  items-center gap-1 md:text-xl'>
                    <Category1 size='30' />
                    <p className='hidden' id='sideLeftBarTitle'>
                        Category
                    </p>
                </button>

                {/* for help menu*/}
                <button onClick={helpHandler} className='hover:bg-base-200 p-3  rounded-lg active:bg-base-300 flex  items-center gap-1 md:text-xl'>
                    <Info size='30' />
                    <p className='hidden' id='sideLeftBarTitle'>
                        Help
                    </p>
                </button>
                {/* for dark mode  */}
                <button onClick={darkMode} className='hover:bg-base-200 p-3  rounded-lg active:bg-base-300 flex  items-center gap-1 md:text-xl'>
                    {
                        dark ?
                            <Sun size='32' /> :
                            <MoonEmpty size='32' className='swap' />
                    }
                    <p className='hidden' id='sideLeftBarTitle'>
                        {
                            !dark ? 'Dark' : 'Light'
                        }
                    </p>
                </button>

                {/* for setting */}
                <button onClick={openSettingsModal} className='hover:bg-base-200 p-3  rounded-lg active:bg-base-300 flex  items-center gap-1 md:text-xl'>
                    <Setting size='30' />
                    <p className='hidden' id='sideLeftBarTitle'>
                        Setting
                    </p>
                </button>

            </div>


            {/* for external component  */}
            <SupportInboxComponent />
            <Help />
            <Category />
            <Settings />
            <LoginAutoShow/>
        </div>
    );
};

export default SideLeftBar;