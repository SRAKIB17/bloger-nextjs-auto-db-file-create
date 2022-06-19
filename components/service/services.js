import React, { useEffect } from 'react';
import Header from '../../components/Header';
import Link from 'next/link';

const Services = () => {
    return (
        <div>
            <Header />
            <div className="drawer drawer-mobile drawer-end ">
                <input id="serviceDrawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    <div className='h-[100vh] p-10 overflow-y-auto overflow-x-hidden servicesBody'>
                    </div>
                </div>
                <div className="drawer-side border-l-2 z-0 overflow-auto">
                    <label htmlFor="serviceDrawer" className="drawer-overlay"></label>

                    <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
                        <li><Link href='/services/scroll-bar'>Scroll Bar</Link></li>
                        <li><a>Sidebar Item 2</a></li>
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default Services;