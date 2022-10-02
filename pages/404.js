import React from 'react';
import Header from '../components/Header/Header';

import { useRouter } from 'next/router'
import NotFound from '../components/BLOG/NotFound';
import Head from 'next/head';

const Index = () => {
    const router = useRouter()
    const navigate = (path) => {
        router.push(path)
        router.prefetch(path)
    }

    return (
        <div>
            <Head>
                <title>
                    Look like you{"'"}re lost
                </title>
            </Head>
            <NotFound />
        </div>
    );
};

export default Index;