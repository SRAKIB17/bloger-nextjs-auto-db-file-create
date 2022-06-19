import React from 'react';
import { useRouter } from 'next/router'
import Link from 'next/link';
import Header from '../../components/Header';
import axios from 'axios';
import { useQuery } from 'react-query';
const Service = () => {
    const { query } = useRouter()
    const { data } = useQuery('data', () => axios.get('/api/hello'));
    // const aa = query?.service?.[0]

    console.log(data?.data)    // console.log(aa)
    // console.log()

    return (
        <div>
            <Header />
            <div className="drawer drawer-mobile drawer-end ">
                <input id="serviceDrawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    <div className='h-[100vh] p-10 overflow-y-auto overflow-x-hidden servicesBody'>
                        {data?.data?.name}
                        lorem*100
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

export default Service;