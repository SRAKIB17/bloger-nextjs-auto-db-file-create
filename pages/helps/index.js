import React, { useEffect, useState } from 'react';
import Header from '../../components/Header/Header';
import { CloseCross, MenuBar, MenuBarLeft } from '../../components/ReactRSIcon';
import styles from '../../components/Help/help.module.css'
import Docs from '../../components/Help/Docs';
import Head from 'next/head';
const Index = () => {
    const [showMenu, setShowMenu] = useState(null)
    const HelpMenuShowDrawerHandle = () => {
        // document.getElementById("OpenCategoryModal").style.width = "100%";
        document.getElementById("ShowHelpMenu").style.borderRightWidth = "1px";

        const ShowHelpMenu = document.getElementById("ShowHelpMenu")
        ShowHelpMenu.style.width = "300px";
        if (window.innerWidth >= 768) {
            ShowHelpMenu.style.width = '256px'
        }
        else {
            if (ShowHelpMenu.offsetWidth >= 300) {
                setShowMenu(null)
                ShowHelpMenu.style.width = '0px'
            }
            else {
                setShowMenu(true)
            }
        }

    }

    useEffect(() => {
        window.onresize = () => {
            document.getElementById("ShowHelpMenu").style.borderRightWidth = "1px";
            const ShowHelpMenu = document.getElementById("ShowHelpMenu")
            if (window.innerWidth >= 768) {
                ShowHelpMenu.style.width = '256px'
            }
            else {
                ShowHelpMenu.style.width = '0px'
            }
        }
    }, [])

    const [showHelpSection, setShowHelpSection] = useState('shortcutEmmet')
    const showHelpSectionHandle = (show) => {
        HelpMenuShowDrawerHandle()
        setShowHelpSection(show)
    }
    return (
        <div>
            <Header />
            <Head>
                <title>Help || ProgLearn</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div>
                <div className="p-4 text-right">
                    <button
                        className='btn btn-sm btn-outline btn-primary w-fit md:hidden inline-block'
                        onClick={HelpMenuShowDrawerHandle}
                    >
                        {

                            !showMenu ? <MenuBar size='20' /> : <CloseCross size='30' />
                        }
                    </button>


                </div>
                <div className={styles.helpAutoShow + ' w-0 md:w-64 md:ml-[63px] bg-base-300 mt-[60px] h-full'} id='ShowHelpMenu'>
                    <ul className="menu p-4 overflow-y-auto text-base-content">
                        <li onClick={() => showHelpSectionHandle('shortcutEmmet')}>
                            <button>
                                Emmet Documentation
                            </button>
                        </li>
                        <li><a>Sidebar Item 2</a></li>
                    </ul>

                </div>


                <div className='md:ml-[320px]'>
                    {/* ***********SHOW HELP MENU************** */}
                    {
                        showHelpSection === 'shortcutEmmet' &&
                        <div className='w-full overflow-auto pl-4'>
                            <Docs />
                        </div>
                    }
                </div>
            </div>
        </div>
    );
};

export default Index;