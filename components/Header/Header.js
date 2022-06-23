import { useRouter, withRouter } from 'next/router';
import Link from 'next/dist/client/link';
import React from 'react';
import ContextMenu from './ContextMenu';
import SideLeftBar from './SideLeftBar';
import { Google, Home, NewsFeed, Video } from '../ReactRSIcon/index'
import Head from 'next/head';

const Header = () => {

    const router = useRouter();
    // console.log(pathname.route = '/story')
    // console.log(useRouter())
    const navigate = (path) => {
        router.push(path)
        router.prefetch(path)
    }
    // const getBar = pathname.includes('services')
    //     console.log(getBar)
    return (
        <div className=" m-0 border-b-2 bg-base-100 sticky z-[100] top-0 w-full" id='header'>
            <Head>
                <title>Create Next App</title>
                <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className='h-[60px] w-full flex justify-start items-center ml-2 mr-2 md:justify-center '>
                {/* <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex="0" className="btn btn-outline btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li> <Link href='/story'>News Feed</Link></li>
                        </ul>
                    </div>
                    <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
                </div> */}

                <div className="flex justify-center">
                    <ul className="menu menu-horizontal p-0">
                        <li> <button onClick={() => navigate('/')}><Home color='grey' size='30' /></button></li>
                        <li> <button onClick={() => navigate('/story')}><NewsFeed color='grey' size='30' /></button></li>
                        <li> <button onClick={() => navigate('/videos')}><Video color='grey' size='30' /></button></li>
                    </ul>
                </div>

                {/* <div className="navbar-end">
                    <button className="btn btn-ghost btn-circle ">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                    </button>
                    <label htmlFor="serviceDrawer" className="btn  btn-square btn-outline lg:hidden">
                        <svg className="swap-off fill-current" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512"><path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" /></svg>
                    </label>
                </div> */}
            </div>
            <ContextMenu />
            <SideLeftBar />
        </div>



    );
};

export default Header;