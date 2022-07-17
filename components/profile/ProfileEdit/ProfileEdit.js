import React, { useContext, useState } from 'react';
import styles from '../NewPost/NewPost.module.css'
import { FacebookSquare, Github, Youtube, LinkedinNew, Instagram, Twitter, TwitterSquare, Quote, Gender, School, Location, Worker } from '../../ReactRSIcon/index';
import axios from 'axios';
import LoadingFlowCircle from '../../LoadingFlowCircle';
import private_access_token_client from '../../hooks/api/verifyUser/private_access_token_client';
import LoadingSpin from '../../LoadingSpin';
import { UserFullInfoProvider } from '../../../pages/_app';

const ProfileEdit = ({props}) => {
    const setEditProfile = props
    const { user, user_details, isLoading } = useContext(UserFullInfoProvider)

    const [updateLoading, setUpdateLoading] = useState(false)

    function closeNewPost() {
        // document.getElementById("profileEdit").style.width = "0";
        setEditProfile(null)
    }
    const [errMsg, setErrMsg] = useState('')

    const updateHandle = async (event) => {
        event.preventDefault();
        setUpdateLoading(true)
        // const body = event.target.postBody.value;
        try {
            const updateForm = {
                userID: user_details?.userID,
                work: event.target.work.value,
                location: event.target.address.value,
                school: event.target.study.value,
                github: event.target.github.value,
                youtube: event.target.youtube.value,
                facebook: event.target.facebook.value,
                linkedin: event.target.linkedin.value,
                linkedin: event.target.linkedin.value,
                instagram: event.target.instagram.value,
                twitter: event.target.twitter.value,
                gender: event.target.gender.value,
                quote: event.target.quote.value,
            }
            const { user_check } = private_access_token_client()
            setEditProfile(null)
            const { data } = await axios.put('/api/profile/update_profile', updateForm, {
                headers: {
                    user_check: user_check
                }
            });
            if (data?.message === 'success') {
                setErrMsg('')
                location.reload()
                setEditProfile(null)
            }
            if (data?.message === 'error') {
                setErrMsg(data?.error)
            }
            setUpdateLoading(false)
        }
        catch {
            setUpdateLoading(false)

        }

    }
    return (
        <div>
            <div id="profileEdit" className={styles.NewPostNav + ' bg-base-100 '} style={{ width: '100%' }}>
                <a href="#" className={styles.closebtn} onClick={closeNewPost}>&times;</a>
                <div className='shadow-2xl max-w-md mx-auto p-4 h-full bg-base-300 rounded-3xl'>
                    <form action="" onSubmit={updateHandle} className='flex flex-col gap-2 m-10'>
                        {
                            isLoading &&
                            <div className=' relative flex items-center justify-center z-[1000]'>
                                <div className='absolute top-0 pb-40 pt-40'>
                                    <LoadingSpin />
                                </div>
                            </div>
                        }
                        {
                            updateLoading &&
                            <div className=' relative flex items-center justify-center z-[1000]'>
                                <div className='absolute top-0 pb-40 pt-40'>
                                    <LoadingFlowCircle />
                                </div>
                            </div>
                        }

                        <div className='p-1 mx-auto'>
                            <table className='table-auto '>
                                <tbody className='flex flex-col gap-2'>
                                    <tr>
                                        <td className='flex items-center gap-1'>
                                            <Worker />
                                            <input
                                                type="text"
                                                name="work"
                                                id="work"
                                                defaultValue={user_details?.work}
                                                className='input input-sm input-primary form-control w-56 sm:w-80'
                                                placeholder='Work'
                                            />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className='flex items-center gap-1'>
                                            <Location />
                                            <input
                                                defaultValue={user_details?.location}
                                                type="text"
                                                name="address"
                                                id="addressProfile"
                                                className='input input-sm input-primary form-control w-56 sm:w-80'
                                                placeholder='Address'
                                            />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className='flex items-center gap-1'>
                                            <School />
                                            <input
                                                defaultValue={user_details?.school}
                                                type="text"
                                                name="study"
                                                id="study"
                                                className='input input-sm input-primary form-control w-56 sm:w-80'
                                                placeholder='Study'
                                            />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className='flex items-center gap-1'>
                                            <Github />
                                            <input
                                                defaultValue={user_details?.github}
                                                type="text"
                                                name="github"
                                                id="github"
                                                className='input input-sm input-primary form-control w-56 sm:w-80'
                                                placeholder='Github'
                                            />
                                        </td>
                                    </tr>

                                    <tr>
                                        <td className='flex items-center gap-1'>
                                            <Youtube />
                                            <input
                                                defaultValue={user_details?.youtube}
                                                type="text"
                                                name="youtube"
                                                id="Youtube"
                                                className='input input-sm input-primary form-control w-56 sm:w-80'
                                                placeholder='Youtube'
                                            />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className='flex items-center gap-1'>
                                            <FacebookSquare className='rounded-sm' />
                                            <input
                                                defaultValue={user_details?.facebook}
                                                type="text"
                                                name="facebook"
                                                id="Facebook"
                                                className='input input-sm input-primary form-control w-56 sm:w-80'
                                                placeholder='Facebook'
                                            />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className='flex items-center gap-1'>
                                            <LinkedinNew />
                                            <input
                                                defaultValue={user_details?.linkedin}
                                                type="text"
                                                name="linkedin"
                                                id="linkedin"
                                                className='input input-sm input-primary form-control w-56 sm:w-80'
                                                placeholder='Linkedin'
                                            />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className='flex items-center gap-1'>
                                            <Instagram />
                                            <input
                                                defaultValue={user_details?.instagram}
                                                type="text"
                                                name="instagram"
                                                id="Instagram"
                                                className='input input-sm input-primary form-control w-56 sm:w-80'
                                                placeholder='Instagram'
                                            />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className='flex items-center gap-1'>
                                            <Twitter />
                                            <input
                                                defaultValue={user_details?.twitter}
                                                type="text"
                                                name="twitter"
                                                id="Twitter"
                                                className='input input-sm input-primary form-control w-56 sm:w-80'
                                                placeholder='Twitter'
                                            />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className='flex items-center gap-1'>
                                            <Gender />

                                            <select id='Gender' defaultValue={user_details?.gender} name='gender' className="select select-primary select-sm select-bordered select-md form-control max-w-xs">
                                                <option value='Male'>Male</option>
                                                <option value='Female'>Female</option>
                                            </select>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className='flex items-center gap-1'>
                                            <Quote />
                                            <input
                                                defaultValue={user_details?.quote}
                                                type="text"
                                                name="quote"
                                                id="Quote"
                                                className='input input-sm input-primary form-control w-56 sm:w-80'
                                                placeholder='About Me'
                                            />
                                        </td>

                                    </tr>
                                    <tr>
                                        <td className='flex items-center gap-1'>
                                            <input
                                                type="submit"
                                                value="Update"
                                                className='btn btn-sm text-white rounded-3xl btn-primary font-light w-fit  '
                                            />
                                        </td>

                                    </tr>
                                </tbody>
                            </table>
                            <p className='text-red-600 tab-xs m-4'>
                                {
                                    errMsg
                                }
                            </p>
                        </div>
                    </form>

                </div>
            </div>
        </div>
    );
};

export default ProfileEdit;