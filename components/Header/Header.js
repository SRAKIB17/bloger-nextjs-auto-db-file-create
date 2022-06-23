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
        <div className='mb-[65px]'>
            <div className="h-[60px] w-full border-b-2 bg-base-100  z-[150] fixed top-0" id='header'>
                <Head>
                    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
                    <link rel="icon" href="/favicon.ico" />
                </Head>

                {/* <div className='h-[60px]  m-0 bg-base-100 w-full flex items-center md:justify-center '> */}

                <div className="flex justify-between md:justify-center ml-2 mr-2">
                    <ul className="menu menu-horizontal p-0">
                        <li> <button onClick={() => navigate('/')}><Home color='grey' size='30' /></button></li>
                        <li> <button onClick={() => navigate('/story')}><NewsFeed color='grey' size='30' /></button></li>
                        <li> <button onClick={() => navigate('/videos')}><Video color='grey' size='30' /></button></li>
                    </ul>
                </div>
                {/* </div> */}
                <SideLeftBar />
            </div>
            <ContextMenu />
        </div>



    );
};

export default Header;