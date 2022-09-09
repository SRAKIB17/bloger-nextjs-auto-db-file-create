import Head from 'next/head';
import React, { useState } from 'react';
import Header from '../../components/Header/Header';
import PageTitle from '../../components/hooks/PageTitle';
import { MenuBarRight } from '../../components/ReactRSIcon';
import CdnCode from '../../components/Services/CDN_CODE/CdnCode';


const Index = () => {
    const { title } = PageTitle()
    const [selectServices, setSelectServices] = useState('CONTENT DELIVERY NETWORK (CDN) CODE')
    return (
        <div className='h-full bg-base-100 '>
            <Head>
                <title>
                    {title} 🡂 Service
                    {
                        selectServices && ' 🡂 ' + selectServices
                    }
                </title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div>
                <div className="drawer drawer-mobile">
                    <input id="servicesDrawer" type="checkbox" className="drawer-toggle" />
                    <div className="drawer-content p-1">
                        <div className='text-end pr-2 pt-1'>
                            <label
                                htmlFor="servicesDrawer"
                                className="btn btn-primary btn-xs btn-outline drawer-button lg:hidden "
                            >
                                <MenuBarRight />
                            </label>
                        </div>

                        <div className='h-full overflow-auto'>
                            {

                                selectServices === 'CONTENT DELIVERY NETWORK (CDN) CODE' &&
                                <div className='pl-1 '>
                                    <CdnCode />
                                </div>
                            }
                        </div>
                    </div>
                    <div className="drawer-side border-r-[1px] border-gray-500 ">
                        <label htmlFor="servicesDrawer" className="drawer-overlay"></label>
                        <ul
                            className="menu p-4 overflow-y-auto w-64 bg-primary text-base-content gap-1 "
                        >
                            {/* <!-- Sidebar content here --> */}
                            <li
                                className={(selectServices == 'CONTENT DELIVERY NETWORK (CDN) CODE' ? 'btn-primary rounded-md' : '') + ' cursor-pointer'}
                                onClick={() => setSelectServices('CONTENT DELIVERY NETWORK (CDN) CODE')} >
                                <a>CDN CODE</a>
                            </li>
                            <li
                                className={(selectServices == 'CONTENT DELIVERY NETWORK (CDN) CODE' ? 'btn-primary rounded-md' : '') + ' cursor-pointer'}
                                onClick={() => setSelectServices('CONTENT DELIVERY NETWORK (CDN) CODE')} >
                                <a
                                    className=''
                                    href='https://svg-pro.vercel.app/svg/1'
                                    target='_blank'
                                    rel="noreferrer"
                                >
                                    Free SVG ICON
                                </a>
                            </li>
                            <li
                                className={(selectServices == 'CONTENT DELIVERY NETWORK (CDN) CODE' ? 'btn-primary rounded-md' : '') + ' cursor-pointer'}
                                onClick={() => setSelectServices('CONTENT DELIVERY NETWORK (CDN) CODE')} >
                                <a
                                    className=''
                                    href='https://svg-pro.vercel.app/svg/1'
                                    target='_blank'
                                    rel="noreferrer"
                                >
                                    SVG REACT Component
                                </a>
                            </li>
                        </ul>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Index;