import React from 'react';
import Header from '../../components/Header/Header';
import Post from '../../components/Post-NewsFeed/Post';

const index = () => {
    return (
        <div>
            <Header />
            <div className='grid grid-cols-12 gap-3'>
                <div className='sm:col-span-5 md:col-span-4 text-justify ml-16 p-1 relative overflow-hidden'>
                    <div className='fixed overflow-hidden'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, cumque adipisci nisi possimus nostrum porro atque temporibus rerum repellat. Maxime, cupiditate! Fuga nobis velit animi voluptatem quam quo ea rerum!
                    </div>
                </div>

                <div className='sm:col-start-6 sm:col-end-[-1] md:col-span-5'>
                    <Post />
                </div>

                <div className='col-span-3 sm:hidden md:block relative'>
                    <div className='fixed'>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa tenetur, vel, architecto unde ex quos, distinctio vero et commodi quia expedita pariatur? Eveniet, quod nostrum impedit illo earum exercitationem consequuntur?
                    </div>
                </div>
            </div>
        </div>
    );
};

export default index;