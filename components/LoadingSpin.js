import React from 'react';
import Header from './Header/Header';

const LoadingSpin = () => {
    return (
        <div>
            <Header />
            <div className='flex justify-center p-5'>
                <div className='animate-spin text-center border-r-4 w-40 h-40 rounded-[50%] border-red-600'>
                </div>
            </div>
        </div>
    );
};

export default LoadingSpin;