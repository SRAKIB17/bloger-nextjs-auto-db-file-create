import React from 'react';
import Header from './Header/Header';

const LoadingSpin = () => {
    return (
        <div>
            <div className='flex justify-center pt-8 mb-8 overflow-hidden'>
                <div className='animate-spin text-center border-r-4 border-l-4 w-28 h-28 rounded-[50%] border-red-200'>
                </div>
            </div>
        </div>
    );
};

export default LoadingSpin;