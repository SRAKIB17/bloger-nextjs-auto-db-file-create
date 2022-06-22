import React from 'react';
import Header from '../../components/Header/Header';
import Post from '../../components/Post-NewsFeed/Post';

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

                <div className='col-span-12 m-3 sm:mr-3 sm:col-start-6 sm:col-end-[-1] md:col-span-5'>
                    <Post />
                </div>

                <div className=' col-span-3 hidden md:block relative'>
                    <div className='fixed h-[100vh] overflow-auto'>
                        <div className=' text-justify mr-3'>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa tenetur, vel, architecto unde ex quos, distinctio vero et commodi quia expedita pariatur? Eveniet, quod nostrum impedit illo earum exercitationem consequuntur?Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt laborum aliquid nihil, architecto quod fugit, hic cumque explicabo facilis iste perspiciatis tempore. Quisquam ipsam, minus cum eius nihil autem consectetur!
                            Sint impedit, a odio earum totam consectetur doloremque, cum temporibus voluptatem dicta tenetur quasi nostrum iusto error deserunt sapiente sequi! Reprehenderit quos deleniti, corporis sed assumenda 
                            Neque repellat voluptatem dolor assumenda lib
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, est deleniti repellendus perspiciatis enim facere corporis veritatis maxime amet reiciendis sapiente esse repellat incidunt aperiam quidem soluta quasi iusto tenetur.
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae fuga eos labore hic atque necessitatibus ex et. Minus repellendus soluta nulla officia asperiores necessitatibus nesciunt sint optio, dolorum, hic praesentium?
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat, est? Velit mollitia laboriosam inventore, rerum officiis cupiditate distinctio commodi odio neque repellendus numquam soluta. Excepturi iure numquam veniam ducimus dolorum!
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default index;