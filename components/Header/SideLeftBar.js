import React, { useEffect } from 'react';

const SideLeftBar = () => {
    useEffect(() => {
        const heightSetLeftBar = () => {
            const headerHeight = document.getElementById('header').offsetHeight;
            const windowHeight = window.innerHeight
            const getSideBar = document.getElementById('sideLeftBar')
            getSideBar.style.height = windowHeight - headerHeight +'px'
    
            
        }
        heightSetLeftBar()
        window.onresize = heightSetLeftBar
    }, [])
    return (
        <div id='sideLeftBar' className='fixed bg-base-100 w-16 hidden lg:block border-r-2' >
            
        </div>
    );
};

export default SideLeftBar;