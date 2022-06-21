import React, { useEffect, useState } from 'react';
import NewPost from './NewPost/NewPost';
import Image from 'next/image'
import Post from '../Post-NewsFeed/Post';
import WindowOnscrollEvent from '../Header/WindowOnscrollEvent';

const Profile = () => {
    const [newPost, setNewPost] = useState(null);
    function OpenNewPost() {
        document.getElementById("newPostClose").style.width = "100%";
    }
    useEffect(() => {
        window.onscroll = (e) => {
            const stickyTop = document.getElementById('stickyTop')
            const winScroll = document.documentElement.scrollTop;

            const headerH = document.getElementById('header').offsetHeight
            // if(winScroll>)
            const post = document.getElementById('post')
            if (stickyTop.offsetHeight - 10 < winScroll) {
                post.style.position = 'fixed'
                post.style.overflow = 'auto'
                post.style.height = '100%'
                post.style.top = 66
            }
            else {
                post.style.position = 'static'
                post.style.overflow = 'auto'
            }
            WindowOnscrollEvent()
        }
    }, [])
    return (
        <div className='lg:ml-[200px] lg:mr-[200px]'>
            <div id='stickyTop'>
                <div className='m-2  rounded-lg relative bg-base-200'>
                    <div className=''>
                        <img src="https://images.unsplash.com/photo-1655465184678-548fb85fa74a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=872&q=80" alt="" className='h-[200px] w-full sm:h-[300px] rounded-t-lg' />
                    </div>
                    <div className='absolute bottom-[-48px] sm:bottom-[-52px] left-[50%] ml-[-50px] md:left-[100px] md:bottom-[-120px]'>
                        <div className="avatar online ">
                            <div className="w-24 sm:w-32 md:w-40 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                <img src="https://api.lorem.space/image/face?hash=3174" alt='' />
                            </div>
                        </div>
                    </div>
                </div>
                {/* for profile info */}
                <div className='relative md:mt-[10px] md:left-[250px] md:border-b-2 md:mr-[260px] md:pb-[10px]'>
                    <div className='flex flex-col mt-[60px] md:mt-[20px]  items-center md:justify-between md:flex-row'>
                        <div className='text-center'>
                            <h1 className='text-2xl sm:text-3xl'>Md Rakibul Islam</h1>
                            <h1 className='text-orange-500'>Total Point: 300</h1>
                        </div>
                        <div className='flex flex-row justify-between gap-3 md:flex-col'>
                            <button className='btn btn-primary rounded-3xl btn-outline lg:text-xl'
                                onClick={() => { OpenNewPost() }}
                            >
                                New Post
                            </button>
                            <button className='btn  btn-outline btn-secondary  rounded-3xl lg:text-xl'>Edit Profile</button>

                        </div>
                    </div>
                </div>
            </div>
            <div>
                <NewPost />
            </div>
            <div className='grid grid-cols-12 gap-3 m-5 text-justify md:m-10' id='post'>
                <div className='col-span-12 md:col-span-4'>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reiciendis ea ullam expedita. Earum quam officia tenetur minima consequatur enim? Illo, dolorem! Deserunt repudiandae quos ad. Veritatis neque qui possimus excepturi!
                </div>

                <div className='col-span-12 md:col-span-8 sticky' >
                    <Post />
                </div>
            </div>

        </div>
    );
};

export default Profile;