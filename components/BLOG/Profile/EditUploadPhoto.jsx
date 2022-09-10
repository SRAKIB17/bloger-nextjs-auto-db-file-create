import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { UserFullInfoProvider } from '../../../pages/_app';
import CoverPhoto from './profilePicUpload/CoverPhoto';
import ProfilePic from './profilePicUpload/ProfilePic';

const UpdateProfilePicture = ({ setShowPage }) => {
    const { user, user_details, isLoading } = useContext(UserFullInfoProvider);

    const [ThumbnailData, setThumbnailData] = useState('');

    const [coverThumbnail, setCoverThumbnail] = useState('')
    const [profileThumbnail, setProfileThumbnail] = useState('')


    const [errMsg, setErrMsg] = useState('')
    const uploadCoverProfilePicHandler = async (e) => {
        e.preventDefault()


        const updateForm = {
            userID: user_details?.userID,
            cover: coverThumbnail || user_details?.cover,
            profile: profileThumbnail || user_details?.profile
        }
        console.log(updateForm)

        // PUT SERVER AND SAVE USER COVER AND PROFILE PICTURE//
        const { data } = await axios.put('/api/profile/update_profile', updateForm, {
            headers: { access_token: sessionStorage.getItem('accessAutoG') }
        });

        if (data?.message === 'success') {
            setErrMsg('')
            setUploadMethod(null)
            location.reload()
        }
        if (data?.message === 'error') {
            setErrMsg(data?.error)
        }

    }
    return (
        <div>

            <div>

                <div className="mt-10">
                    <h1 className='text-primary text-xl font-bold text-center mb-1'>
                        Update Profile Photo
                    </h1>
                    <form onSubmit={uploadCoverProfilePicHandler} className='flex flex-col items-center w-full'>
                        <div>
                            <ProfilePic profileThumbnail={profileThumbnail} setProfileThumbnail={setProfileThumbnail} />
                        </div>
                        <div>
                            <CoverPhoto coverThumbnail={coverThumbnail} setCoverThumbnail={setCoverThumbnail} />
                        </div>
                        <button className='btn btn-sm m-4 btn-primary text-white'>Save</button>
                    </form>
                </div>

            </div>
        </div>
    );
};


export default UpdateProfilePicture;




