import React, { useEffect } from 'react';
import { Moon, SupportInbox } from '../ReactRSIcon/index'

const SideLeftBar = () => {
    const mouseShowOverHandle = (e) => {
        const sideLeftBar = document.getElementById('sideLeftBar');

        const sideLeftBarTitle = document.querySelectorAll('#sideLeftBarTitle')

        if (e.type === 'mouseenter') {
            sideLeftBar.style.width = 'fit-content'
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

    const darkMode = () => {
        document.body.setAttribute('data-theme', "night")
    }

    const hiddenSideLeftBarHandle = () => {
        const sideLeftBar = document.getElementById('sideLeftBar')
        sideLeftBar.style.display = 'none';
        const sideLeftBarTitle = document.querySelectorAll('#sideLeftBarTitle')
        setTimeout(() => {
            sideLeftBarTitle.forEach(title => {
                title.style.display = 'none'
            })
        }, 50);

        sideLeftBar.style.width = '0px'
    }
    return (
        <div id='sideLeftBar' onMouseLeave={mouseShowOverHandle} onMouseEnter={mouseShowOverHandle} className='sideLeftBarHiddenText fixed bg-base-100 sm:w-0 w-16 hidden lg:block border-r-2 h-full left-0 top-[60px]' >
            <button onClick={hiddenSideLeftBarHandle} className='btn btn-outline btn-warning btn-xs absolute md:hidden right-[10px] hover:text-red-500'>X</button>
            <div className='flex flex-col  mt-4'>

                <button className='hover:bg-base-200 p-3  rounded-lg active:bg-base-300 flex  items-center gap-1 md:text-xl'>
                    <SupportInbox size='30' />
                    <p className='hidden' id='sideLeftBarTitle'>
                        Support Inbox
                    </p>
                </button>
                <button className='hover:bg-base-200 p-3  rounded-lg active:bg-base-300 flex  items-center gap-1 md:text-xl'>
                    <SupportInbox size='30' />
                    <p className='hidden' id='sideLeftBarTitle'>
                        Support Inbox
                    </p>
                </button>
                <button className='hover:bg-base-200 p-3  rounded-lg active:bg-base-300 flex  items-center gap-1 md:text-xl'>
                    <SupportInbox size='30' />
                    <p className='hidden' id='sideLeftBarTitle'>
                        Support Inbox
                    </p>
                </button>
                <button onClick={darkMode} className='hover:bg-base-200 p-3  rounded-lg active:bg-base-300 flex  items-center gap-1 md:text-xl'>
                    <Moon size='30' />
                    <p className='hidden' id='sideLeftBarTitle'>
                        Dark
                    </p>
                </button>

            </div>

        </div>
    );
};

export default SideLeftBar;