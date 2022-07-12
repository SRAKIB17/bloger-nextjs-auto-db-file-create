/* eslint-disable @next/next/no-img-element */
import React from 'react';

import { useQuery } from 'react-query';
import axios from 'axios';
import About from '../profile/About';
import Post from '../Post-NewsFeed/Post';
import maleAvatar from '../../public/maleAvatar.png'
import femaleAvatar from '../../public/femaleAvatar.png'

const PublicProfile = () => {

    const { data } = useQuery('userPost_id', () => axios.get('/api/test'))

    return (
        <div className='lg:ml-[200px] lg:mr-[200px]'>
            <div id='stickyTop' className='bg-base-100 rounded-lg m-2 pb-4 md:pb-6'>
                <div className=' rounded-lg relative bg-base-100'>
                    {/* ------------------------------for cover photo ------------------------------------ */}
                    <label
                        htmlFor="openModalUploadProfilePicture"
                        title='Upload cover photo'
                    >
                        <div
                            className='relative'
                        >
                            <img
                                src="https://images.unsplash.com/photo-1655465184678-548fb85fa74a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=872&q=80"
                                alt=""
                                className='h-[200px] w-full sm:h-[300px] rounded-t-lg'
                            />
                        </div>
                    </label>

                    {/* ------------------------------for profile photo ------------------------------------ */}

                    <div
                        className='absolute bottom-[-48px] sm:bottom-[-52px] left-[50%] ml-[-55px] md:left-[100px] md:bottom-[-120px]'
                    >   <label
                        htmlFor="openModalUploadProfilePicture"
                        title='Upload cover photo'
                    >
                            <div
                                className="avatar"
                                title='Upload Profile picture'
                            >
                                <div
                                    className="w-28 sm:w-32 md:w-36 rounded-full ring ring-inherit ring-offset-base-100 ring-offset-1 bg-base-100"
                                >
                                    <img
                                        src={femaleAvatar?.src}
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
                    </div>
                </div>
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

           
        </div>
    );
};


export default PublicProfile;