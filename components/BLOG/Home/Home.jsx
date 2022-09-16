import React from 'react';
import Docs from './Docs';
import VideoDocs from './VideoDocs';

const Home = () => {
    return (
        <div className='min-h-screen'>
            <div>
                <Docs/>
            </div>
            <div>
                <VideoDocs/>
            </div>
        </div>
    );
};

export default Home;