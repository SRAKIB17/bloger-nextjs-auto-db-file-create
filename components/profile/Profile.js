/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from 'react';

import Post from '../Post-NewsFeed/Post';
import ProfileEdit from './ProfileEdit/ProfileEdit';
import About from './About';
import { useQuery } from 'react-query';
import axios from 'axios';
import UpdateProfilePicture from './UpdateProfilePicture';
import { Camera } from '../ReactRSIcon';
import useUserCheck from '../hooks/checkUser/useUserCheck';
import privatePageCheckUser from '../hooks/checkUser/privatePageCheckUser';
import usePrivatePageCheckUser from '../hooks/checkUser/privatePageCheckUser';

const Profile = () => {
    usePrivatePageCheckUser()
    const OpenNewPost = () => {
        document.getElementById("newPostClose").style.width = "100%";
    }

    function OpenEditProfile() {
        document.getElementById("profileEdit").style.width = "100%";
    }

    useEffect(() => {
        // document.body.setAttribute('data-theme', 'retro')
        const GeneratedScrollProfile = () => {
            try {
                const stickyTop = document.getElementById('stickyTop')
                const winScroll = document.documentElement.scrollTop;

                const headerH = document.getElementById('header').offsetHeight
                // if(winScroll>)

                const scrollProfile = document.getElementById('scrollProfile');
                const windowWidth = window.innerWidth;
                if (((stickyTop.offsetHeight + stickyTop.offsetTop) <= (winScroll + headerH)) && (windowWidth >= 640)) {
                    scrollProfile.style.visibility = 'visible'
                    // scrollProfile.style.width = '100%'
                    scrollProfile.style.top = '60px'
                }
                else {
                    scrollProfile.style.top = '-200px'
                    scrollProfile.style.visibility = 'hidden'
                }
            }
            catch {

            }
        }
        window.onscroll = () => {
            GeneratedScrollProfile()
        }
        window.onresize = () => {
            GeneratedScrollProfile()
        }
    }, [])

    const { data } = useQuery('userPost_id', () => axios.get('/api/test'))

    const [uploadMethod, setUploadMethod] = useState(null)
    return (
        <div className='lg:ml-[200px] lg:mr-[200px]'>
            <div id='stickyTop' className='bg-base-100 rounded-lg m-2 pb-4 md:pb-6'>
                <div className=' rounded-lg relative bg-base-100'>
                    {/* ------------------------------for cover photo ------------------------------------ */}
                    <label
                        htmlFor="openModalUploadProfilePicture"
                        title='Upload cover photo'
                        onClick={() => setUploadMethod('cover')}
                    >
                        <div
                            className='cursor-pointer relative'>
                            <div
                                className='bg-base-300 p-1 absolute top-2 left-4 rounded-full'
                            >
                                <Camera />
                            </div>
                            <img
                                src="https://images.unsplash.com/photo-1655465184678-548fb85fa74a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=872&q=80"
                                alt=""
                                className='h-[200px] w-full sm:h-[300px] rounded-t-lg'
                            />
                        </div>
                    </label>

                    {/* ------------------------------for profile photo ------------------------------------ */}

                    <div
                        className='cursor-pointer absolute bottom-[-48px] sm:bottom-[-52px] left-[50%] ml-[-55px] md:left-[100px] md:bottom-[-120px]'
                    >   <label
                        htmlFor="openModalUploadProfilePicture"
                        title='Upload cover photo'
                        onClick={() => setUploadMethod('profile')}
                    >
                            <div
                                className="avatar cursor-pointer"
                                title='Upload Profile picture'
                            >
                                <div
                                    className='bg-base-300 p-1 absolute right-0 top-2 md:right-4 rounded-full'
                                >
                                    <Camera />
                                </div>
                                <div
                                    className="w-28 sm:w-32 md:w-36 rounded-full ring ring-inherit ring-offset-base-100 ring-offset-1"
                                >
                                    <img
                                        src="https://api.lorem.space/image/face?hash=3174"
                                        alt=''
                                    />
                                </div>
                            </div>
                        </label>
                    </div>
                    {/* ---------------------------------------------------------------------------------------- */}
                </div>
                {/* for profile info */}
                <div className='relative md:mt-[10px] md:left-[250px] md:border-b-2 md:mr-[260px] md:pb-[10px]'>
                    <div className='flex flex-col mt-[60px] md:mt-[20px]  items-center md:justify-between md:flex-row'>
                        <div className='text-center'>
                            <h1 className='text-2xl sm:text-3xl'>Md Rakibul Islam</h1>
                            <h1 className='text-orange-500'>Total Point: 300</h1>
                        </div>
                        <div className='flex flex-row justify-between gap-3 md:flex-col'>
                            <button className='btn btn-sm btn-primary rounded-3xl btn-outline '
                                onClick={() => { OpenNewPost() }}
                            >

                                New Post
                            </button>
                            <button
                                className='btn btn-sm  btn-outline btn-secondary  rounded-3xl'
                                onClick={OpenEditProfile}
                            >
                                Edit Profile
                            </button>

                        </div>
                    </div>
                </div>
            </div>


            <div className='scrollBarTopProfileFixed bg-base-300 pb-1 hidden sm:block' id='scrollProfile'>
                <div className="avatar ">
                    <div className="w-8 rounded-full ring ring-inherit ring-offset-base-100 ring-offset-1 sm:ml-10 md:ml-[100px]">
                        <img src="https://api.lorem.space/image/face?hash=3174" alt='' />
                    </div>
                </div>
            </div>

            <div>

                <ProfileEdit />
            </div>
            {/* about me section  */}
            <div className='grid grid-cols-12 gap-5 text-justify'>
                <div className='col-span-12 md:col-span-5 sm:border-r-2 md:p-2'>
                    <div className='bg-base-100 p-4 md:p-2 rounded-t-lg'>
                        <About />
                    </div>
                </div>

                <div className='col-span-12 md:col-span-7 sticky' id='post'>
                    <Post posts={data?.data} />
                </div>
            </div>

            {
                uploadMethod && <UpdateProfilePicture props={{ setUploadMethod, uploadMethod }} />

            }
        </div>
    );
};

export default Profile;