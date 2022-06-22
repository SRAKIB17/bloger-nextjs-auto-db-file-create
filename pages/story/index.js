import React from 'react';
import Header from '../../components/Header/Header';
import Post from '../../components/Post-NewsFeed/Post';
import RightMenu from '../../components/Story/RightMenu';

const index = () => {
    return (
        <div>
            <Header />
            <div className='grid grid-cols-12 gap-3'>
                <div className='hidden sm:block sm:col-span-5 md:col-span-4 text-justify lg:ml-16 p-1 relative'>

                    <div className='fixed h-[100vh] overflow-auto w-[250px]'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, cumque adipisci nisi possimus nostrum porro atque temporibus rerum repellat. Maxime, cupiditate! Fuga nobis velit animi voluptatem quam quo ea rerum!
                    </div>
                </div>

                <div className='col-span-12 sm:mr-3 sm:col-start-6 sm:col-end-[-1] md:col-span-5'>
                    <Post />
                </div>

                <div className=' col-span-3 hidden md:block relative'>
                    <div className='fixed h-[100vh] overflow-auto'>
                        <div className=' text-justify mr-3'>
                            <RightMenu/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default index;