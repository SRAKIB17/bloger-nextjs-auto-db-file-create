import React, { useContext, useEffect, useId, useState } from 'react';
import Category from '../Category/Category';
import Help from '../Help/Help';
import { Category1, ChatForum, Info, LoginOutline, LogOutOutline, Moon, MoonEmpty, Setting, Sun, SupportInbox, Writing } from '../ReactRSIcon/index'
import Settings from '../Setting/Setting';
import SupportInboxComponent from '../SupportInbox/SupportInbox';
import { useRouter } from 'next/router'
import RegisterFormFixed from '../Login/LoginFormSIde';
import NewPost from '../profile/NewPost/NewPost';
import { UserFullInfoProvider } from '../../pages/_app';

const SideLeftBar = () => {
    /** ------------------------------for dark mode state----------------------------- */
    const [dark, setDark] = useState(false);
    const { user, user_details, isLoading } = useContext(UserFullInfoProvider)


    /** -------------------------------- show side left bar mouseenter or mouseleave and  
     * when mouse enter check side bar has title contain flex or none class 
     * see code 
     * -----------------------------------------------------------------------------------
    */
    const router = useRouter()
    const navigate = (url) => {
        router.push(url);
        router.prefetch(url);
    }
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
            window.localStorage.setItem('dark', true);
        }
        location.reload()
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

    }, [])

    //--------------------open support inbox modal-------------------
    const [supportInbox, setSupportInbox] = useState(null)
    const OpenSupportInbox = () => {
        try {

            const sideLeftBarTitle = document.querySelectorAll('#sideLeftBarTitle');
            const sideLeftBar = document.getElementById('sideLeftBar');
            sideLeftBarTitle.forEach(title => {
                title.style.display = 'none'
            })
            if (window.innerWidth >= 1024) {
                sideLeftBar.style.width = '64px'
            }
            else {
                hiddenSideLeftBarHandle()
            }
            setSupportInbox(user?.user)
            // document.getElementById("SupportInbox").style.width = "100%";
        }
        catch {

        }
    }
    //--------------------open help menu  modal-------------------
    const helpHandler = () => {
        document.getElementById("HelpMenu").style.width = "100%";
    }

    //---------------------------for open new post ------------------------
    const [newPost, setNewPost] = useState(null)

    const OpenNewPost = () => {
        try {
            const sideLeftBarTitle = document.querySelectorAll('#sideLeftBarTitle');
            const sideLeftBar = document.getElementById('sideLeftBar');
            sideLeftBarTitle.forEach(title => {
                title.style.display = 'none'
            })
            if (window.innerWidth >= 1024) {
                sideLeftBar.style.width = '64px'
            }
            else {
                hiddenSideLeftBarHandle()
            }
            // document.getElementById("newPostClose").style.width = "100%";
            setNewPost(true)
        }
        catch {

        }
    }
    //---------------------------for open new post ------------------------
    const openCategoryModal = () => {
        // document.getElementById("OpenCategoryModal").style.width = "100%";
        document.getElementById("OpenCategoryModal").style.width = "300px";
        document.getElementById("OpenCategoryModal").style.borderRightWidth = "1px";

    }

    //-------------------------------------------for open setting------------------------------
    const openSettingsModal = () => {
        document.getElementById("SettingsMenu").style.width = "100%";
    }

    //----------------------------------- for open Login form -------------------------------
    const openLoginForm = () => {
        try {
            document.getElementById("loginFixedForm").style.width = "100%";
        }
        catch {

        }
    }

    //****************************FOR LOG OUT USR*********************** */
    const logOutHandler = () => {
        localStorage.removeItem('token')
        document.cookie = `login=`
        location.reload()
    }
    return (
        <div id='sideLeftBar' onMouseLeave={mouseShowOverHandle} onMouseEnter={mouseShowOverHandle} className='sideLeftBarHiddenText border-r-2 h-full top-[60px] fixed bg-base-100 w-[200px] left-[-200px] lg:left-0  lg:w-16' >

            <button onClick={hiddenSideLeftBarHandle} className='btn btn-outline btn-warning btn-xs absolute lg:hidden right-[10px] hover:text-red-500'>X</button>
            <div className='flex flex-col  mt-4'>

                {/* for support inbox */}
                {
                    user?.user &&
                    <>
                        <button
                            onClick={OpenNewPost}
                            className='hover:bg-base-200 p-3  rounded-lg active:bg-base-300 flex  items-center gap-1 md:text-xl'
                        >
                            <Writing size='30' />
                            <p className='hidden' id='sideLeftBarTitle'>
                                New Post
                            </p>
                        </button>
                        {/* for  inbox */}
                        {/* <button
                            onClick={OpenSupportInbox}
                            className='hover:bg-base-200 p-3  rounded-lg active:bg-base-300 flex  items-center gap-1 md:text-xl'
                        >
                            <MessageDotDotDot size='30' />
                            <p className='hidden' id='sideLeftBarTitle'>
                                Inbox
                            </p>
                        </button> */}
                        {/* for support inbox */}
                        <button
                            onClick={OpenSupportInbox}
                            className='hover:bg-base-200 p-3  rounded-lg active:bg-base-300 flex  items-center gap-1 md:text-xl'
                        >
                            <SupportInbox size='30' />
                            <p className='hidden' id='sideLeftBarTitle'>
                                Support Inbox
                            </p>
                        </button>



                        {/* for forum */}
                        <button
                            onClick={() => navigate('/forum')}
                            className='hover:bg-base-200 p-3  rounded-lg active:bg-base-300 flex  items-center gap-1 md:text-xl'
                        >
                            <ChatForum size='30' />
                            <p className='hidden' id='sideLeftBarTitle'>
                                Forum
                            </p>
                        </button>

                    </>
                }
                {
                    user?.user ||
                    <>
                        <button
                            onClick={openLoginForm}
                            className='hover:bg-base-200 p-3  rounded-lg active:bg-base-300 flex  items-center gap-1 md:text-xl'
                        >
                            <LoginOutline size='30' />
                            <p className='hidden' id='sideLeftBarTitle'>
                                Login
                            </p>
                        </button>
                    </>
                }

                {/* for category */}
                <button
                    onClick={openCategoryModal}
                    className='hover:bg-base-200 p-3  rounded-lg active:bg-base-300 flex  items-center gap-1 md:text-xl'
                >
                    <Category1 size='30' />
                    <p className='hidden' id='sideLeftBarTitle'>
                        Category
                    </p>
                </button>

                {/* for help menu*/}
                <button
                    onClick={helpHandler}
                    className='hover:bg-base-200 p-3  rounded-lg active:bg-base-300 flex  items-center gap-1 md:text-xl'
                >
                    <Info size='30' />
                    <p className='hidden' id='sideLeftBarTitle'>
                        Help
                    </p>
                </button>

                {/* for dark mode  */}
                <button
                    onClick={darkMode}
                    className='hover:bg-base-200 p-3  rounded-lg active:bg-base-300 flex  items-center gap-1 md:text-xl'
                >
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
                <button
                    onClick={openSettingsModal}
                    className='hover:bg-base-200 p-3  rounded-lg active:bg-base-300 flex  items-center gap-1 md:text-xl'
                >
                    <Setting size='30' />
                    <p className='hidden' id='sideLeftBarTitle'>
                        Setting
                    </p>
                </button>
                {/* *******FOR SIGN OUT USER ************* */}

                {
                    user?.user &&
                    <button
                        onClick={logOutHandler}
                        className='hover:bg-base-200 p-3  rounded-lg active:bg-base-300 flex  items-center gap-1 md:text-xl'
                    >
                        <LogOutOutline size='30' />
                        <p className='hidden' id='sideLeftBarTitle'>
                            Log out
                        </p>
                    </button>
                }

            </div>


            {/* for external component  */}
            {
                (user?.user && supportInbox) &&
                <SupportInboxComponent props={setSupportInbox} />
            }
            <Help />
            <Category />
            <Settings />
            {
                user?.user ||
                <RegisterFormFixed />
            }
            {
                (user?.user && newPost) &&
                <NewPost props={setNewPost} />
            }


        </div>
    );
};

export default SideLeftBar;