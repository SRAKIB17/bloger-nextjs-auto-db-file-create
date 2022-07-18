import React from 'react';
import Header from '../components/Header/Header';
// import noteFound from '../public/404.mp4'
// console.log(noteFound)
import {useRouter} from 'next/router'

const Index = () => {
    const router = useRouter()
    const navigate = (path) => {
        router.push(path)
        router.prefetch(path)
    }
    return (
        <div className='bg-white'>
            <Header />
            <div className='flex items-center justify-around flex-col'>
                <video src="/404.mp4" loop autoPlay className='h-auto w-auto'></video>
                <button className='btn btn-xl font-extralight btn-primary text-white' onClick={()=>navigate('/')}>
                    Back To Home
                </button>
            </div>
        </div>
    );
};

export default Index;