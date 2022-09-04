/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import axios from 'axios';
import React from 'react';
import { useQuery } from 'react-query';
import LoadingSpin from '../../LoadingSpin';
import { FacebookSquare, GithubSquare, LinkedinSquare } from '../../ReactRSIcon';
import AboutUser from './AboutUser';
import Twitter_shadow_social_tweet_media_square_blue from './SvgComponent/Twitter_shadow_social_tweet_media_square_blue';
import Web from './SvgComponent/Web';
import Youtube from './SvgComponent/Youtube';

const ProfileInfoSection = ({ user_id }) => {
    const userInfo = useQuery(['ProfileUser', user_id], () => axios.get(`/api/public_user_details/${user_id}`,
        {
            headers: { access_token: sessionStorage.getItem('accessAutoG') }
        }));
    const user_details = userInfo?.data?.data?.user_details;
    const isLoadingAbout = userInfo?.isLoading;
    return (
        <div className='p-4'>
            <div>
                <div>
                    {/* Profile Cover */}
                    <div>
                        <figure >
                            <img src={user_details?.cover ? user_details?.cover : '/cover.png'}
                                alt=""
                                className='rounded-md sm:h-48 w-full h-40 md:h-36 2xl:h-44 shadow-md' />
                        </figure>
                    </div>
                    <div className='relative  xl:h-20 w-24 sm:h-16 h-10'>
                        <div className='absolute top-[-60px] left-[36px] 2xl:top-[-64px] '>
                            <div className="avatar online ">
                                <div
                                    className="w-24 sm:w-28 rounded-full md:w-24 xl:w-32 ring ring-gray-300 ring-offset-base-100 "
                                >
                                    <img src={user_details?.profile ? user_details?.profile : '/maleAvatar.png'} alt="profile" className='w-full h-auto bg-base-100' />
                                </div>
                            </div>
                        </div>

                        {/* <div className="avatar offline">
                            <div className="w-24 rounded-full">
                                <img src="https://placeimg.com/192/192/people" />
                            </div>
                        </div> */}
                    </div>
                    {
                        isLoadingAbout ?
                            <LoadingSpin />
                            :
                            <div className='ml-2'>
                                <div>
                                    <h1 className='text-xl mb-6 font-extralight ml-4 mt-4'>{user_details?.name}</h1>
                                </div>
                                {/* SOCIAL LINK */}
                                <div className='flex gap-2 items-center ml-10'>
                                    {
                                        Boolean(user_details?.facebook) &&
                                        <a href={user_details?.facebook} target="_blank" rel="noreferrer">
                                            <FacebookSquare color='#0674E1' size='16' className="rounded-sm" />
                                        </a>
                                    }

                                    {/* **********LINKEDIN******* */}
                                    {
                                        Boolean(user_details?.linkedin) &&
                                        <a href={user_details?.linkedin} target="_blank" rel="noreferrer">
                                            <LinkedinSquare color='#0674E1' size='16' className="rounded-sm" />
                                        </a>
                                    }

                                    {/* **********github******* */}
                                    {
                                        Boolean(user_details?.github) &&
                                        <a href={user_details?.github} target="_blank" rel="noreferrer">
                                            <GithubSquare color='currentColor' size='16' />
                                        </a>
                                    }



                                    {/* **********twitter******* */}
                                    {
                                        Boolean(user_details?.twitter) &&
                                        <a href={user_details?.twitter} target="_blank" rel="noreferrer">
                                            <Twitter_shadow_social_tweet_media_square_blue size='16' className="rounded-sm" />
                                        </a>
                                    }


                                    {/* **********youtube******* */}
                                    {
                                        Boolean(user_details?.youtube) &&
                                        <a href={user_details?.youtube} target="_blank" rel="noreferrer">
                                            <Youtube size='21' />
                                        </a>
                                    }

                                    {/* **********portfolio******* */}
                                    {
                                        Boolean(user_details?.portfolio) &&
                                        <a href={user_details?.portfolio} target="_blank" rel="noreferrer">
                                            <Web size='17' color='gray' />
                                        </a>
                                    }
                                    {/* **********instagram******* */}
                                    {
                                        Boolean(user_details?.instagram) &&
                                        <a href={user_details?.instagram} target="_blank" rel="noreferrer">
                                            <img src="/svg/Instagram.svg" alt="" className='w-4 h-4'/>
                                        </a>
                                    }

                                 
                                </div>

                                <div>
                                    <AboutUser user_details={user_details} />
                                </div>
                            </div>
                    }

                </div>
            </div>
        </div>
    );
};

export default ProfileInfoSection;