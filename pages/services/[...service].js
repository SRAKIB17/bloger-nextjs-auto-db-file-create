import React from 'react';
import { useRouter } from 'next/router'
import Link from 'next/link';
import Header from '../../components/Header/Header';
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
           
        </div>
    );
};

export default Service;