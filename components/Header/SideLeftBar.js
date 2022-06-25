import React, { useEffect } from 'react';
import { Info, Moon, Setting, SupportInbox } from '../ReactRSIcon/index'

const SideLeftBar = () => {
    const mouseShowOverHandle = (e) => {
        const sideLeftBar = document.getElementById('sideLeftBar');
        if (window.innerWidth >= 1024) {

            const sideLeftBarTitle = document.querySelectorAll('#sideLeftBarTitle')

            if (e.type === 'mouseenter') {
                sideLeftBar.style.width = '200px'
                setTimeout(() => {
                    sideLeftBarTitle.forEach(title => {
                        title.style.display = 'flex'
                    })
                }, 50);
            }
            else if (e.type === 'mouseleave') {
                sideLeftBar.style.width = '64px'
                sideLeftBarTitle.forEach(title => {
                    title.style.display = 'none'
                })
            }
        }
        else {
            sideLeftBar.style.width = '200px'
        }
    }

    const darkMode = () => {
        document.body.setAttribute('data-theme', "night")
    }

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
    useEffect(() => {
        window.onresize = () => {
            const sideLeftBarTitle = document.querySelectorAll('#sideLeftBarTitle')
            setTimeout(() => {
                sideLeftBarTitle.forEach(title => {
                    title.style.display = 'none'
                })
            }, 50);
            const sideLeftBar = document.getElementById('sideLeftBar')
            if (window.innerWidth >= 1024) {
                sideLeftBar.style.width = '64px'
                sideLeftBar.style.left = '0px'
            }
            else {
                sideLeftBar.style.width = '200px'
                sideLeftBar.style.left = '-200px'
            }
        }
    }, [])
    return (
        <div id='sideLeftBar' onMouseLeave={mouseShowOverHandle} onMouseEnter={mouseShowOverHandle} className='sideLeftBarHiddenText border-r-2 h-full top-[60px] fixed bg-base-100 w-[200px] left-[-200px] lg:left-0  lg:w-16' >

            <button onClick={hiddenSideLeftBarHandle} className='btn btn-outline btn-warning btn-xs absolute lg:hidden right-[10px] hover:text-red-500'>X</button>
            <div className='flex flex-col  mt-4'>

                <button className='hover:bg-base-200 p-3  rounded-lg active:bg-base-300 flex  items-center gap-1 md:text-xl'>
                    <SupportInbox size='30' />
                    <p className='hidden' id='sideLeftBarTitle'>
                        Support Inbox
                    </p>
                </button>

                <button className='hover:bg-base-200 p-3  rounded-lg active:bg-base-300 flex  items-center gap-1 md:text-xl'>
                    <Info size='30' />
                    <p className='hidden' id='sideLeftBarTitle'>
                        Help
                    </p>
                </button>
                <button onClick={darkMode} className='hover:bg-base-200 p-3  rounded-lg active:bg-base-300 flex  items-center gap-1 md:text-xl'>
                    <Moon size='30' />
                    <p className='hidden' id='sideLeftBarTitle'>
                        Dark
                    </p>
                </button>
                <button className='hover:bg-base-200 p-3  rounded-lg active:bg-base-300 flex  items-center gap-1 md:text-xl'>
                    <Setting size='30' />
                    <p className='hidden' id='sideLeftBarTitle'>
                        Setting
                    </p>
                </button>

            </div>

        </div>
    );
};

export default SideLeftBar;